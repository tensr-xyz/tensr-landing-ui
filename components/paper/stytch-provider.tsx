'use client';

import { StytchProvider, useStytch } from '@stytch/nextjs';
import { createStytchUIClient } from '@stytch/nextjs/ui';
import { useRouter } from 'next/navigation';
import { FormEvent, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { Mark } from '@/components/paper/chrome';

const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN;
const CLIENT = PUBLIC_TOKEN ? createStytchUIClient(PUBLIC_TOKEN) : null;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.tensr.xyz';
const SESSION_MINUTES = 7 * 24 * 60;

export function PaperStytch({ children }: { children: ReactNode }) {
  if (!CLIENT) {
    return (
      <SignShell title="Sign in to Tensr" lede="Sign-in is not configured in this environment.">
        <p>The Stytch public token is missing, so a code cannot be sent.</p>
      </SignShell>
    );
  }
  return <StytchProvider stytch={CLIENT}>{children}</StytchProvider>;
}

function SignShell({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F9F4EB] px-10 pb-8 pt-7 text-[#14473A]">
      <div className="flex h-7 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[28px] font-semibold leading-7 tracking-[-0.04em]">
          <Mark />
          tensr
        </Link>
        <Link href="/" className="text-[16px]">
          Back to site
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="flex w-[520px] max-w-full flex-col gap-6 bg-[#EEE8DC] px-10 pb-10 pt-11">
          <div className="flex flex-col gap-3 pb-2">
            <h1 className="text-[48px] leading-[52px] tracking-[-0.04em]">{title}</h1>
            <p className="text-[18px] leading-[27px] text-[#3D6A5E]">{lede}</p>
          </div>
          {children}
        </div>
      </div>
      <div />
    </div>
  );
}

function handoff(sessionToken: string, sessionJwt?: string) {
  const hash = new URLSearchParams({ session_token: sessionToken });
  if (sessionJwt) hash.set('session_jwt', sessionJwt);
  window.location.assign(`${APP_URL}/login#${hash.toString()}`);
}

function OAuthButtons() {
  const stytch = useStytch();
  const start = (provider: 'google' | 'github' | 'microsoft') => {
    const redirectUrl = new URL('/signin', window.location.origin).toString();
    const options = { login_redirect_url: redirectUrl, signup_redirect_url: redirectUrl };
    if (provider === 'google') void stytch.oauth.google.start(options);
    if (provider === 'microsoft') void stytch.oauth.microsoft.start(options);
    if (provider === 'github') void stytch.oauth.github.start(options);
  };
  return (
    <div className="flex flex-col gap-2">
      {(
        [
          ['google', 'G', 'Continue with Google'],
          ['microsoft', 'M', 'Continue with Microsoft'],
          ['github', 'GH', 'Continue with GitHub'],
        ] as const
      ).map(([provider, mark, label]) => (
        <button
          key={provider}
          type="button"
          className="flex h-14 items-center gap-3 border border-[#14473A] bg-[#FCFAF5] pl-8 text-[17px]"
          onClick={() => start(provider)}
        >
          <span className="flex size-6 items-center justify-center rounded-full border-[1.5px] border-[#14473A] text-[12px] font-semibold">
            {mark}
          </span>
          {label}
        </button>
      ))}
    </div>
  );
}

export function SignInForm() {
  const stytch = useStytch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) {
      setError('Enter an email address');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const response = await stytch.otps.email.loginOrCreate(trimmed);
      const methodId = response.method_id;
      if (!methodId) throw new Error('Could not send a code to that email');
      sessionStorage.setItem('tensr-signin-email', trimmed);
      sessionStorage.setItem('tensr-signin-method', methodId);
      router.push('/signin/code');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send a code');
      setBusy(false);
    }
  };

  return (
    <SignShell title="Sign in to Tensr" lede="Pick up where you left off. No password, we'll send you a code.">
      <OAuthButtons />
      <div className="flex items-center gap-3 text-[15px] text-[#3D6A5E]">
        <span className="h-px flex-1 bg-[#14473A] opacity-20" />
        or
        <span className="h-px flex-1 bg-[#14473A] opacity-20" />
      </div>
      <form className="flex flex-col gap-2" onSubmit={event => void submit(event)}>
        <label className="text-[14px]" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
          className="h-14 border border-[#14473A] bg-[#FCFAF5] px-4 text-[17px]"
          placeholder="Your email address"
        />
        {error ? <p className="text-[14px] text-[#A15C12]">{error}</p> : null}
        <button type="submit" disabled={busy} className="h-14 bg-[#14473A] text-[17px] text-[#F9F4EB]">
          {busy ? 'Sending…' : 'Continue'}
        </button>
      </form>
    </SignShell>
  );
}

export function CodeForm() {
  const stytch = useStytch();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState('');
  useEffect(() => {
    setEmail(sessionStorage.getItem('tensr-signin-email') || '');
  }, []);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const methodId = sessionStorage.getItem('tensr-signin-method');
    if (!methodId) {
      setError('Request a new code first.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const response = await stytch.otps.authenticate(code.trim(), methodId, {
        session_duration_minutes: SESSION_MINUTES,
      });
      if (!response.session_token) throw new Error('That code did not start a session');
      handoff(response.session_token, response.session_jwt);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'That code was not accepted');
      setBusy(false);
    }
  };

  return (
    <SignShell title="Enter your code" lede={email ? `We sent a code to ${email}.` : 'Enter the code from your email.'}>
      <form className="flex flex-col gap-2" onSubmit={event => void submit(event)}>
        <label className="text-[14px]" htmlFor="code">
          Code
        </label>
        <input
          id="code"
          inputMode="numeric"
          autoComplete="one-time-code"
          value={code}
          onChange={event => setCode(event.target.value)}
          className="h-14 border border-[#14473A] bg-[#FCFAF5] px-4 text-[17px] tracking-[0.3em]"
        />
        {error ? <p className="text-[14px] text-[#A15C12]">{error}</p> : null}
        <button type="submit" disabled={busy} className="h-14 bg-[#14473A] text-[17px] text-[#F9F4EB]">
          {busy ? 'Checking…' : 'Continue'}
        </button>
      </form>
      <Link href="/signin" className="text-[15px] text-[#3D6A5E]">
        Use a different email
      </Link>
    </SignShell>
  );
}

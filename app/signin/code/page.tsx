import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = { title: 'Sign in' };

function queryString(searchParams: Record<string, string | string[] | undefined>) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === 'string') query.set(key, value);
    else if (Array.isArray(value)) value.forEach(item => query.append(key, item));
  }
  const text = query.toString();
  return text ? `?${text}` : '';
}

export default async function SignInCodePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  redirect(`https://app.tensr.xyz/login${queryString(await searchParams)}`);
}

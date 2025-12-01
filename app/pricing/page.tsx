'use client';

import Link from 'next/link';
import { FrequencyToggle } from '@/components/frequency-toggle';
import { Accordion } from '@/components/accordion';
import { useState } from 'react';

const PricingPage = () => {
  const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('monthly');

  const qaItems = [
    {
      id: 'q1',
      question: 'What is the right plan for me?',
      answer: '',
    },
    {
      id: 'q2',
      question: 'What are my payment options?',
      answer: '',
    },
    {
      id: 'q3',
      question: 'How does usage-based pricing work?',
      answer: '',
    },
    {
      id: 'q4',
      question: 'How can I see and manage Cursorʼs usage in my organization?',
      answer: '',
    },
    {
      id: 'q5',
      question: 'How does Cursor use my data?',
      answer: '',
    },
    {
      id: 'q6',
      question: 'Where can I ask more questions?',
      answer: '',
    },
  ];

  return (
    <>
      <section
        className="py-12 bg-background text-font mb-4"
        data-sanity="id=9da2f560-301e-4713-8113-bbaa85c4b14c;type=pricingPage;path=pageBuilder;base=http%3A%2F%2Flocalhost%3A3333"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl text-center">Pricing</h1>
          <div className="mt-4 flex justify-center">
            <FrequencyToggle value={frequency} onChange={setFrequency} />
          </div>

          {/* Individual Plans */}
          <div className="mt-12 space-y-8">
            <h2 id="individual" className="text-xl font-medium">
              <a href="#individual" className="hover:opacity-90">
                Individual Plans
              </a>
            </h2>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Hobby */}
              <Link
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video lg:aspect-[4/5]"
                href="/download"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-0-0">
                        Hobby
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">Free</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Includes:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>One-week Pro trial</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Limited Agent requests</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Limited Tab completions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-secondary text-secondary-foreground hover:opacity-90">
                      Download
                    </span>
                  </div>
                </div>
              </Link>

              {/* Pro */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video lg:aspect-[4/5]"
                href="https://cursor.com/api/auth/checkoutDeepControl"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-0-1">
                        Pro
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">$20</span>
                      <span className="text-muted-foreground text-sm"> / mo.</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Everything in Hobby, plus:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Extended limits on Agent</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Unlimited Tab completions</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Background Agents</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Maximum context windows</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-secondary text-secondary-foreground hover:opacity-90">
                      Get Pro
                    </span>
                  </div>
                </div>
              </Link>

              {/* Pro+ */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video lg:aspect-[4/5]"
                href="https://cursor.com/api/auth/checkoutDeepControl?tier=pro_plus"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-0-2">
                        Pro+
                      </h3>
                      <p className="text-primary">Recommended</p>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">$60</span>
                      <span className="text-muted-foreground text-sm"> / mo.</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Everything in Pro, plus:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>3x usage on all OpenAI, Claude, Gemini models</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-primary text-primary-foreground hover:opacity-90">
                      Get Pro+
                    </span>
                  </div>
                </div>
              </Link>

              {/* Ultra */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video lg:aspect-[4/5]"
                href="https://cursor.com/api/auth/checkoutDeepControl?tier=ultra"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-0-3">
                        Ultra
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">$200</span>
                      <span className="text-muted-foreground text-sm"> / mo.</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Everything in Pro, plus:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>20x usage on all OpenAI, Claude, Gemini models</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Priority access to new features</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-secondary text-secondary-foreground hover:opacity-90">
                      Get Ultra
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Business Plans */}
          <div className="mt-12 space-y-8">
            <h2 id="business" className="text-xl font-medium">
              <a href="#business" className="hover:opacity-90">
                Business Plans
              </a>
            </h2>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              {/* Teams */}
              <Link
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video"
                href="https://cursor.com/team/new-team?yearly=false"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-1-0">
                        Teams
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">$40</span>
                      <span className="text-muted-foreground text-sm"> / user / mo.</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Everything in Pro, plus:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Centralized team billing</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Usage analytics and reporting</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Org-wide privacy mode controls</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Role-based access control</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>SAML/OIDC SSO</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-secondary text-secondary-foreground hover:opacity-90">
                      Get Teams
                    </span>
                  </div>
                </div>
              </Link>

              {/* Enterprise */}
              <Link
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video"
                href="/contact-sales"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-1-1">
                        Enterprise
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">Custom</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Everything in Teams, plus:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Pooled usage</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Invoice/PO billing</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>SCIM seat management</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>AI code tracking API and audit logs</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Granular admin and model controls</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Priority support and account management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-secondary text-secondary-foreground hover:opacity-90">
                      Contact Sales
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bugbot Add-on */}
          <div className="mt-12 space-y-8">
            <h2 id="bugbot" className="text-xl font-medium">
              <a href="#bugbot" className="hover:opacity-90">
                Bugbot Add-on
              </a>
            </h2>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Bugbot Free */}
              <Link
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video lg:aspect-[4/5]"
                href="https://cursor.com/dashboard?tab=bugbot"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-2-0">
                        Free
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">$0</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Includes:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Limited code reviews each month</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Unlimited access to Cursor Ask</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Cursor connection to auto-fix bugs</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>GitHub integration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-secondary text-secondary-foreground hover:opacity-90">
                      Try Bugbot
                    </span>
                  </div>
                </div>
              </Link>

              {/* Bugbot Pro */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video lg:aspect-[4/5]"
                href="https://cursor.com/dashboard?tab=bugbot"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-2-1">
                        Pro
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">$40</span>
                      <span className="text-muted-foreground text-sm"> / user / mo.</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Everything in Free, plus:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>14 day individual trial</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Unlimited reviews on up to 200 PRs/month</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Access to Bugbot Rules</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-primary text-primary-foreground hover:opacity-90">
                      Get Bugbot Pro
                    </span>
                  </div>
                </div>
              </Link>

              {/* Bugbot Teams */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video lg:aspect-[4/5]"
                href="https://cursor.com/dashboard?tab=bugbot"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-2-2">
                        Teams
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">$40</span>
                      <span className="text-muted-foreground text-sm"> / user / mo.</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Everything in Pro, plus:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>14-day team trial</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Unlimited code reviews on all PRs</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Analytics and reporting dashboard</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Advanced rules and settings</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-secondary text-secondary-foreground hover:opacity-90">
                      Get Bugbot Teams
                    </span>
                  </div>
                </div>
              </Link>

              {/* Bugbot Enterprise */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-sm transition-all hover:bg-hover p-6 md:aspect-video lg:aspect-[4/5]"
                href="/contact-sales"
              >
                <div className="col-span-full row-span-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-baseline gap-x-2">
                      <h3 className="text-lg" id="tier-2-3">
                        Enterprise
                      </h3>
                    </div>
                    <p className="flex items-baseline">
                      <span className="text-lg text-muted-foreground">Custom</span>
                    </p>
                    <p className="text-muted-foreground mt-3">Everything in Teams, plus:</p>
                    <ul role="list" className="mt-3 space-y-0.5">
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>30-day org-wide trial</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Advanced analytics and reporting</span>
                      </li>
                      <li className="gap-x-3 flex">
                        <span>✓</span>
                        <span>Priority support and account management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all border-none cursor-pointer bg-secondary text-secondary-foreground hover:opacity-90">
                      Contact Sales
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Garden Section */}
      <section
        className="py-12 bg-background text-font pb-6 pt-0"
        id="logo-garden"
        data-sanity="id=9da2f560-301e-4713-8113-bbaa85c4b14c;type=pricingPage;path=pageBuilder:16f82dbb1e74;base=http%3A%2F%2Flocalhost%3A3333"
      >
        <div className="flex flex-col container mx-auto text-center">
          <h2 className="text-sm mb-4">
            Trusted every day by millions of professional developers.
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {/* Stripe */}
            <div className="relative flex items-center justify-center">
              <div className="bg-card border border-border h-[4rem] sm:h-[4.5rem] md:h-[6.25rem] px-3 flex w-full items-center justify-center rounded">
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain block dark:hidden">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/d2404e7ff9893d2ff70751b73bde5cf5ff77a2eb-130x85.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Stripe logo"
                    loading="lazy"
                    decoding="async"
                    width="130"
                    height="85"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/d2404e7ff9893d2ff70751b73bde5cf5ff77a2eb-130x85.svg?auto=format"
                  />
                </picture>
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain hidden dark:block">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/beae7a1f5d7eb381a8729ea50e240ab0238d8b50-130x85.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Stripe logo"
                    loading="lazy"
                    decoding="async"
                    width="130"
                    height="85"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/beae7a1f5d7eb381a8729ea50e240ab0238d8b50-130x85.svg?auto=format"
                  />
                </picture>
              </div>
            </div>
            {/* OpenAI */}
            <div className="relative flex items-center justify-center">
              <div className="bg-card border border-border h-[4rem] sm:h-[4.5rem] md:h-[6.25rem] px-3 flex w-full items-center justify-center rounded">
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain block dark:hidden">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/a733e7c0b6d2a19f7769d1d327781dc74f577f49-159x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="OpenAI Logo"
                    loading="lazy"
                    decoding="async"
                    width="159"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/a733e7c0b6d2a19f7769d1d327781dc74f577f49-159x84.svg?auto=format"
                  />
                </picture>
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain hidden dark:block">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/53062f7690ae5b0cdbed3ea686fcea9da8b0b0b6-159x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="OpenAI Logo"
                    loading="lazy"
                    decoding="async"
                    width="159"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/53062f7690ae5b0cdbed3ea686fcea9da8b0b0b6-159x84.svg?auto=format"
                  />
                </picture>
              </div>
            </div>
            {/* Linear */}
            <div className="relative flex items-center justify-center">
              <div className="bg-card border border-border h-[4rem] sm:h-[4.5rem] md:h-[6.25rem] px-3 flex w-full items-center justify-center rounded">
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain block dark:hidden">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/6f626e50f09b9272363eb3067f871533eaf116ed-188x85.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Linear logo"
                    loading="lazy"
                    decoding="async"
                    width="188"
                    height="85"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/6f626e50f09b9272363eb3067f871533eaf116ed-188x85.svg?auto=format"
                  />
                </picture>
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain hidden dark:block">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/eb9e0a5931092d4db1ddda33106d16b7ef6b0829-188x85.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Linear logo"
                    loading="lazy"
                    decoding="async"
                    width="188"
                    height="85"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/eb9e0a5931092d4db1ddda33106d16b7ef6b0829-188x85.svg?auto=format"
                  />
                </picture>
              </div>
            </div>
            {/* Datadog */}
            <div className="relative flex items-center justify-center">
              <div className="bg-card border border-border h-[4rem] sm:h-[4.5rem] md:h-[6.25rem] px-3 flex w-full items-center justify-center rounded">
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain block dark:hidden">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/f44dd77a6265aa8b77768cddfa25bb4a60cd13c9-201x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Datadog logo"
                    loading="lazy"
                    decoding="async"
                    width="201"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/f44dd77a6265aa8b77768cddfa25bb4a60cd13c9-201x84.svg?auto=format"
                  />
                </picture>
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain hidden dark:block">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/da55192921531e5fd2ba00701f4bf6ffd8b1781d-196x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Datadog logo"
                    loading="lazy"
                    decoding="async"
                    width="201"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/da55192921531e5fd2ba00701f4bf6ffd8b1781d-196x84.svg?auto=format"
                  />
                </picture>
              </div>
            </div>
            {/* Rippling */}
            <div className="relative flex items-center justify-center">
              <div className="bg-card border border-border h-[4rem] sm:h-[4.5rem] md:h-[6.25rem] px-3 flex w-full items-center justify-center rounded">
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain block dark:hidden">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/440e543f9a7e5b9d196a9b3662a9e0e895362f05-232x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Rippling logo"
                    loading="lazy"
                    decoding="async"
                    width="232"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/440e543f9a7e5b9d196a9b3662a9e0e895362f05-232x84.svg?auto=format"
                  />
                </picture>
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain hidden dark:block">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/a51bba3a29e4471cb49ec7c9692990e69bffcb0d-232x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Rippling logo"
                    loading="lazy"
                    decoding="async"
                    width="232"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/a51bba3a29e4471cb49ec7c9692990e69bffcb0d-232x84.svg?auto=format"
                  />
                </picture>
              </div>
            </div>
            {/* Figma */}
            <div className="relative flex items-center justify-center">
              <div className="bg-card border border-border h-[4rem] sm:h-[4.5rem] md:h-[6.25rem] px-3 flex w-full items-center justify-center rounded">
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain block dark:hidden">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/9f025cabdfa3dc225311f8b515349b7373316d20-128x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Figma logo"
                    loading="lazy"
                    decoding="async"
                    width="128"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/9f025cabdfa3dc225311f8b515349b7373316d20-128x84.svg?auto=format"
                  />
                </picture>
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain hidden dark:block">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/105275382af564c3ab7ce401f92b3bcda4376bea-128x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Figma logo"
                    loading="lazy"
                    decoding="async"
                    width="128"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/105275382af564c3ab7ce401f92b3bcda4376bea-128x84.svg?auto=format"
                  />
                </picture>
              </div>
            </div>
            {/* Ramp */}
            <div className="relative flex items-center justify-center">
              <div className="bg-card border border-border h-[4rem] sm:h-[4.5rem] md:h-[6.25rem] px-3 flex w-full items-center justify-center rounded">
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain block dark:hidden">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/a07ff518beeee9fc023aeeb9028cf1236fe3763e-174x85.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Ramp logo"
                    loading="lazy"
                    decoding="async"
                    width="174"
                    height="85"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/a07ff518beeee9fc023aeeb9028cf1236fe3763e-174x85.svg?auto=format"
                  />
                </picture>
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain hidden dark:block">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/cf60827b1c3f341d19ef660f367bca517b0e74b9-174x85.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Ramp logo"
                    loading="lazy"
                    decoding="async"
                    width="174"
                    height="85"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/cf60827b1c3f341d19ef660f367bca517b0e74b9-174x85.svg?auto=format"
                  />
                </picture>
              </div>
            </div>
            {/* Adobe */}
            <div className="relative flex items-center justify-center">
              <div className="bg-card border border-border h-[4rem] sm:h-[4.5rem] md:h-[6.25rem] px-3 flex w-full items-center justify-center rounded">
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain block dark:hidden">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/bdc0f1bd4dfe8115422533f560f9f3eef7f23ac7-149x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Adobe logo"
                    loading="lazy"
                    decoding="async"
                    width="149"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/bdc0f1bd4dfe8115422533f560f9f3eef7f23ac7-149x84.svg?auto=format"
                  />
                </picture>
                <picture className="h-[2rem] sm:h-[2.25rem] md:h-[2.5rem] w-auto object-contain hidden dark:block">
                  <source srcSet="https://cdn.sanity.io/images/2hv88549/production/37d2d1a1edcce15ca38c6021e882b6a7fff77ebb-149x84.svg?auto=format" />
                  <img
                    className="object-contain h-full w-full"
                    alt="Adobe logo"
                    loading="lazy"
                    decoding="async"
                    width="149"
                    height="84"
                    fetchPriority="auto"
                    src="https://cdn.sanity.io/images/2hv88549/production/37d2d1a1edcce15ca38c6021e882b6a7fff77ebb-149x84.svg?auto=format"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section
        className="py-12 bg-background text-font"
        data-sanity="id=9da2f560-301e-4713-8113-bbaa85c4b14c;type=pricingPage;path=pageBuilder:35c039ef7ea4;base=http%3A%2F%2Flocalhost%3A3333"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 gap-0">
            <div className="col-span-full lg:col-end-7">
              <div className="sticky top-[72px] max-lg:mb-8">
                <h2 className="text-2xl text-pretty">Questions & Answers</h2>
              </div>
            </div>
            <div className="col-span-full lg:col-start-7 lg:col-end-[-1]">
              <Accordion items={qaItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;

'use client';

import Link from 'next/link';
import { Accordion } from '@/components/accordion';
import { ArrowRight } from 'lucide-react';

export const EnterpriseTemplate = () => {
  const qaItems = [
    {
      id: 'q1',
      question: 'How do usage limits work for enterprises?',
      answer:
        'Published plans are Trial, Pro, Pro+ and Teams. Row caps and monthly assistant and report limits are on the pricing page and enforced in billing. Contact sales to discuss a custom arrangement.',
    },
    {
      id: 'q2',
      question: 'How does Tensr handle large-scale datasets?',
      answer:
        'Datasets are stored in Amazon S3. Trial datasets are capped at 100,000 rows. Paid plans are capped at 1,000,000 rows per dataset.',
    },
    {
      id: 'q3',
      question: 'How does Tensr use my data?',
      answer:
        'Datasets are stored so you can analyse them. They are encrypted at rest with Amazon S3 SSE-S3 (AES-256) and sent over HTTPS. Tensr does not train models on your data. Text sent to the OpenAI API is not used by OpenAI to train their models by default.',
    },
    {
      id: 'q4',
      question: 'What security certifications does Tensr have?',
      answer:
        'Tensr does not hold a SOC 2 report and does not run a published annual penetration test. Datasets are encrypted at rest with Amazon S3 SSE-S3 (AES-256) and sent over HTTPS. A DPA is available on request.',
    },
    {
      id: 'q5',
      question: 'Does Tensr support SSO and SCIM?',
      answer:
        'No. Sign-in is email one-time codes through Stytch. SAML SSO and SCIM provisioning are not available.',
    },
    {
      id: 'q6',
      question: 'Does Tensr support on-premises or VPC deployment?',
      answer: 'No. Tensr runs in AWS us-east-1. On-premises and VPC deployment are not available.',
    },
    {
      id: 'q7',
      question: 'What admin controls are available?',
      answer:
        'Organisation owners invite members and set their role. There is no separate admin dashboard, and SAML SSO and SCIM are not available.',
    },
    {
      id: 'q8',
      question: 'How can I track usage across my organization?',
      answer:
        'Plan caps are the Trial, Pro, Pro+ and Teams limits on the pricing page. Tensr does not provide a separate organisation usage-analytics dashboard.',
    },
  ];

  return (
    <main className="bg-background text-font">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-8 bg-background text-font">
        <div className="container mx-auto">
          <div className="text-left mb-4 max-w-prose">
            <small className="text-base text-muted-foreground block mb-2">Enterprise</small>
            <h1 className="text-4xl font-normal text-balance mb-4">
              One workspace for the research team.
            </h1>
            <div className="flex items-center justify-start gap-4 mt-6">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 h-11 text-base font-medium rounded-full transition-all bg-[var(--color-button-primary-bg)] border border-[var(--color-button-primary-border)] text-[var(--color-button-primary-text)] hover:opacity-90"
                href="/contact-sales"
              >
                Contact sales
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 px-4 md:px-8" id="enterprise-security">
        <div className="container mx-auto">
          <div className="text-center mx-auto mb-8 max-w-prose">
            <h2 className="text-2xl md:text-3xl text-balance mx-auto font-medium mb-4">
              How Tensr handles data
            </h2>
            <div className="flex justify-center">
              <div className="text-lg text-muted-foreground flex flex-col text-balance">
                <p>What is in place today, and what is not.</p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-12 px-4 md:px-8 bg-background text-font pt-0 pb-0">
          <div className="container mx-auto my-8">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-4">
              <div className="block bg-card border border-border rounded transition-all hover:bg-hover p-6 flex h-full flex-col lg:min-h-[102.4px]">
                <div className="flex-grow">
                  <h2 className="text-base font-medium mb-2">Stored for your analysis</h2>
                  <div className="text-muted-foreground">
                    <p>
                      Datasets stay in your account so you can reopen them. Tensr does not train
                      models on them. OpenAI does not train on API data by default.
                    </p>
                  </div>
                </div>
              </div>
              <div className="block bg-card border border-border rounded transition-all hover:bg-hover p-6 flex h-full flex-col lg:min-h-[102.4px]">
                <div className="flex-grow">
                  <h2 className="text-base font-medium mb-2">Sign-in</h2>
                  <div className="text-muted-foreground">
                    <p>Email one-time codes through Stytch. SAML SSO is not available.</p>
                  </div>
                </div>
              </div>
              <div className="block bg-card border border-border rounded transition-all hover:bg-hover p-6 flex h-full flex-col lg:min-h-[102.4px]">
                <div className="flex-grow">
                  <h2 className="text-base font-medium mb-2">No SCIM</h2>
                  <div className="text-muted-foreground">
                    <p>User provisioning is manual. SCIM is not available.</p>
                  </div>
                </div>
              </div>
              <div className="block bg-card border border-border rounded transition-all hover:bg-hover p-6 flex h-full flex-col lg:min-h-[102.4px]">
                <div className="flex-grow">
                  <h2 className="text-base font-medium mb-2">Organisation admin</h2>
                  <div className="text-muted-foreground">
                    <p>Owners manage members and teams inside the app.</p>
                  </div>
                </div>
              </div>
              <div className="block bg-card border border-border rounded transition-all hover:bg-hover p-6 flex h-full flex-col lg:min-h-[102.4px]">
                <div className="flex-grow">
                  <h2 className="text-base font-medium mb-2">Region</h2>
                  <div className="text-muted-foreground">
                    <p>Application data is processed in AWS us-east-1.</p>
                  </div>
                </div>
              </div>
              <div className="block bg-card border border-border rounded transition-all hover:bg-hover p-6 flex h-full flex-col lg:min-h-[102.4px]">
                <div className="flex-grow">
                  <h2 className="text-base font-medium mb-2">No SOC 2 report</h2>
                  <div className="text-muted-foreground">
                    <p>Tensr is not SOC 2 certified and does not publish an annual pen test.</p>
                  </div>
                </div>
              </div>
              <div className="block bg-card border border-border rounded transition-all hover:bg-hover p-6 flex h-full flex-col lg:min-h-[102.4px]">
                <div className="flex-grow">
                  <h2 className="text-base font-medium mb-2">Robust data protection</h2>
                  <div className="text-muted-foreground">
                    <p>S3 SSE-S3 (AES-256) at rest. HTTPS in transit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-10 container mx-auto">
          <div className="text-center mx-auto max-w-[65ch]">
            <div className="flex items-center justify-center gap-4 mt-10">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full transition-all bg-[var(--color-button-primary-bg)] border border-[var(--color-button-primary-border)] text-[var(--color-button-primary-text)] hover:opacity-90"
                href="mailto:help@tensr.xyz?subject=Security%20questions"
              >
                Ask a security question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful, yet customizable Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-left mb-8 max-w-prose">
            <h2 className="text-2xl md:text-3xl text-balance font-medium mb-4">
              The same tools for the whole team
            </h2>
            <div className="flex justify-start mb-4">
              <div className="text-lg text-muted-foreground flex flex-col text-balance">
                <p>Organisation owners invite members and group them into teams.</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full transition-all bg-[var(--color-button-primary-bg)] border border-[var(--color-button-primary-border)] text-[var(--color-button-primary-text)] hover:opacity-90"
                href="/contact-sales"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <section className="py-12 px-4 md:px-8 bg-background text-font pt-0 pb-0">
          <div className="container mx-auto my-8">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-4">
              <div className="block bg-card border border-border rounded p-6 flex h-full flex-grow flex-col">
                <div className="text-base flex max-w-prose flex-grow flex-col justify-between">
                  <div>
                    <h2 className="text-base font-medium mb-2">Shared workspaces</h2>
                    <div className="text-muted-foreground text-pretty">
                      <p>Organisation owners invite members and group them into teams.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="block bg-card border border-border rounded transition-all hover:bg-hover p-6 flex h-full flex-grow flex-col"
                href="/docs"
              >
                <div className="text-base flex max-w-prose flex-grow flex-col justify-between">
                  <div>
                    <h2 className="text-base font-medium mb-2">Advanced statistical methods</h2>
                    <div className="text-muted-foreground text-pretty">
                      <p>
                        Access comprehensive statistical methods from descriptive statistics to
                        Structural Equation Modeling and machine learning.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all border border-border bg-transparent text-font no-underline hover:bg-hover">
                      View all methods →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* Q&A Section */}
      <section className="py-12 px-4 md:px-8 bg-card text-font">
        <div className="container mx-auto">
          <div className="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-0">
            <div className="col-span-full lg:col-end-7">
              <div className="sticky top-[72px] max-lg:mb-8">
                <h2 className="text-2xl md:text-3xl text-pretty font-medium">
                  Questions & Answers
                </h2>
              </div>
            </div>
            <div className="col-span-full lg:col-start-7 lg:col-end-[-1]">
              <Accordion items={qaItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 md:py-48 px-4 md:px-8 bg-background text-font">
        <div className="container mx-auto">
          <div className="text-center mx-auto">
            <h2 className="text-6xl sm:text-7xl font-normal text-balance mx-auto mb-4">
              Get started with Tensr Enterprise.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full transition-all bg-[var(--color-button-primary-bg)] border border-[var(--color-button-primary-border)] text-[var(--color-button-primary-text)] hover:opacity-90"
                href="/contact-sales"
              >
                Contact sales
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnterpriseTemplate;

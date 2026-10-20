'use client';

import Link from 'next/link';
import posthog from 'posthog-js';
import type { ComponentProps, MouseEvent } from 'react';

type AppCtaLinkProps = ComponentProps<typeof Link> & {
  location: string;
  label: string;
};

export function captureLandingCta(location: string, label: string): void {
  try {
    posthog.capture('landing_cta_clicked', { location, label });
  } catch {
    // A failed analytics call must not block the click.
  }
}

export function AppCtaLink({ location, label, onClick, ...props }: AppCtaLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        captureLandingCta(location, label);
        onClick?.(event);
      }}
    />
  );
}

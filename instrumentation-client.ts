import posthog from 'posthog-js';
import { LINK_SCANNER_SESSION_PROPERTY, withoutLinkScannerException } from '@/lib/link-scanner';

const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (posthogToken) {
  posthog.init(posthogToken, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    // Same defaults date as tensr-platform-web. `history_change` records the first
    // pageview once, then again only when the pathname changes. Do not also capture
    // pageviews from a Next.js route listener — that would double-count navigations.
    defaults: '2026-01-30',
    capture_pageview: 'history_change',
    capture_pageleave: true,
    autocapture: true,
    capture_performance: { web_vitals: true },
    capture_exceptions: true,
    // Cookie is set on .tensr.xyz so www.tensr.xyz and app.tensr.xyz share a distinct_id.
    cross_subdomain_cookie: true,
    persistence: 'localStorage+cookie',
    session_recording: {
      maskAllInputs: true,
    },
    before_send: event =>
      withoutLinkScannerException(event, () => {
        posthog.register_for_session({ [LINK_SCANNER_SESSION_PROPERTY]: true });
      }),
    debug: process.env.NODE_ENV === 'development',
  });
}

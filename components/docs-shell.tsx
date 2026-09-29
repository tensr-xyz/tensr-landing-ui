'use client';

import { Header } from '@/components/header';
import { baseOptions } from '@/lib/layout.shared';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { SidebarTrigger } from 'fumadocs-ui/layouts/docs/slots/sidebar';
import { SearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import type { ComponentProps } from 'react';
import { PanelLeft } from 'lucide-react';

function DocsSiteHeader() {
  return (
    <div className="[grid-area:header] h-0 overflow-visible">
      <Header
        extra={
          <div className="flex items-center md:hidden">
            <SearchTrigger
              hideIfDisabled
              className="inline-flex h-8 w-8 items-center justify-center text-text-primary"
            />
            <SidebarTrigger
              className="inline-flex h-8 w-8 items-center justify-center text-text-primary"
              aria-label="Open docs sidebar"
            >
              <PanelLeft className="h-5 w-5" />
            </SidebarTrigger>
          </div>
        }
      />
    </div>
  );
}

function DocsNavTitle() {
  return null;
}

type DocsTree = ComponentProps<typeof DocsLayout>['tree'];

export function DocsShell({ children, tree }: { children: React.ReactNode; tree: DocsTree }) {
  const options = baseOptions();

  return (
    <div className="docs-site-offset">
      <DocsLayout
        tree={tree}
        {...options}
        nav={{
          ...options.nav,
          enabled: true,
        }}
        sidebar={{
          collapsible: false,
        }}
        slots={{ header: DocsSiteHeader, navTitle: DocsNavTitle }}
      >
        {children}
      </DocsLayout>
    </div>
  );
}

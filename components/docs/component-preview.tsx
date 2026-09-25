import { BannerDemo, bannerDemoCode } from '@/components/docs/banner-demo';
import { highlight } from 'fumadocs-core/highlight';
import { CodeBlock } from 'fumadocs-ui/components/codeblock';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { ComponentType } from 'react';

const previews: Record<string, { component: ComponentType; code: string }> = {
  'banner-demo': {
    component: BannerDemo,
    code: bannerDemoCode,
  },
  'feature-demo': {
    component: BannerDemo,
    code: bannerDemoCode,
  },
};

export async function ComponentPreview({ name }: { name: string }) {
  const preview = previews[name];

  if (!preview) {
    return (
      <p className="not-prose my-6 rounded-lg border border-fd-border px-4 py-3 text-sm text-fd-muted-foreground">
        Unknown preview <code>{name}</code>. Register it in{' '}
        <code>components/docs/component-preview.tsx</code>.
      </p>
    );
  }

  const Preview = preview.component;
  const highlighted = await highlight(preview.code, {
    lang: 'tsx',
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-fd-border bg-fd-background">
      <Tabs items={['Preview', 'Code']}>
        <Tab value="Preview" className="mt-0 border-0 bg-transparent p-6">
          <Preview />
        </Tab>
        <Tab value="Code" className="mt-0 border-0 bg-transparent p-0">
          <CodeBlock allowCopy keepBackground className="my-0 rounded-none border-0 shadow-none">
            {highlighted}
          </CodeBlock>
        </Tab>
      </Tabs>
    </div>
  );
}

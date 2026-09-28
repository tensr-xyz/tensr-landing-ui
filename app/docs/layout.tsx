import { DocsShell } from '@/components/docs-shell';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsShell tree={source.getPageTree()}>{children}</DocsShell>;
}

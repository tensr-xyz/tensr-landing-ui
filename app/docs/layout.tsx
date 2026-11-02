import { DocsFrame } from '@/components/paper/docs-frame';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsFrame tree={source.getPageTree()}>{children}</DocsFrame>;
}

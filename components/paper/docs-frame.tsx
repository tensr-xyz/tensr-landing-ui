'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { AskStrip, PaperFooter, PaperNav } from '@/components/paper/shell';

type DocsNode = {
  type: string;
  name: ReactNode;
  url?: string;
  children?: DocsNode[];
};

function DocsLinks({ nodes, depth = 0 }: { nodes: DocsNode[]; depth?: number }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {nodes.map((node, index) => {
        if (node.type === 'separator') {
          return (
            <li key={`sep-${index}`} className="px-3 pb-1 pt-5 text-[13px] leading-4 text-[#3D6A5E]">
              {node.name}
            </li>
          );
        }
        if (node.type === 'folder') {
          return (
            <li key={node.url || `folder-${index}`}>
              {node.url ? (
                <DocsLink href={node.url} active={pathname === node.url} depth={depth}>
                  {node.name}
                </DocsLink>
              ) : (
                <p className="px-3 pb-1 pt-4 text-[13px] leading-4 text-[#3D6A5E]">{node.name}</p>
              )}
              {node.children?.length ? <DocsLinks nodes={node.children} depth={depth + 1} /> : null}
            </li>
          );
        }
        if (node.url) {
          return (
            <li key={node.url}>
              <DocsLink href={node.url} active={pathname === node.url} depth={depth}>
                {node.name}
              </DocsLink>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}

function DocsLink({
  href,
  active,
  depth,
  children,
}: {
  href: string;
  active: boolean;
  depth: number;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`block py-1.5 pr-3 text-[15px] leading-5 ${active ? 'text-[#14473A]' : 'text-[#3D6A5E] hover:text-[#14473A]'}`}
      style={{ paddingLeft: 12 + depth * 12 }}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

export function DocsFrame({
  tree,
  children,
}: {
  tree: { children: DocsNode[] };
  children: ReactNode;
}) {
  return (
    <div className="paper-site min-h-screen bg-[#F9F4EB] text-[#14473A]">
      <PaperNav />
      <div className="flex flex-col gap-8 px-5 pb-16 lg:flex-row lg:items-start lg:gap-12 lg:px-10">
        <aside className="max-h-72 overflow-auto border-b border-[#14473A33] pb-4 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:w-64 lg:shrink-0 lg:border-0 lg:pb-0">
          <p className="px-3 pb-2 text-[13px] leading-4 text-[#3D6A5E]">Docs</p>
          <DocsLinks nodes={tree.children} />
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
      <AskStrip />
      <PaperFooter />
    </div>
  );
}

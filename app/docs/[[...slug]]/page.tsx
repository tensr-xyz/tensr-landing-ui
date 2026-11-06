import { getMDXComponents } from '@/components/mdx';
import { getPageMarkdownUrl, source } from '@/lib/source';
import { githubDocsUrl } from '@/lib/site';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsIndex } from '@/components/paper/docs-index';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type DocsRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function Page(props: DocsRouteProps) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  if (!params.slug?.length) {
    return (
      <DocsIndex
        title={page.data.title}
        description={page.data.description}
        body={
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        }
      />
    );
  }

  return (
    <article className="max-w-[760px] pb-16">
      <h1 className="text-[48px] leading-none tracking-[-0.04em] mobile:text-[44px] mobile:leading-[46px] mobile:tracking-[-0.045em]">
        {page.data.title}
      </h1>
      {page.data.description ? (
        <p className="mt-4 text-[18px] leading-7 text-[#3D6A5E] mobile:text-[17px] mobile:leading-[26px]">
          {page.data.description}
        </p>
      ) : null}
      <p className="mt-4 flex flex-wrap gap-4 text-[14px] leading-5 text-[#3D6A5E]">
        <a className="underline" href={markdownUrl}>
          Copy as Markdown
        </a>
        <a className="underline" href={githubDocsUrl(page.path)}>
          Edit on GitHub
        </a>
      </p>
      <div className="mt-8 flex flex-col gap-4 text-[17px] leading-7 text-[#3D6A5E] [&_a]:text-[#14473A] [&_a]:underline [&_h2]:mt-8 [&_h2]:text-[28px] [&_h2]:leading-9 [&_h2]:text-[#14473A] [&_li]:ml-5 [&_li]:list-disc [&_pre]:overflow-auto [&_pre]:bg-[#EEE8DC] [&_pre]:p-4">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: DocsRouteProps): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: `https://www.tensr.xyz${page.url}`,
    },
  };
}

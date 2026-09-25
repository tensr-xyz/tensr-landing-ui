import { getMDXComponents } from '@/components/mdx';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components?: MDXComponents) {
  return getMDXComponents(components);
}

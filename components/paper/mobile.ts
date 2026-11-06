/** Classes that apply only below the 800px mobile breakpoint. */
export const mobile = {
  section: 'mobile:gap-8 mobile:px-5 mobile:pb-16',
  hero: 'mobile:gap-5 mobile:px-5 mobile:pb-12 mobile:pt-8',
  h1: 'mobile:w-auto mobile:max-w-none mobile:shrink mobile:whitespace-normal mobile:text-[44px] mobile:leading-[46px] mobile:tracking-[-0.045em]',
  h2: 'mobile:w-auto mobile:max-w-none mobile:shrink mobile:whitespace-normal mobile:text-[36px] mobile:leading-[40px] mobile:tracking-[-0.035em]',
  lede: 'mobile:w-auto mobile:max-w-none mobile:shrink mobile:text-[17px] mobile:leading-[26px]',
  row: 'mobile:flex-col mobile:items-stretch mobile:gap-5',
  pair: 'mobile:w-full mobile:flex-col',
  primary:
    'mobile:h-14 mobile:w-full mobile:justify-center mobile:px-5 mobile:text-[17px] mobile:leading-5.5',
  secondary:
    'mobile:h-[52px] mobile:w-full mobile:justify-center mobile:border mobile:border-[#14473A] mobile:px-5 mobile:text-[17px] mobile:leading-5.5',
  field: 'mobile:h-14 mobile:w-full mobile:px-4 mobile:text-[17px]',
  display:
    'mobile:w-auto mobile:max-w-none mobile:text-[52px] mobile:leading-[56px] mobile:tracking-[-0.045em]',
  card: 'mobile:h-auto mobile:w-full mobile:min-w-0 mobile:flex-none',
} as const;

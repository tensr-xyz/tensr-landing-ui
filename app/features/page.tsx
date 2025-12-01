import Link from 'next/link';
import { Download } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="w-full p-0 bg-background text-font">
        <div className="container mx-auto">
          <div className="text-left max-w-prose mb-8">
            <small className="text-base text-muted-foreground block mb-2">Features</small>
            <h1 className="text-2xl md:text-3xl font-normal text-balance mb-4">
              The best way to build software.
            </h1>
            <div className="flex items-center justify-start gap-4">
              <div className="hidden md:block">
                <Link
                  href="https://api2.cursor.sh/updates/download/golden/darwin-arm64/cursor/2.1"
                  className="inline-flex items-center px-6 py-3 bg-[#26251e] text-white rounded-full hover:opacity-90 transition-colors text-sm font-medium"
                >
                  Download for macOS
                  <Download className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="block md:hidden">
                <Link
                  href="/agents"
                  className="inline-flex items-center px-6 py-3 bg-[#26251e] text-white rounded-full hover:opacity-90 transition-colors text-sm font-medium"
                >
                  Try mobile agent →
                </Link>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm overflow-hidden z-10">
            <div className="relative z-10 col-span-full row-span-full overflow-hidden">
              <picture className="absolute inset-0 brightness-90">
                <source
                  media="(min-width: 901px)"
                  srcSet="https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format&w=3840 3840w"
                />
                <img
                  className="object-cover h-full w-full"
                  alt="Cursor IDE screenshot"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  src="https://cdn.sanity.io/images/2hv88549/production/cc24ca462279ca23250c6953612a9e3fd9838355-6360x4240.jpg?auto=format"
                />
              </picture>
            </div>
            <div className="z-20 col-span-full row-span-full">
              <div
                className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                style={{
                  height: 'min(780px, 70vh)',
                  minHeight: '680px',
                }}
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150">
                  <div className="sr-only" aria-live="polite">
                    This element contains an interactive demo for sighted users showing multiple
                    Cursor interfaces: the IDE with AI-powered coding assistance, the CLI with
                    command-line assistance. The interfaces are displayed over a scenic painted
                    landscape wallpaper, giving the demo an artistic backdrop.
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">
                      Interactive demo placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Section */}
      <section className="w-full p-0 bg-background text-font" id="agent">
        <div className="container mx-auto mb-16">
          <div className="grid grid-rows-[auto_1fr] gap-4">
            <Link
              className="relative bg-card border border-border rounded-sm p-6 sm:p-7 grid lg:grid-cols-2 gap-4 col-span-full row-span-full"
              href="#agent"
            >
              <div className="lg:flex lg:items-center">
                <div className="max-w-prose w-full">
                  <div className="text-base flex-1">
                    <h2 className="text-base md:text-lg font-normal text-pretty">Agent</h2>
                    <div className="text-base md:text-lg text-muted-foreground text-pretty">
                      <p>Delegate coding tasks so you can focus on higher-level direction.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-primary hover:underline inline-flex items-center gap-1">
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block"></div>
            </Link>
            <div className="p-7 grid lg:grid-cols-2 gap-4 col-span-full row-span-full">
              <div className="hidden lg:block"></div>
              <div>
                <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                  <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                    <picture className="absolute inset-0 scale-[1.1] transform brightness-90">
                      <source
                        media="(min-width: 901px)"
                        srcSet="https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format&w=3840 3840w"
                      />
                      <img
                        className="object-cover h-full w-full"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        fetchPriority="auto"
                        src="https://cdn.sanity.io/images/2hv88549/production/1ffde036387b7242c29496bd7b1009f2218bce43-3266x2324.jpg?auto=format"
                      />
                    </picture>
                  </div>
                  <div className="z-20 col-span-full row-span-full">
                    <div
                      className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                      style={{
                        height: 'min(780px, 70vh)',
                        minHeight: '650px',
                      }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150">
                        <div className="sr-only" aria-live="polite">
                          This element contains an interactive demo for sighted users showing the
                          Agent interface.
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-muted-foreground text-sm">
                            Interactive demo placeholder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Feature */}
      <section className="w-full p-0 bg-background text-font" id="tab">
        <div className="container mx-auto mb-16">
          <div className="grid grid-rows-[auto_1fr] gap-4">
            <Link
              className="relative bg-card border border-border rounded-sm p-6 sm:p-7 grid lg:grid-cols-2 gap-4 col-span-full row-span-full"
              href="#tab"
            >
              <div className="hidden lg:block"></div>
              <div className="lg:flex lg:items-center lg:justify-end">
                <div className="max-w-prose w-full">
                  <div className="text-base flex-1">
                    <h2 className="text-base md:text-lg font-normal text-pretty">Tab</h2>
                    <div className="text-base md:text-lg text-muted-foreground text-pretty">
                      <p>Our custom autocomplete model predicts your next actions.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-primary hover:underline inline-flex items-center gap-1">
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <div className="p-7 grid lg:grid-cols-2 gap-4 col-span-full row-span-full">
              <div>
                <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                  <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                    <picture className="absolute inset-0 scale-[1.1] transform brightness-90">
                      <source
                        media="(min-width: 901px)"
                        srcSet="https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format&w=3840 3840w"
                      />
                      <img
                        className="object-cover h-full w-full"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        fetchPriority="auto"
                        src="https://cdn.sanity.io/images/2hv88549/production/6a23c94721e22f5c31f2ef72ccd7cdf9fecd9e12-1995x1330.jpg?auto=format"
                      />
                    </picture>
                  </div>
                  <div className="z-20 col-span-full row-span-full">
                    <div
                      className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                      style={{
                        height: 'min(780px, 70vh)',
                        minHeight: '650px',
                      }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150">
                        <div className="sr-only" aria-live="polite">
                          This element contains an interactive demo for sighted users showing the
                          Tab autocomplete interface.
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-muted-foreground text-sm">
                            Interactive demo placeholder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Column Feature Row: Codebase understanding, Top model access, Scoped changes */}
      <section className="w-full p-0 bg-background text-font">
        <div className="container mx-auto my-8 mb-16">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-4">
            <div className="h-full">
              <div className="bg-card border border-border rounded-sm flex h-full flex-col p-6">
                <div className="text-base flex max-w-prose flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-base md:text-lg font-normal mb-3">
                      Codebase understanding
                    </h2>
                    <div className="text-muted-foreground text-pretty">
                      <p className="text-base">
                        Cursor's codebase embedding model gives Agent deep understanding and recall.
                      </p>
                    </div>
                  </div>
                </div>
                <figure className="pt-7">
                  <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                    <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 dark:hidden">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format"
                        />
                      </picture>
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 hidden dark:block">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format"
                        />
                      </picture>
                    </div>
                    <div className="z-20 col-span-full row-span-full">
                      <div
                        className="aspect-square md:aspect-square"
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '378px',
                          backgroundColor: 'transparent',
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center"></div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className="h-full">
              <div className="bg-card border border-border rounded-sm flex h-full flex-col p-6">
                <div className="text-base flex max-w-prose flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-base md:text-lg font-normal mb-3">Top model access</h2>
                    <div className="text-muted-foreground text-pretty">
                      <p className="text-base">
                        Choose freely between frontier models from OpenAI, Anthropic, Gemini, and
                        xAI.
                      </p>
                    </div>
                  </div>
                </div>
                <figure className="pt-7">
                  <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                    <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 dark:hidden">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/0e44f2d6b59d6d3ab8ea68a301f92e079d0e7e89-2560x1440.png?auto=format"
                        />
                      </picture>
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 hidden dark:block">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/23cfd8adb1efe8a6cd2f77479efbbee8b6fd7ad3-2560x1440.png?auto=format"
                        />
                      </picture>
                    </div>
                    <div className="z-20 col-span-full row-span-full">
                      <div
                        className="aspect-square md:aspect-square"
                        style={{
                          position: 'relative',
                          width: '100%',
                          backgroundColor: 'transparent',
                          height: '378px',
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center"></div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className="h-full">
              <div className="bg-card border border-border rounded-sm flex h-full flex-col p-6">
                <div className="text-base flex max-w-prose flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-base md:text-lg font-normal mb-3">Scoped changes</h2>
                    <div className="text-muted-foreground text-pretty">
                      <p className="text-base">
                        Make targeted edits or run terminal commands with natural language.
                      </p>
                    </div>
                  </div>
                </div>
                <figure className="pt-7">
                  <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                    <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 dark:hidden">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/214fe44b44ebb3a38c3c7e6bde246a032d1bdc57-2560x1440.png?auto=format"
                        />
                      </picture>
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 hidden dark:block">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/e7193be5129e61392f38b191266ecafa2410bb3d-2560x1440.png?auto=format"
                        />
                      </picture>
                    </div>
                    <div className="z-20 col-span-full row-span-full">
                      <div
                        className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                        style={{ height: '378px' }}
                      >
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150"
                          style={{ opacity: 1 }}
                        >
                          <div className="sr-only" aria-live="polite">
                            Interactive demo with multiple windows showing Cursor's AI-powered
                            features.
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-20"></div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Column Feature Row: Multi-line edits, Smart rewrites, Tab Tab Tab */}
      <section className="w-full p-0 bg-background text-font">
        <div className="container mx-auto my-8 mb-16">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-4">
            <div className="h-full">
              <div className="bg-card border border-border rounded-sm flex h-full flex-col p-6">
                <div className="text-base flex max-w-prose flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-base md:text-lg font-normal mb-3">Multi-line edits</h2>
                    <div className="text-muted-foreground text-pretty">
                      <p className="text-base">Get suggested edits across multiple lines.</p>
                    </div>
                  </div>
                </div>
                <figure className="pt-7">
                  <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                    <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 dark:hidden">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format"
                        />
                      </picture>
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 hidden dark:block">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format"
                        />
                      </picture>
                    </div>
                    <div className="z-20 col-span-full row-span-full">
                      <div
                        className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                        style={{ height: '378px' }}
                      >
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150"
                          style={{ opacity: 1 }}
                        >
                          <div className="sr-only" aria-live="polite">
                            Interactive demo with multiple windows showing Cursor's AI-powered
                            features.
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-20"></div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className="h-full">
              <div className="bg-card border border-border rounded-sm flex h-full flex-col p-6">
                <div className="text-base flex max-w-prose flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-base md:text-lg font-normal mb-3">Smart rewrites</h2>
                    <div className="text-muted-foreground text-pretty">
                      <p className="text-base">Type naturally, Cursor will finish your thought.</p>
                    </div>
                  </div>
                </div>
                <figure className="pt-7">
                  <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                    <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 dark:hidden">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format"
                        />
                      </picture>
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 hidden dark:block">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format"
                        />
                      </picture>
                    </div>
                    <div className="z-20 col-span-full row-span-full">
                      <div
                        className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                        style={{ height: '378px' }}
                      >
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150"
                          style={{ opacity: 1 }}
                        >
                          <div className="sr-only" aria-live="polite">
                            Interactive demo with multiple windows showing Cursor's AI-powered
                            features.
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-20"></div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className="h-full">
              <div className="bg-card border border-border rounded-sm flex h-full flex-col p-6">
                <div className="text-base flex max-w-prose flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-base md:text-lg font-normal mb-3">Tab, Tab, Tab</h2>
                    <div className="text-muted-foreground text-pretty">
                      <p className="text-base">
                        Fly through edits at your cursor and across files.
                      </p>
                    </div>
                  </div>
                </div>
                <figure className="pt-7">
                  <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                    <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 dark:hidden">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/fd9b3b4cd7d670f9f7d89ef54a9d83eedc7eb8cc-2560x1440.png?auto=format"
                        />
                      </picture>
                      <picture className="absolute inset-0 scale-[1.1] transform brightness-90 hidden dark:block">
                        <source
                          media="(min-width: 901px)"
                          srcSet="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=3840 3840w"
                        />
                        <img
                          className="object-cover h-full w-full"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          fetchPriority="auto"
                          src="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format"
                        />
                      </picture>
                    </div>
                    <div className="z-20 col-span-full row-span-full">
                      <div
                        className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                        style={{ height: '378px' }}
                      >
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150"
                          style={{ opacity: 1 }}
                        >
                          <div className="sr-only" aria-live="polite">
                            Interactive demo with multiple windows showing Cursor's AI-powered
                            features.
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-20"></div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Across the entire development process */}
      <section className="w-full p-0 bg-background text-font" id="ecosystem">
        <div className="container mx-auto mb-16">
          <div className="grid grid-rows-[auto_1fr] gap-4">
            <Link
              className="relative bg-card border border-border rounded-sm p-6 sm:p-7 grid lg:grid-cols-2 gap-4 col-span-full row-span-full"
              href="/agents"
            >
              <div className="lg:flex lg:items-center">
                <div className="max-w-prose w-full">
                  <div className="text-base flex-1">
                    <h2 className="text-base md:text-lg font-normal text-pretty">
                      Across the entire development process
                    </h2>
                    <div className="text-base md:text-lg text-muted-foreground text-pretty">
                      <p>
                        Start tasks from Slack, issue tracker, mobile and more. Finish off in the
                        IDE.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-primary hover:underline inline-flex items-center gap-1">
                      Try agents on web and mobile ↗
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block"></div>
            </Link>
            <div className="p-7 grid lg:grid-cols-2 gap-4 col-span-full row-span-full">
              <div className="hidden lg:block"></div>
              <div>
                <div className="relative grid grid-cols-1 grid-rows-1 bg-muted rounded-sm">
                  <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                    <picture className="absolute inset-0 scale-[1.1] transform brightness-90">
                      <source
                        media="(min-width: 901px)"
                        srcSet="https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format&w=3840 3840w"
                      />
                      <img
                        className="object-cover h-full w-full"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        fetchPriority="auto"
                        src="https://cdn.sanity.io/images/2hv88549/production/00a586c62c8782e65c0affe6363a43ed6bdbc1fd-3139x2093.jpg?auto=format"
                      />
                    </picture>
                  </div>
                  <div className="z-20 col-span-full row-span-full">
                    <div
                      className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                      style={{
                        height: 'min(780px, 70vh)',
                        minHeight: '650px',
                      }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150">
                        <div className="sr-only" aria-live="polite">
                          This element contains an interactive demo showing development process
                          integrations.
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-muted-foreground text-sm">
                            Interactive demo placeholder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Column Feature Row: IDE, CLI, Reviews with Agents */}
      <section className="w-full p-0 bg-background text-font">
        <div className="container mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-sm p-6 flex flex-col">
              <h3 className="text-base md:text-lg font-normal text-pretty mb-3">IDE</h3>
              <p className="text-base text-muted-foreground mb-4 flex-1">
                Full-featured IDE with AI assistance built right in.
              </p>
              <div className="relative">
                <img
                  src="https://cdn.sanity.io/images/2hv88549/production/ide.jpg?auto=format"
                  alt="IDE"
                  className="w-full h-auto rounded-sm"
                />
              </div>
            </div>
            <div className="bg-card border border-border rounded-sm p-6 flex flex-col">
              <h3 className="text-base md:text-lg font-normal text-pretty mb-3">CLI</h3>
              <p className="text-base text-muted-foreground mb-4 flex-1">
                Powerful command-line interface for advanced workflows.
              </p>
              <div className="relative">
                <img
                  src="https://cdn.sanity.io/images/2hv88549/production/cli.jpg?auto=format"
                  alt="CLI"
                  className="w-full h-auto rounded-sm"
                />
              </div>
            </div>
            <Link
              href="/bugbot"
              className="bg-card border border-border rounded-sm p-6 flex flex-col hover:opacity-90 transition-opacity"
            >
              <div className="text-base flex max-w-prose flex-1 flex-col justify-between">
                <div>
                  <h2 className="text-base md:text-lg font-normal mb-3">Review with Bugbot</h2>
                  <div className="text-muted-foreground text-pretty">
                    <p className="text-base">Identify issues, fix in one click.</p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-primary hover:underline inline-flex items-center gap-1">
                    Learn more →
                  </span>
                </div>
              </div>
              <figure className="pt-7">
                <div className="relative grid grid-cols-1 grid-rows-1 bg-card rounded-sm">
                  <div className="relative z-10 col-span-full row-span-full overflow-hidden">
                    <picture className="absolute inset-0 scale-[1.1] transform brightness-90 dark:hidden">
                      <source
                        media="(min-width: 901px)"
                        srcSet="https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format&w=3840 3840w"
                      />
                      <img
                        className="object-cover h-full w-full"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        fetchPriority="auto"
                        src="https://cdn.sanity.io/images/2hv88549/production/e6375f83012e4a76ff15411ce87937362c411153-2560x1440.png?auto=format"
                      />
                    </picture>
                    <picture className="absolute inset-0 scale-[1.1] transform brightness-90 hidden dark:block">
                      <source
                        media="(min-width: 901px)"
                        srcSet="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=640 640w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=750 750w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=828 828w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1080 1080w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1200 1200w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=1920 1920w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=2048 2048w, https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format&w=3840 3840w"
                      />
                      <img
                        className="object-cover h-full w-full"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        fetchPriority="auto"
                        src="https://cdn.sanity.io/images/2hv88549/production/3cb319c263fd5a76115b6196b916ce8767daec13-2560x1440.png?auto=format"
                      />
                    </picture>
                  </div>
                  <div className="z-20 col-span-full row-span-full">
                    <div
                      className="relative w-full overflow-hidden select-none border border-border rounded-sm"
                      style={{ height: '378px' }}
                    >
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full max-[767px]:pointer-events-none max-[767px]:opacity-0 transition-opacity duration-150"
                        style={{ opacity: 1 }}
                      >
                        <div className="sr-only" aria-live="polite">
                          This element contains an interactive demo for sighted users. It's a
                          demonstration of Cursor integrated within GitHub, showing AI-powered code
                          review and debugging assistance. The interface is displayed over a scenic
                          painted landscape wallpaper, giving the demo an artistic backdrop.
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-0 z-20"></div>
                    </div>
                  </div>
                </div>
              </figure>
            </Link>
          </div>
        </div>
      </section>

      {/* Powerful, yet flexible */}
      <section className="w-full p-0 bg-background text-font">
        <div className="container mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-base md:text-lg font-normal text-pretty mb-4">
              Powerful, yet flexible
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Configure Cursor so you can do your best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-sm flex flex-col items-center justify-center p-8">
              <div className="mb-4">
                <img
                  src="https://cdn.sanity.io/images/2hv88549/production/vscode-logo.svg?auto=format"
                  alt="VSCode"
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="text-base font-normal mb-2">VSCode import</h3>
              <p className="text-base text-muted-foreground text-center">
                Import your VSCode settings and extensions seamlessly.
              </p>
            </div>
            <div className="bg-card border border-border rounded-sm flex flex-col items-center justify-center p-8">
              <div className="mb-4 flex items-center justify-center gap-4">
                <img
                  src="https://cdn.sanity.io/images/2hv88549/production/github-logo.svg?auto=format"
                  alt="GitHub"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cdn.sanity.io/images/2hv88549/production/gitlab-logo.svg?auto=format"
                  alt="GitLab"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cdn.sanity.io/images/2hv88549/production/npm-logo.svg?auto=format"
                  alt="npm"
                  className="h-8 w-auto"
                />
                <img
                  src="https://cdn.sanity.io/images/2hv88549/production/docker-logo.svg?auto=format"
                  alt="Docker"
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="text-base font-normal mb-2">VCS/Plugins</h3>
              <p className="text-base text-muted-foreground text-center">
                Integrate with your favorite version control and development tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full p-0 bg-background text-font">
        <div className="container mx-auto">
          <div className="text-left max-w-prose mb-10">
            <h2 className="text-2xl md:text-3xl font-normal leading-tight tracking-tight text-balance mb-4">
              Try Cursor now.
            </h2>
            <Link
              href="https://api2.cursor.sh/updates/download/golden/darwin-arm64/cursor/2.1"
              className="inline-flex items-center px-6 py-3 bg-[#26251e] text-white rounded-full hover:opacity-90 transition-colors text-sm font-medium"
            >
              Download for macOS
              <Download className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeaturesPage;

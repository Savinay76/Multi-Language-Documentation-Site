import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getDocPost, getAllDocs } from "@/lib/docs";
import Sidebar from "@/components/Sidebar";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Feedback from "@/components/Feedback";
import Search from "@/components/Search";
import VersionSelector from "@/components/VersionSelector";
import TableOfContents from "@/components/TableOfContents";
import CodeBlock from "@/components/CodeBlock";

// ISR: update every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    locale: doc.language,
    version: doc.version,
    slug: doc.slug,
  }));
}

interface PageProps {
  params: Promise<{
    locale: string;
    version: string;
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { locale, version, slug } = await params;

  // Validate locale
  if (!i18n.locales.includes(locale as Locale)) {
    notFound();
  }

  const doc = getDocPost(version, locale, slug);

  if (!doc) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <span className="font-bold inline-block">{dict.title}</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Search placeholder={dict.search} />
              <LanguageSwitcher currentLocale={locale} />
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block" data-testid="sidebar">
          <Sidebar version={version} locale={locale} />
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              {/* Version Selector */}
              <VersionSelector currentVersion={version} currentLocale={locale} />
            </div>
            <div data-testid="doc-content">
              <h1 id={doc.data.title.toLowerCase().replace(/\s+/g, '-')} className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                {doc.data.title}
              </h1>
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                  h1: ({ node, ...props }) => <h1 id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')} {...props} />,
                  h2: ({ node, ...props }) => <h2 id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')} {...props} />,
                  h3: ({ node, ...props }) => <h3 id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')} {...props} />,
                  code({ node, inline, className, children, ...props }: any) {
                    return <CodeBlock className={className} {...props}>{children}</CodeBlock>
                  }
                }}>
                  {doc.content}
                </ReactMarkdown>
              </div>
            </div>
            <hr className="my-6" />
            <Feedback dict={dict} />
          </div>
          <div className="hidden text-sm xl:block">
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  );
}

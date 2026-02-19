import Link from "next/link"
// In a real app, this might come from a prop or context.
// For now we'll hardcode the structure or read it from a config.
// Since it needs to be server-side rendered for best performance or client-side for interactivity.
// The requirements ask for collapsible sidebar.

const content = {
  v1: [
    { title: "Introduction", slug: "introduction" },
  ],
  v2: [
    { title: "Introduction", slug: "introduction" },
  ]
}

export default function Sidebar({ version, locale }: { version: string, locale: string }) {
  const items = content[version as keyof typeof content] || []

  return (
    <div className="py-2">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Docs {version}
        </h2>
        <div className="space-y-1">
          {items.map((item: { slug: string; title: string }) => (
            <Link
              key={item.slug}
              href={`/${locale}/docs/${version}/${item.slug}`}
              className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              data-testid={`sidebar-nav-link-${item.slug}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
 

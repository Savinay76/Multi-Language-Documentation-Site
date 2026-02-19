"use client"

import { useEffect, useState } from "react"

export default function TableOfContents() {
    const [activeId, setActiveId] = useState<string>("")
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h1, h2, h3"))
            .map((element) => ({
                id: element.id,
                text: element.textContent || "",
                level: Number(element.tagName.substring(1)),
            }))
        setHeadings(elements)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "0% 0% -80% 0%" }
        )

        elements.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="sticky top-16 -mt-10 max-h-[calc(100vh-3.5rem)] overflow-hidden pt-10" data-testid="table-of-contents">
            <h4 className="font-medium mb-2">Table of Contents</h4>
            <ul className="text-sm">
                {headings.map((heading) => (
                    <li key={heading.id} className="pt-2">
                        <a
                            href={`#${heading.id}`}
                            data-testid={`toc-link-${heading.id}`}
                            data-active={activeId === heading.id}
                            className={`block transition-colors hover:text-foreground ${activeId === heading.id
                                ? "font-medium text-foreground"
                                : "text-muted-foreground"
                                }`}
                            style={{ paddingLeft: (heading.level - 1) * 10 }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

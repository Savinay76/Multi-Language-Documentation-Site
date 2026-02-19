"use client"

import { useState } from "react"

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
}

export default function CodeBlock({ className, children, ...props }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        if (children) {
            navigator.clipboard.writeText(String(children))
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    // If it's inline code, just render it without copy button
    const match = /language-(\w+)/.exec(className || '')

    if (!match) {
        return <code className={className} {...props}>{children}</code>
    }

    return (
        <div data-testid="code-block" className="relative group">
            <pre className={className} {...props}>
                <code>{children}</code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                data-testid="copy-code-button"
            >
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    )
}
 

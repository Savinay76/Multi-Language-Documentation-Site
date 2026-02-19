"use client"

import { useRouter, usePathname } from "next/navigation"

export default function VersionSelector({ currentVersion, currentLocale }: { currentVersion: string, currentLocale: string }) {
    const router = useRouter()
    const pathname = usePathname()

    const handleVersionChange = (version: string) => {
        // Assuming structure is /[locale]/docs/[version]/[slug]
        // We want to replace the version segment.
        // pathname: /en/docs/v1/introduction
        const parts = pathname.split('/')
        // parts: ["", "en", "docs", "v1", "introduction"]
        if (parts.length >= 4) {
            parts[3] = version
            const newPath = parts.join('/')
            router.push(newPath)
        }
    }

    const versions = ['v1', 'v2', 'v3'];

    return (
        <div className="relative inline-block text-left" data-testid="version-selector">
            <select
                value={currentVersion}
                onChange={(e) => handleVersionChange(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-sm bg-transparent font-medium focus:outline-none focus:ring-0"
            >
                {versions.map((v) => (
                    <option key={v} value={v} data-testid={`version-option-${v}`}>
                        {v}
                    </option>
                ))}
            </select>
        </div>
    )
}

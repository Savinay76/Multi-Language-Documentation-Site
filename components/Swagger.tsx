"use client"

import dynamic from 'next/dynamic'
import "swagger-ui-react/swagger-ui.css"

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false }) as React.ComponentType<{ url?: string; spec?: object }>

export default function Swagger({ specUrl }: { specUrl: string }) {
    return <SwaggerUI url={specUrl} />
}

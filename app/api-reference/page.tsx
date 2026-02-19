import Swagger from "@/components/Swagger"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'API Reference',
    description: 'API Documentation',
}

export default function ApiReferencePage() {
    return (
        <div className="container mx-auto py-10">
            <Swagger specUrl="/openapi.json" />
        </div>
    )
}

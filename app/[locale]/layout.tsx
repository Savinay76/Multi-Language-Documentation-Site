export default async function ClientLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return (
        <div lang={locale}>
            {children}
        </div>
    );
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), '_docs');

export interface DocPost {
    slug: string;
    version: string;
    language: string;
    data: {
        title: string;
        description?: string;
        [key: string]: unknown;
    };
    content: string;
}

export function getDocPost(version: string, language: string, slug: string): DocPost | null {
    const fullPath = path.join(docsDirectory, version, language, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        version,
        language,
        data: data as DocPost['data'],
        content,
    };
}

export function getAllDocs() {
    const docs: { version: string; language: string; slug: string }[] = [];

    if (!fs.existsSync(docsDirectory)) return docs;

    const versions = fs.readdirSync(docsDirectory);

    versions.forEach((version) => {
        const versionPath = path.join(docsDirectory, version);
        if (fs.statSync(versionPath).isDirectory()) {
            const languages = fs.readdirSync(versionPath);
            languages.forEach((language) => {
                const langPath = path.join(versionPath, language);
                if (fs.statSync(langPath).isDirectory()) {
                    const files = fs.readdirSync(langPath);
                    files.forEach((file) => {
                        if (file.endsWith('.md')) {
                            docs.push({
                                version,
                                language,
                                slug: file.replace(/\.md$/, ''),
                            });
                        }
                    });
                }
            })
        }
    });

    return docs;
}

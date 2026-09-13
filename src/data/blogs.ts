//Parser
import parser from "front-matter"


type BlogFrontmatter = {
    title: string;
    slug: string;
    description: string;
    authors?: string[];
    author?: string;
    published_at: string;
    updated_at: string;
    reading_time: string;
    category: string;
    tags?: string[];
    cover_image?: string;
};


export type BlogType = {
    title: string;
    slug: string;
    description: string;
    authors: string[];
    publishedAt: Date;
    updatedAt: Date;
    readingTime: string;
    category: string;
    tags: string[];
    coverImage?: string;
    data: string;
};


const markdownFiles = import.meta.glob(
    "../**/blogs/*.md",
    {
        query: "?raw",
        import: "default",
        eager: true,
    }
) as Record<string, string>;

export const BlogData = Object.entries(markdownFiles).map(([, markdown]) => {

        const { attributes, body } = parser<BlogFrontmatter>(markdown);

        return {
            title: attributes.title,
            slug: attributes.slug,
            description: attributes.description,

            authors: Array.isArray(attributes.authors)
                ? attributes.authors
                : attributes.author
                    ? [attributes.author]
                    : [],

            publishedAt: new Date(attributes.published_at),
            updatedAt: new Date(attributes.updated_at),

            readingTime: attributes.reading_time,
            category: attributes.category,
            tags: attributes.tags ?? [],

            coverImage: attributes.cover_image,

            data: body,
        };
    }).sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()); //Load only once not everytime method is called



export const getBlogMetaData = (): Omit<BlogType, "data">[] => {
    return Object.entries(markdownFiles)
        .map(([, markdown]) => {
            const { attributes } = parser<BlogFrontmatter>(markdown);

            return {
                title: attributes.title,
                slug: attributes.slug,
                description: attributes.description,

                authors: Array.isArray(attributes.authors)
                    ? attributes.authors
                    : attributes.author
                        ? [attributes.author]
                        : [],

                publishedAt: new Date(attributes.published_at),
                updatedAt: new Date(attributes.updated_at),

                readingTime: attributes.reading_time,
                category: attributes.category,
                tags: attributes.tags ?? []
            };
        })
        .sort((a, b) =>
            b.updatedAt.getTime() - a.updatedAt.getTime()
        );
};
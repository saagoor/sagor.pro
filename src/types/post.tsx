export type Post = {
    id: string,
    title: string,
    slug: string,
    summary: string,
    date: string,
    tags: [string],
}

export type Tag = {
    id: string,
    text: string,
    slug: string,
}
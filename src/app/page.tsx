import { getAllFilesFrontMatter } from '@/lib/mdx'
import HomePage from './HomePage';

async function getPosts() {
    const posts = await getAllFilesFrontMatter('blog')
    return posts;
}

export default async function Page() {
    return 'Hello World';
    // Fetch data directly in a Server Component
    const recentPosts = await getPosts();
    // Forward fetched data to your Client Component
    return <HomePage posts={recentPosts} />;
}
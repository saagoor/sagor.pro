import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }: any) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
        description="Welcome to the blog of Mehedi H. Sagor,
        a software engineer with a passion for solving complex technical challenges and staying up-to-date with the latest technologies and best practices.
        In here, you'll find a mix of technical tutorials, insights, and musings on the world of software development,
        as well as updates on my current projects and experiences.
        Whether you're a fellow engineer looking to expand your skills or simply interested in the inner workings of software development,
        I hope you'll find something of value here. Thank you for visiting, and I hope you'll join me on this journey of exploration and growth."
      />
    </>
  )
}

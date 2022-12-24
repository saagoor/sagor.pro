import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: any) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* Introduction */}
      <section>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Software Engineer</h2>
          <div className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <p>
              As a self-taught software engineer with a strong foundation in programming languages and frameworks, including JavaScript, TypeScript, React, Next.js, Vue, PHP and Laravel,
              I have consistently demonstrated a passion for learning and problem-solving.
              In addition to developing scalable software, I am also skilled in DevOps and is able to deploy projects using CI/CD.
            </p>
            <br />
            <p>
              I have strong understanding of Linux, Docker, and currently learning Kubernetes,
              which allows me to effectively manage the entire software development lifecycle.
              In addition to these technical skills, I am also highly interested in artificial intelligence and is currently learning Rust programming language.
            </p>
            <br />
            <p>
              I like to picture myself as a broad thinker, optimistic, and ethical, always striving to do the right thing in every situation.
              With a strong sense of curiosity and a commitment to continuous learning,
              I believe I am well-suited to tackling complex technical challenges and adapting to new technologies.
            </p>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recent Articles
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Welcome to the blog of Mehedi H. Sagor,
            a software engineer with a passion for solving complex technical challenges and staying up-to-date with the latest technologies and best practices.
            In here, you'll find a mix of technical tutorials, insights, and musings on the world of software development,
            as well as updates on my current projects and experiences.
            Whether you're a fellow engineer looking to expand your skills or simply interested in the inner workings of software development,
            I hope you'll find something of value here. Thank you for visiting, and I hope you'll join me on this journey of exploration and growth.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter: any) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag: any) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </section>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

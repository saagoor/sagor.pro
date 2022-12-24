import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} className="w-6 h-6" />
          <SocialIcon kind="github" href={siteMetadata.github} className="w-6 h-6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} className="w-6 h-6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} className="w-6 h-6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} className="w-6 h-6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} className="w-6 h-6" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>All rights reserved.</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Made with TypeScript, Next.js, Tailwind CSS, and ❤️
        </div>
      </div>
    </footer>
  )
}

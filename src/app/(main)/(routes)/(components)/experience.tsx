import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/ui/section-header'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import ExperienceCard from './experience-card'

export default function Experience() {
  const curr = {
    dates: '2023 - Present',
    company: 'Yuvi Web Design',
    role: 'Web Developer and Designer',
    description: `
      A web design studio focused on creating captivating digital experiences that drive tangible
      results for your business.
    `,
    techList: [
      'NextJS',
      'TypeScript',
      'NodeJS',
      'TailwindCSS',
      'Prisma',
      'Sanity',
      'PostHog',
    ],
    link: 'https://yuviwebdesign.com',
    target: '_blank',
  }

  const lensabl = {
    dates: '2021 - 2023',
    company: 'Lensabl',
    role: 'Full-Stack Engineer',
    description: `
      Built a custom ecommerce website and a dashboard that allows clients to customize the website. 
      Successfully demoed TailwindCSS to my team and implemented a scalable CSS solution for two SaaS projects.
      Onboarded and mentored a new developer intern to the team.
      Built an API to sanitize form data, send the data to an email, and send a response back to the client.
    `,
    techList: [
      'NextJS',
      'ReactJS',
      'TypeScript',
      'HTML/SCSS',
      'TailwindCSS',
      'TanStack Query',
      'React Router',
      'Redux',
      'NodeJS',
      'PHP',
      'Magento',
    ],
    link: 'https://lensabl.com',
    target: '_blank',
  }

  const freelanceWebDev = {
    dates: '2020 - 2021',
    company: 'Freelance Web Developer',
    role: 'Frontend Engineer',
    description: `
      Designed and worked with other engineers to build the ArcLogistix website.
      Performed SEO on the ArcLogistix website and made it to the first page of results on Google 
      when you search the company name.
      Implemented best web accessibility practices, such as including alt attributes on all image elements, to conform to
      WCAG standards and to ensure all content is ADA compliant.
    `,
    techList: [
      'JavaScript',
      'HTML/CSS/SCSS',
      'TailwindCSS',
      'Webpack',
      'Bootstrap',
      'Netlify',
    ],
    link: 'https://www.arclogistix.com/',
    target: '_blank',
  }

  return (
    <>
      <SectionHeader variant="center">Experience</SectionHeader>
      <div className="mb-10">
        <ExperienceCard
          dates={curr.dates}
          company={curr.company}
          role={curr.role}
          description={curr.description}
          techList={curr.techList}
          link={curr.link}
          target={curr.target}
        />
      </div>
      <div className="mb-10">
        <ExperienceCard
          dates={lensabl.dates}
          company={lensabl.company}
          role={lensabl.role}
          description={lensabl.description}
          techList={lensabl.techList}
          link={lensabl.link}
          target={lensabl.target}
        />
      </div>
      <div className="mb-10">
        <ExperienceCard
          dates={freelanceWebDev.dates}
          company={freelanceWebDev.company}
          role={freelanceWebDev.role}
          description={freelanceWebDev.description}
          techList={freelanceWebDev.techList}
          link={freelanceWebDev.link}
          target={freelanceWebDev.target}
        />
      </div>
      <Link
        className="flex items-center justify-end"
        href="/static/Yuvienco_-_Full_Stack_Web_Developer_Resume_v.2.pdf"
        target="_blank"
      >
        <Button variant="outline">
          <span className="mr-2">View Full Resume</span>
          <ExternalLink />
        </Button>
      </Link>
    </>
  )
}

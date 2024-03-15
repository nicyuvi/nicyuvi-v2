import ExperienceCard from './experience-card'

export default function Experience() {
  const curr = {
    dates: '2023 - Present',
    company: 'Indie Developer',
    role: 'Full-Stack Web Developer',
    description: 'Working on Notehub: A collaborative, note taking web app',
    techList: [
      'NextJS',
      'TypeScript',
      'NodeJS',
      'TailwindCSS',
      'Prisma',
      'Postgres',
      'SQLite',
      'Python',
      'Flask',
    ],
  }

  const lensabl = {
    dates: '2021 - 2023',
    company: 'Lensabl',
    role: 'Full-Stack Web Developer',
    description: `
      Built a custom ecommerce website and a dashboard that allows clients to customize the website. 
      Successfully demoed TailwindCSS to my team and implemented a scalable CSS solution for two SaaS projects.
      Onboarded and mentored a new developer intern to the team.
      Built an API to sanitize form data, send the data to an email, and send a response back to the client.
    `,
    techList: [
      'NextJS',
      'ReactJS',
      'HTML/SCSS',
      'TailwindCSS',
      'TanStack Query',
      'React Router',
      'Redux',
      'NodeJS',
      'PHP',
    ],
    link: 'https://lensabl.com',
  }

  return (
    <>
      <h2 className="mx-auto mb-4 max-w-sm border-b border-b-primary pb-2 text-center text-2xl">
        Experience
      </h2>
      <div className="mb-6">
        <ExperienceCard
          dates={curr.dates}
          company={curr.company}
          role={curr.role}
          description={curr.description}
          techList={curr.techList}
        />
      </div>
      <div className="mb-6">
        <ExperienceCard
          dates={lensabl.dates}
          company={lensabl.company}
          role={lensabl.role}
          description={lensabl.description}
          techList={lensabl.techList}
          link={lensabl.link}
        />
      </div>
    </>
  )
}

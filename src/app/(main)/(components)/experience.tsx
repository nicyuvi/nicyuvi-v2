import ExperienceCard from './experience-card'

export default function Experience() {
  const curr = {
    dates: '2023 - Present',
    company: 'Indie Developer',
    role: 'Full-Stack Web Developer',
    description: 'Working on Notehub: A collaborative, note taking web app',
    techList: ['NodeJS', 'Tailwind CSS', 'Prisma', 'Python', 'Flask'],
  }

  const lensabl = {
    dates: '2021 - 2023',
    company: 'Lensabl',
    role: 'Front-End Web Developer',
    description: `
      Built a custom ecommerce website and a dashboard that allows clients to customize the website. 
      Successfully demoed TailwindCSS to my team and implemented a scalable CSS solution for two SaaS projects.
      Onboarded and mentored a new developer intern to the team.
      Built an API to sanitize form data, send the data to an email, and send a response back to the client.
    `,
    techList: ['NodeJS', 'Tailwind CSS', 'Prisma', 'Python', 'Flask'],
  }

  return (
    <>
      <ExperienceCard
        dates={curr.dates}
        company={curr.company}
        role={curr.role}
        description={curr.description}
        techList={curr.techList}
      />
      <ExperienceCard
        dates={lensabl.dates}
        company={lensabl.company}
        role={lensabl.role}
        description={lensabl.description}
        techList={lensabl.techList}
      />
    </>
  )
}

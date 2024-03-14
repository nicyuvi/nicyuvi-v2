import ExperienceCard from './experience-card'

export default function Experience() {
  const curr = {
    dates: '2023 - Present',
    company: 'Full-Stack Web Developer',
    role: 'Indie Developer',
    description: 'Working on Notehub: A collaborative, note taking web app',
    techList: ['NodeJS', 'Tailwind CSS', 'Prisma', 'Python', 'Flask'],
  }

  return (
    <ExperienceCard
      dates={curr.dates}
      company={curr.company}
      role={curr.role}
      description={curr.description}
      techList={curr.techList}
    />
  )
}

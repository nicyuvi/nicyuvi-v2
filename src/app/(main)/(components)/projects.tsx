import SectionHeader from '@/components/ui/section-header'
import FeaturedProject from './featured-project'

export default function Projects() {
  const doer = {
    projectLink: 'https://doer.netlify.app/',
    githubLink: 'https://github.com/nicyuvi/doer-web-app',
    image: '/static/doer-img.png',
    title: 'Doer',
    description: `
      Doer is a productivity based web application that helps you stay focused and on task. 
      This web app contains several features such as a personalized welcome bar, todo-list, 
      notes widget, and a pomodoro timer. The welcome bar uses the Open Weather API and Inspirational Quotes API 
      to display data and the entire app uses the browsers local storage to save user data.
    `,
    techList: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Open Weather API',
      'Inspirational Quotes API',
    ],
  }

  return (
    <>
      <SectionHeader>Some of My Projects</SectionHeader>
      <FeaturedProject
        projectLink={doer.projectLink}
        githubLink={doer.githubLink}
        image={doer.image}
        title={doer.title}
        description={doer.description}
        techList={doer.techList}
      />
    </>
  )
}

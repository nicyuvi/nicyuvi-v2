import SectionHeader from '@/components/ui/section-header'
import FeaturedProject from './featured-project'

const newLocal = `
      An E-Commerce web page for Felix's Footwear shoe company featuring Contentful CMS to display product data, shopping cart, functionality, local storage to save cart data, modals, and modal popups complete with body scroll lock, form validation and form handling, dynamic JavaScript components, ES6 modules and classes, and a full production build using Webpack.
    `
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

  const wheelsLandingPage = {
    projectLink: 'https://wheelslandingpage.netlify.app/',
    githubLink: 'https://github.com/nicyuvi/wheels-landing-page',
    image: '/static/wheels-img.png',
    title: 'Wheels Landing Page',
    description: `
      A landing page for the Wheels ridesharing company featuring mobile first design and responsive UI, 
      local restaurant information, form validation and form handling, dynamic JavaScript components, and ES6 modules.
    `,
    techList: [
      'HTML5',
      'SASS',
      'JavaScript',
      'Splide JS',
      'US Restaurant Menus API',
      'Webpack',
    ],
  }

  const felixFootwear = {
    projectLink: 'https://ecommerce-yuvi.netlify.app/',
    githubLink: 'https://github.com/nicyuvi/e-commerce-website',
    image: '/static/ecommerce-img.png',
    title: "Felix's Footwear",
    description: `
      An E-Commerce web page for Felix's Footwear shoe company featuring Contentful CMS to display 
      product data, shopping cart, functionality, local storage to save cart data, modals, and modal 
      popups complete with body scroll lock, form validation and form handling, dynamic JavaScript 
      components, ES6 modules and classes, and a full production build using Webpack.
    `,
    techList: [
      'HTML5',
      'Tailwind CSS',
      'JavaScript',
      'Splide JS',
      'Body Scroll Lock',
      'Contentful CMS',
      'Webpack',
    ],
  }

  return (
    <>
      <SectionHeader>Some of My Projects</SectionHeader>
      <div className="mb-20">
        <FeaturedProject
          projectLink={doer.projectLink}
          githubLink={doer.githubLink}
          image={doer.image}
          title={doer.title}
          description={doer.description}
          techList={doer.techList}
        />
      </div>
      <div className="mb-20">
        <FeaturedProject
          projectLink={wheelsLandingPage.projectLink}
          githubLink={wheelsLandingPage.githubLink}
          image={wheelsLandingPage.image}
          title={wheelsLandingPage.title}
          description={wheelsLandingPage.description}
          techList={wheelsLandingPage.techList}
          inverted
        />
      </div>
      <FeaturedProject
        projectLink={felixFootwear.projectLink}
        githubLink={felixFootwear.githubLink}
        image={felixFootwear.image}
        title={felixFootwear.title}
        description={felixFootwear.description}
        techList={felixFootwear.techList}
      />
    </>
  )
}

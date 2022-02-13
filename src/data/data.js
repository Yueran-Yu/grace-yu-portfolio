import happyFamilyApp from '../assets/images/happyFamilyMockUp.png';
import spendingApp from '../assets/images/SpendingMockUp.png';
import myPortfolio from '../assets/images/myPortfolio.png'
import coffeeShop from '../assets/images/coffeeShop.png';

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Spending App',
    content: 'I have the habit of recording my spending every day for more than ten years.  So in the process of learning React, I came up with the idea of making my own Spending App. You can do addition, subtraction, clear, with the calculator. Each entry can be viewed, edited, or deleted in the first Tab. I will gradually add more functions to make this app more perfect in the future.',
    projectUrl: 'https://spending-log.netlify.app/#/money',
    githubUrl: 'https://github.com/Yueran-Yu/spending-app-dev',
    skills: ['React', 'Typescript', 'UI/UX', 'Custom-Hooks', 'Local-Storage', 'Apache-ECharts', 'React-Icons', 'Webpack'],
    img: spendingApp,
    alt: 'spending App'
  },
  {
    id: 2,
    title: 'Happy Family Clothing',
    content: 'This is an E-Commerce Project that I learned from Andrei Neagoie and Yihua Zhang in Udemy. This course included Redux, Hooks, HOC, GraphQL,  Payment API, and so on. I have done some changes, like the data source, which I grabbed from Rapid API. Part of the design and layout also has been modified. ',
    projectUrl: 'https://happy-family-clothing.netlify.app/',
    githubUrl: 'https://github.com/Yueran-Yu/happy-family-clothing-dev',
    skills: ['React', 'Firebase', 'Rapid-API', 'Stripe-API', 'Redux', 'Authentication', 'Styled-Components'],
    img: happyFamilyApp,
    alt: 'Happy Family Clothing'
  },
  {
    id: 3,
    title: 'Grace Portfolio',
    content: 'This was my first time doing a personal portfolio and I had no clue at first. After doing a lot of studying I gradually got the inspiration. Despite my limited design skills, I did a lot of work to design what I ultimately wanted the site to look like. I chose a one-page presentation because it was straightforward, simple and clear.',
    projectUrl: 'https://grace-yu-portfolio.netlify.app/',
    githubUrl: 'https://github.com/Yueran-Yu/grace-yu-portfolio',
    skills: ['React', 'Custom-Hooks', 'UI/UX', 'Google-Recaptcha', 'Framer-Motion', 'Animations', 'TailwindCss', 'Local-Storage', 'React-Lazy'],
    img: myPortfolio,
    alt: 'Grace Portfolio'
  },
  {
    id: 3,
    title: 'GY Coffee Shop',
    content: 'This is a simple landing page for marketing the specific coffee. It uses vanilla javascript code with html and font-awesome. It includes hamburger bar, loading page, video background with the on/off button.',
    projectUrl: 'https://gy-coffee-shop.netlify.app/',
    githubUrl: 'https://github.com/Yueran-Yu/coffee-shop',
    skills: ['Javascript', 'Prototype', 'Font-Awesome','HTML', 'CSS'],
    img: coffeeShop,
    alt: 'GY Coffee Shop'
  }
]



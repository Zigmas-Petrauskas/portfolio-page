import weatherImg from "../assets/images/weather.jpg";
import movieImg from "../assets/images/MovieFinder.jpg";
import taskImg from "../assets/images/task manager.jpg";

const portfolioData = [
  {
    id: 1,
    title: "Wather App",
    description: "react aplikacija, kuri naudoja OpenWeatherMap API.",
    image: weatherImg,
    technologies: ["React", "SCSS", "API"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Movie Finder",
    description: "Filmų paieškos aplikacija.",
    image: movieImg,
    technologies: ["React", "Vite", "Axios"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Užduočių valdymo aplikacija su prisijungimo sistema.",
    image: taskImg,
    technologies: ["React", "Node.js", "MySQL", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "Užduočių valdymo aplikacija su prisijungimo sistema.",
    image: taskImg,
    technologies: ["React", "Node.js", "MySQL", "JWT"],
    github: "#",
    demo: "#",
  },
];

export default portfolioData;

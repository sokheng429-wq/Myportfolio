import PomoImg from  "../img/proj/pomodorify-thumb.png"
import BookOwlImg from "../img/proj/bookowl-thumb.png"
import GetMP3Img from "../img/proj/mp3-thumb.png"
import ShoutImg from "../img/proj/Shoutout-thumb.png"
import MoodImg from "..//img/proj/mood-thumb.png"
import student from "../img/proj/student.jpg"
import camland from "../img/proj/camland.jpg"
import el from "../img/proj/el.jpg"
import login from "../img/proj/loginspring.jpg"
import car from "../img/proj/car.jpg"

const projects = [
    {
        id: 1,
        navId: "1",
        title: 'Students Management 📚',
        description: 'This is management system for students, build with springboot java and mysql database',
        imgSrc: student,
        codeLink: 'https://github.com/sokheng429-wq/student-managements.git',
        demoLink: 'https://youtu.be/UGQfupnOXro',
        technologies: ['Java', 'Spring Boot', 'SpringSecurity', 'MySQL', 'API']
    },
    {
        id: 2,
        navId: "2",
        title: 'CamLandTraveler 📢',
        description: 'reactjs website build for test deployment on cloudfare',
        imgSrc: camland,
        codeLink: 'https://github.com/sokheng429-wq/CamLandTraveler.git',
        demoLink: 'https://camlandtraveler.sokheng429.workers.dev/',
        technologies: ['Node', 'React', 'Tailwind']
    },
    {
        id: 3,
        navId: "3",
        title: 'Elephant Tour Booking System Web Application 🐘',
        description: 'still on development, this is a web application for booking elephant tour in cambodia, build with reactjs and redux for state management',
        imgSrc: el,
        codeLink: 'https://github.com/sokheng429-wq/Elephant-Tour-Booking-System-Web-application-at-Mondulkiri.git',
        demoLink: 'https://www.youtube.com/watch?v=TkFjtVo8RLU',
        technologies: ['Java', 'SpringBoot','SpringSecurity', 'MySQL']
    },
    {
        id: 4,
        navId: "4",
        title: 'SPRINGSECURITY ',
        description: 'A basic Spring Boot and Spring Security authentication project.',
        imgSrc: login,
        codeLink: 'https://github.com/sokheng429-wq/SPRINGSECURITY.git',
        demoLink: 'https://youtu.be/UF1X8qwNKTs',
        technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL']
    },
    {
        id: 5,
        navId: "5",
        title: 'Mini-Car 🚗',
        description: "still on development, this is a mini car game build with nextjs and nodejs SQL database use PostgreSQL",
        imgSrc: car,
        codeLink: 'https://github.com/sokheng429-wq/Mini-cars.git',
        demoLink: 'https://youtu.be/v4QvwNLLYQQ',
        technologies: ['PostgreSQL', 'MUI', 'Node', 'NextJS']
    },
   
];



export default projects;

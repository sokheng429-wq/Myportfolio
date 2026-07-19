import student from "../img/proj/student.jpg"
import camland from "../img/proj/camland.jpg"
import el from "../img/proj/el.jpg"
import login from "../img/proj/loginspring.jpg"
import car from "../img/proj/car.jpg"
import ems from "../img/ems.jpg"
import pink from "../img/proj/pinky.jpg"
import homerental from "../img/proj/homerantel.jpg"
import zando from "../img/proj/zando.jpg"
import food from "../img/proj/food.jpg"

const projects = [
    {
        id: 1,
        navId: "1",
        title: 'Elephant Tour Booking System Web Application 🐘',
        description: 'still on development, this is a web application for booking elephant tour in cambodia, build with reactjs and redux for state management. it is working now still need deverlop only socail login and register next backend deploy on render it only wake for 15 minute open backend demo for it working',
        imgSrc: el,
        codeLinks: [
            { label: 'Frontend', url: 'https://github.com/sokheng429-wq/EBM-Frontend.git' },
            { label: 'Backend', url: 'https://github.com/sokheng429-wq/EBM-Backend.git' },
        ],
        demoLinks: [
            { label: 'Frontend', url: 'https://mdkelephant.fit/' },
            { label: 'Backend', url: 'https://ebm-backend.onrender.com' },
        ],
        technologies: ['Reactjs', 'SpringBoot','MySQL']
    },
    {
        id: 2,
        navId: "2",
        title: 'Pinky Perfume 💄',
        description: 'A perfume e-commerce web application with React frontend and Spring Boot backend API. it working now but still need to add more features like payment and social login and register backend deploy on render it only wake for 15 minute open backend demo for it working',
        imgSrc: pink,
        codeLinks: [
            { label: 'Frontend', url: 'https://github.com/sokheng429-wq/Picky' },
            { label: 'Backend', url: 'https://github.com/sokheng429-wq/Pinky-Backend' },
        ],
        demoLinks: [
            { label: 'Frontend', url: 'https://pinky.sokheng429.workers.dev/' },
            { label: 'Backend', url: 'https://pinky-backend.onrender.com/api/products' },
        ],
        technologies: ['Reactjs', 'Spring Boot', 'PostgreSQL']
    },
    {
        id: 3,
        navId: "3",
        title: 'Students Management 📚',
        description: 'This is management system for students, build with springboot java and mysql database',
        imgSrc: student,
        codeLink: 'https://github.com/sokheng429-wq/student-managements.git',
        demoLink: 'https://youtu.be/UGQfupnOXro',
        technologies: ['Java', 'Spring Boot', 'MySQL']
    },
    {
        id: 4,
        navId: "4",
        title: 'CamLandTraveler 📢',
        description: 'reactjs website build for test deployment on cloudfare',
        imgSrc: camland,
        codeLink: 'https://github.com/sokheng429-wq/CamLandTraveler.git',
        demoLink: 'https://camlandtraveler.sokheng429.workers.dev/',
        technologies: ['Node', 'React', 'Tailwind']
    },
    {
        id: 5,
        navId: "5",
        title: 'SPRINGSECURITY ',
        description: 'A basic Spring Boot and Spring Security authentication project.',
        imgSrc: login,
        codeLink: 'https://github.com/sokheng429-wq/SPRINGSECURITY.git',
        demoLink: 'https://youtu.be/UF1X8qwNKTs',
        technologies: ['Spring Boot','MySQL']
    },
    {
        id: 6,
        navId: "6",
        title: 'EMS (Employee Management System) ',
        description: 'A simple employee management system built with Spring Boot and PostgreSQL.',
        imgSrc: ems,
        codeLinks: [
            { label: 'Frontend', url: 'https://github.com/sokheng429-wq/ems-frontend.git' },
            { label: 'Backend', url: 'https://github.com/sokheng429-wq/ems-backend.git' },
        ],
        demoLink: 'https://www.youtube.com/watch?v=cy6v3E6Rf0A',
        technologies: ['Reactjs', 'Spring Boot', 'PostgreSQL']
    },
    {
        id: 7,
        navId: "7",
        title: 'Mini-Car 🚗',
        description: "still on development, this is a mini car game build with nextjs and nodejs SQL database use PostgreSQL",
        imgSrc: car,
        codeLink: 'https://github.com/sokheng429-wq/Mini-cars.git',
        demoLink: 'https://www.youtube.com/watch?v=cy6v3E6Rf0A',
        technologies: ['PostgreSQL', 'MUI', 'Node', 'NextJS']
    },
    {
        id: 8,
        navId: "8",
        title: 'Homerental 🏠',
        description: 'A home rental web application with React frontend and FastAPI backend. This project is still under development, and I am actively working on it to enhance its features and functionality. backend deploy on render it only wake for 15 minute open backend demo for it working',
        imgSrc: homerental,
        codeLinks: [
            { label: 'Frontend', url: 'https://github.com/sokheng429-wq/HomeRental-Frontend' },
            { label: 'Backend', url: 'https://github.com/sokheng429-wq/HomeRental-Backend' },
        ],
        demoLinks: [
            { label: 'Frontend', url: 'https://homerental.sokheng429.workers.dev/' },
            { label: 'Backend', url: 'https://homerental-backend-3.onrender.com' },
        ],
        technologies: ['Reactjs', 'FastAPI', 'PostgreSQL']
    },
    {
        id: 9,
        navId: "9",
        title: 'Zando 📱',
        description: 'A Flutter mobile application.',
        imgSrc: zando,
        codeLink: 'https://github.com/sokheng429-wq/Zando-app',
        demoLink: 'https://youtu.be/8ioEM2egG_A',
        technologies: ['Flutter', 'Dart']
    },
    {
        id: 10,
        navId: "10",
        title: 'DeliveryFood 🍔',
        description: 'A food delivery mobile application built with Flutter still under derverloping .',
        imgSrc: food,
        codeLink: 'https://github.com/sokheng429-wq/DeliveryFood-AppHeng',
        demoLink: 'https://youtube.com/shorts/1S-2wTXgqac',
        technologies: ['Flutter', 'Dart']
    },

];



export default projects;

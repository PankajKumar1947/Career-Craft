import dataAnalytic from '../Assests/dataAnalytics.jpg'
import webDevelopment from '../Assests/webDevelopment.jpg'
import dsaCpp from '../Assests/dsaCpp.png'

import webDev1 from '../Assests2/webDev1.png'
import appDev1 from '../Assests2/appDev1.png'
import dataScience1 from '../Assests2/dataScience1.png'
import devOps from '../Assests2/devOps.png'
import graphicDesign from '../Assests2/graphicDesign.png'
import softwareTesting from '../Assests2/softwareTesting.png'
import ux from '../Assests2/ux.png'


const course={
    "Trending": [
        {
            id:1,
            title:"Web Development Fundamentals",
            desc:"This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.",
            currentPrice:20000.00,
            originalPrice:90000.00,
            discount:50,
            img:webDev1,
            instructorName:"Lekha Jonardhan",
            startDate:"14 Oct 2023",
            duration:"4 Months",
            language:"English",
            mode:"Job Assurance | Live Classe & More",
            eligible:"College Student & Working Professional",
            banner:{
                skills:"Python, Machine Learning, Statistics",
                eligibility:"Anyone",
                roles:"Data Analysist, Data Scientist, ML",
                learningMode:"Hybrid"
            } 
        },
        {
            id:2,
            title:"Data Science Essentials",
            desc:"This course provides an introduction to the fundamental concepts and techniques used in data science. Students will learn how to collect, clean, analyze, and visualize data using popular tools and programming languages like Python and R.",
            currentPrice:15000.00,
            originalPrice:80000.00,
            discount:60,
            img:dataScience1,
            instructorName:"Lekha Jonathan 2",
            startDate:"14 Oct 2023",
            duration:"5 Months",
            language:"English1",
            mode:"Job Assurance | Live Classe & More",
            eligible:"College Student & Working",  
            banner:{
                skills:"Python, Machine Learning, Statistics",
                eligibility:"Anyone",
                roles:"Data Analysist, Data Scientist, ML",
                learningMode:"Hybrid"
            } 
           
        },
    ],

    "Live" :[
        {
            id:3,
            title:"Mobile App Development with React Native",
            desc:"This course teaches students how to build native mobile apps using the React Native framework. Students will learn how to create cross-platform apps that work on both iOS and Android devices, using a single codebase.",
            currentPrice:10000.00,
            originalPrice:50000.00,
            discount:70,
            img:appDev1,
            instructorName:"Lekha Jonardhan 3",
            startDate:"14 Oct 2023",
            duration:"6 Months",
            language:"English2",
            mode:"Job Assurance | Live Classe & More",
            eligible:"College Student & Working",
            banner:{
                skills:"Python, Machine Learning, Statistics",
                eligibility:"Anyone",
                roles:"Data Analysist, Data Scientist, ML",
                learningMode:"Hybrid"
            } 
        },
        {
            id:4,
            title:"DevOps for Agile Teams",
            desc:"This course provides an overview of DevOps principles and practices, with a focus on how they can be applied in agile software development teams. Students will learn how to use popular tools and techniques for continuous integration, continuous delivery, and automated testing.",
            currentPrice:15000.00,
            originalPrice:80000.00,
            discount:60,
            img:devOps,
            instructorName:"Lekha Jonathan 4",
            startDate:"14 Oct 2023",
            duration:"7 Months",
            language:"English3",
            mode:"Job Assurance | Live Classe & More",
            eligible:"College Student & Working",
            banner:{
                skills:"Python, Machine Learning, Statistics",
                eligibility:"Anyone",
                roles:"Data Analysist, Data Scientist, ML",
                learningMode:"Hybrid"
            }   
           
        },
    ],

}

export default course;
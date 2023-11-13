import dataAnalytic from '../Assests/dataAnalytics.jpg'
import webDevelopment from '../Assests/webDevelopment.jpg'
import dsaCpp from '../Assests/dsaCpp.png'


const course={
    "Trending": [
        {
            id:1,
            title:"Mastering Full Stack Data Analytics(T)",
            currentPrice:20000.00,
            originalPrice:9000.00,
            discount:50,
            img:dataAnalytic,
            instructorName:"Lekha Jonardhan",
            startDate:"14 Oct 2023",
            mode:"Job Assurance | Live Classe & More",
            eligible:"College Student & Working Professional", 
        },
        {
            id:2,
            title:"Mastering Full Web Development(T)",
            currentPrice:15000.00,
            originalPrice:8000.00,
            discount:60,
            img:webDevelopment,
            instructorName:"Lekha Jonathan 2",
            startDate:"14 Oct 2023",
            mode:"Job Assurance | Live Classe & More",
            eligible:"College Student & Working",  
           
        },
    ],

    "Live" :[
        {
            id:3,
            title:"Mastering Data Structure in C++(L)",
            currentPrice:10000.00,
            originalPrice:500.00,
            discount:70,
            img:dsaCpp,
            instructorName:"Lekha Jonardhan 3",
            startDate:"14 Oct 2023",
            mode:"Job Assurance | Live Classe & More",
            eligible:"College Student & Working",
            filter:"Live", 
        },
        {
            id:4,
            title:"Mastering Full Web Development(L)",
            currentPrice:15000.00,
            originalPrice:8000.00,
            discount:60,
            img:webDevelopment,
            instructorName:"Lekha Jonathan 4",
            startDate:"14 Oct 2023",
            mode:"Job Assurance | Live Classe & More",
            eligible:"College Student & Working",  
           
        },
    ],

}

export default course;
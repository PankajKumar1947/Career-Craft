import dataAnalytic from '../Assests/dataAnalytics.jpg'
import webDevelopment from '../Assests/webDevelopment.jpg'
import dsaCpp from '../Assests/dsaCpp.png'


const course={
    "Trending": [
        {
            id:1,
            title:"Mastering Full Stack Data Analytics(T)",
            desc:"Embark on a transformative learning journey with ourPython and Machine Learning Essentials course. Delve into the foundations of Python programming and seamlessly transition into the fascinating world of machine learning. This course is designed for individuals with a keen interest in machine learning and a desire to harness the power of Python for creating intelligent and impactful applications .",
            currentPrice:20000.00,
            originalPrice:90000.00,
            discount:50,
            img:dataAnalytic,
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
            title:"Mastering Full Web Development(T)",
            desc:"Transformative learning journey with ourPython and Machine Learning Essentials course. Delve into the foundations of Python programming and seamlessly transition into the fascinating world of machine learning. This course is designed for individuals with a keen interest in machine learning and a desire to harness the power of Python for creating intelligent and impactful applications .",
            currentPrice:15000.00,
            originalPrice:80000.00,
            discount:60,
            img:webDevelopment,
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
            title:"Mastering Data Structure in C++(L)",
            desc:"Llearning journey with ourPython and Machine Learning Essentials course. Delve into the foundations of Python programming and seamlessly transition into the fascinating world of machine learning. This course is designed for individuals with a keen interest in machine learning and a desire to harness the power of Python for creating intelligent and impactful applications .",
            currentPrice:10000.00,
            originalPrice:50000.00,
            discount:70,
            img:dsaCpp,
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
            title:"Mastering Full Web Development(L)",
            desc:"Let's Embark on a transformative learning journey with ourPython and Machine Learning Essentials course. Delve into the foundations of Python programming and seamlessly transition into the fascinating world of machine learning. This course is designed for individuals with a keen interest in machine learning and a desire to harness the power of Python for creating intelligent and impactful applications .",
            currentPrice:15000.00,
            originalPrice:80000.00,
            discount:60,
            img:webDevelopment,
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
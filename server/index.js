const express = require('express')
const app = express()
const PORT = 3040
const server = app.listen(PORT, function() {console.log(`server started at ${PORT}`)})
 

app.get('/api/resume/:name', function(req,res){
    const data = {
     dan:{
        name:'Dan',
        role:'FRONTEND DEVELOPER',
        surname:'REUTCHI',
        email:'reutchi1997@icloud.com',
        phone:'0724863196',
        about: {
            title: 'ABOUT ME',
            details: `I love spending time on fixing little details and optimizing web apps.Also i like working in a team,you'l learn faster and much more. <br/>As the saying goes: "Two heads are better than one".`
        },
        work: {
            title: 'WORK EXPERIENCE',
            details:`I am a front-end developer with more than 6 months have experience of building Web applications with JavaScript/ ReactJs/ VueJs and some other cool libraries and frameworks.
            I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow, i have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.

            `
        },
        soft_skills: {
            title: 'SOFT SKILLS',
            details:`Leading <br/>
                    Teamwork <br/>
                    Creativity <br />
                    Active listening <br/>
                    Optimism <br/>
                    Self-confidence <br/>
                    Ability to Work Under Pressure and Time Management <br/>
                    Responsibility <br/>
                    Self discipline <br/>`
        },
        // special_skills: {
        //     title: 'SPECIAL SKILLS',
        //     details:`Teaching and mentorship. I have a youtube channel of tutorials in my native language.
        //         <br/>
        //     I have an optional class of web development overview at University of Computer Science Bucharest along with private classes.`
        // },
        skills : [
            {
                name: 'HTML',
                rate: 6
            },
            {
                name: 'CSS',
                rate: 5
            },
            {
                name: 'JS (ES6)',
                rate: 5
            },
            {
                name:'Jira',
                rate: 4
            },
            {
                name: 'VUE.jS',
                rate: 4
            },
            {
                name: 'REACT.JS',
                rate: 4
            },
            {
                name: 'NPM/YARN',
                rate: 4
            },
            {
                name: 'GIT',
                rate: 4
            },
            {
                name: 'FIGMA',
                rate: 3
            },
            {
                name: 'Testing/Cypress',
                rate: 4
            },
            {
                name: 'UNIT TESTING',
                rate: 2
            },
            {
                name: 'GSAP',
                rate: 1
            },
            {
                name: 'NodeJs',
                rate: 1
            },
           ],
        educations:{
            title:'EDUCATION',
            details:`
            
            Study program: Frontend Dev IT School Timisoara.
            <br/>  <br/>


            Centrul de Excelenta in Transporturi
             2013 - 2018
            <br/>  <br/>  `
        },
        current_projects:{
            title:'CURRENT PROJECTS',
            details:`
            Britlex Language
            Public learning english platform
            role: Frontend DEV
            <br/>  <br/>
            `
        },
        personal_projects:{
            title:'PERSONAL PROJECTS',
            details:`
            Public learning english platform Britlex
            <br/>  <br/>
            Personal Culinary project
            <br/> <br/>
            Presentation Portfolio Project (VueJs)
            <br/> <br/>
            `
        },
     },
    }
    const name = req.params.name
    res.send(data[name])
})
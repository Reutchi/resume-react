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
            details: `<i> I am a front-end developer with more than 6 months of experience writing html, css, and js. 
             </i> <br/>
             I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow, i have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.`
        },
        work: {
            title: 'WORK EXPERIENCE',
            details:`I have started intense programming ~8 years ago, extremely curious to find out the meaning of “angular, node and couchdb” words. Those are the three words that were part of the daily incantation of one of my good friend (later my trainer). Since then I have "learned" more similar words like Vue.js, React.js, npm, yarn, etc. Since my background is in DTP (I used to have a small printing shop),  was quite easy to understand the true frontend requirements, and to easily accomplish pixel-perfect specifications. I have worked on multiple projects since, most of them being FE and some full-stack. I love Vue.js the most, out of all frameworks out there. Later I have switched to being also a tech trainer, and I am currently teaching students at the University of Technology and Information in Bucharest (Romania).`
        },
        soft_skills: {
            title: 'SOFT SKILLS',
            details:`Leading <br/>
                    Teamwork <br/>
                    Creativity <br />
                    Active listening <br/>
                    Optimism <br/>
                    Self-confidence <br/>
                    Self discipline <br/>`
        },
        special_skills: {
            title: 'SPECIAL SKILLS',
            details:`Teaching and mentorship. I have a youtube channel of tutorials in my native language.
                <br/>
            I have an optional class of web development overview at University of Computer Science Bucharest along with private classes.`
        },
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
            BMJ (British Medical Journal) (UK)
            Public learning platform
            role: Frontend lead
            <br/>  <br/>
            PORTAIL AUTOENTREPRENEUR.FR
            Accounting manager platform
            role: Frontend Lead
            <br/>  <br/>
            GIVVABLE (AUS)
            Companies database
            role: Frontend Lead
            `
        },
        personal_projects:{
            title:'PERSONAL PROJECTS',
            details:`
            BAND ON DEMAND
            Web app to allow musicians
            <br/>  <br/>
            MY ONLINE BRAIN
            Web app to manage online learning and information management and storage
            <br/>  <br/> 
            AUTOSERVICEPRO.RO
            Web app to trade automotive parts.
            `
        },
     },
    }
    const name = req.params.name
    res.send(data[name])
})
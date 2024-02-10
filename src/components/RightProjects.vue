<template>
    <div ref="projectsRef" >
        <!-- Header -->
        <div>
            <h3 class="project-header">PROJECTS</h3>
        </div>

        <!-- Experience List -->
        <div class="">
            
            <div class="project-component-container">
                <div class="project-component-date">
                    <img src="../assets/zipper.png" width="150px" alt="">
                </div>

                <div class="project-component-rightside">
                    <div class="project-component-header">
                        <h2 class="project-component-company">Zipper</h2>
                        
                        <div class="project-repos-link">
                            <div class="project-repo-link-div">
                                <a href="https://github.com/mohanthilak/zipper-frontend" target="_blank">Frontend Repo
                                <svg fill="white" width="19" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
                            </a>                            
                            </div>
                            <div class="project-repo-link-div">
                                <a href="https://github.com/mohanthilak/books" target="_blank">Backend Repo
                                <svg fill="white" width="19" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg></a>
                            </div>
                        </div>
                    </div>

                    <div class="project-component-body">
                        <div>
                            <p>A Decentralized library, where anyone can borrow and lend books in their neighborhood.</p>
                            <br>
                            <p>The Frontend is built with Next JS and Tailwind CSS. It communicates with a <span class="about-highlight"> Dockerized Microservices Backend</span> through REST API.</p>
                            <br>
                            <p>There are 4 microservices with an <span class="about-highlight">API Gateway that acts as reverse proxy</span>, but can be scaled to be a Rate Limiter too. The microservices communicate between each other through <span class="about-highlight">Message Queues</span> for <span class="about-highlight">asynchronous communication</span> and uses the internal REST API for synchronous communication.</p>
                            <br>
                            <p>Used <span class="about-highlight">Redis to cache data</span> that would be requested later or that is frequently used.</p>
                            <br>
                            <p>3 out of 4 microservices are written in <span class="about-highlight">TypeScript</span> and 1 <span class="about-highlight">Notification Service</span> is written in <span class="about-highlight">GO, following Hexagonal Architecture</span>. There is also a <span class="about-highlight">CI/CD</span> pipeline setup to run tests and deploy the application to <span class="about-highlight">AWS ECS</span>.</p>
                            <br>
                        </div>
                    </div>
                    
                    <div class="project-component-skills-list">
                        <SkillsTag v-for="attribute in zipperSkills" :SkillName="attribute" />
                    </div>
                </div>
            </div>

            <div class="project-component-container">
                <div class="project-component-date">
                    <img src="../assets/ErrorLogsTroubleshoot.jpg" width="150px" alt="">
                </div>
                <div class="project-component-rightside">
                    <div class="project-component-header">
                        <h2 class="project-component-company">Automated Server Error Troubleshooting</h2>
                        
                        <div class="project-repos-link">
                            <!-- <div class="project-repo-link-div">
                                <a href="https://github.com/mohanthilak/zipper-frontend" target="_blank">Frontend Repo
                                <svg fill="white" width="19" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
                            </a>                            
                            </div> -->
                            <div class="project-repo-link-div">
                                <a href="https://github.com/mohanthilak/logmanagement" target="_blank">Backend Repo
                                <svg fill="white" width="19" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg></a>
                            </div>
                        </div>
                    </div>

                    <div class="project-component-body">
                        <div>
                            <p>An application to automate the process of finding out the cause of the server crash, finding a solution to the error and implementing it in the codebase. This is achieved by accessing the <span class="about-highlight">error log</span> that is fed to the error troubleshooting service that works with a <span class="about-highlight">GPT model</span> trained  on the application’s specifications. The GPT model then appends the <span class="about-hightlight">code/non-code solution</span> to error log.</p>
                            <br>
                            <p>This application uses the <span class="about-highlight">Elastic Stack</span>, except that instead of logstash, I used <span class="
                                about-highlight">FileBeat</span>. The logs are collected through FileBeat. The error logs are diverted to a <span class="about-highlight">Kafka Cluster</span> to be processed by the <span class="about-highlight">error troubleshooting service</span>. The error log along with the solution is then indexed to the <span class="about-highlight">Elastic Search DB</span>. The other types of logs are directly diverted to Elastic search. <span class="about-highlight">Kibana</span> is then used to visualize these logs with a interactive dashboard.</p>
                            <br>
                        </div>
                    </div>
                    
                    <div class="project-component-skills-list">
                        <SkillsTag v-for="attribute in LogManagementSkills" :SkillName="attribute" />
                    </div>
                </div>
            </div>
            <div class="project-component-container">
                <div class="project-component-date">
                    <img src="../assets/quizo.png" width="150px" alt="">
                </div>
                <div class="project-component-rightside">
                    <div class="project-component-header">
                        <h2 class="project-component-company">Quizo</h2>
                        
                        <div class="project-repos-link">
                            <div class="project-repo-link-div">
                                <a href="https://github.com/mohanthilak/quizo-frontend" target="_blank">Frontend Repo
                                <svg fill="white" width="19" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
                            </a>                            
                            </div>
                            <div class="project-repo-link-div">
                                <a href="https://github.com/mohanthilak/quizo-backend" target="_blank">Backend Repo
                                <svg fill="white" width="19" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg></a>
                            </div>
                        </div>
                    </div>

                    <div class="project-component-body">
                        <div>
                            <p>A <span class="about-highlight">MERN application</span> where anime fan can assess their knowledge in their favorite anime and chat with their friends. </p>
                            <br>
                            <p>The React frontend talks to the NodeJS backend with a <span class="about-highlight">REST API</span>. The backend is connected to a mongoDB instance hosted in <span class="about-highlight">MongoDB Atlas</span>.</p>
                            <br>
                            <p>The chat functionality is built using SocketIO to establish <span class="about-highlight">web socket</span> connection for <span class="about-highlight">bidirectional flow of data</span>.</p>
                            <br>
                            <p>The users also have an option to update their profile picture, that are store in a <span class="about-highlight">Cloudinary</span></p>
                            <br>
                        </div>
                    </div>
                    
                    <div class="project-component-skills-list">
                        <SkillsTag v-for="attribute in quizoSkills" :SkillName="attribute" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script >
    import ProjectComponent from './ProjectComponent.vue';
    import SkillsTag from './SkillsTag.vue';
    export default{
        data() {
            return {
                zipperSkills: ['NodeJS', "GO", 'NextJS', 'Tailwind CSS', 'Rabbit MQ', 'AWS', 'Redis', 'MongoDB', 'Docker', 'Github Actions'],
                LogManagementSkills: ['NodeJS', 'FileBeat', 'Kibana', 'Docker', 'Kafka', 'Elastic Search', 'GPT'],
                quizoSkills: ['NodeJS', 'ReactJS', 'MongoDB', "Cloudinary", "Socket IO"],
                experiencesArray: [
                {projectName:'Zipper', image:"../assets/zipper.png", workDesk: ["Worked with Unity to build simulations for space missions. Connect a 6DOF engine written in C++ to the simulations in unity through shared memory access.", "Reduced the latency in communication between unity game play and the 6DOF engine by shifting from UDP mode of communication to shared memory access."], skills: ['C#', 'C++', 'Unity', 'Computer Networks']},
                {projectName:'Automated Server Error Troubleshooting', image:"../assets/ErrorLogsTroubleshoot.jpg", workDesk: ["Built an admin dashboard using React to display statistics of various products and shops. Handled state management with Redux. Added features and optimized the company’s landing page built with NextJS for SEO.", "Worked with NodeJS and databases like MongoDB, PostgreSQL, and Elastic Search to build REST APIs.", "Working here helped me gain insight about Indian e-commerce for small scale businesses, by understanding the needs to scale their business. I also got an opportunity to learn and work with the ONDC REST APIs to integrate with the platform."], skills: ['NodeJS', 'FileBeat', 'Kibana', 'Docker', 'Kafka', 'Elastic Search', 'GPT']},
                {projectName:'Intelliapplyd Technologies', role:"Backend Developer Intern", workDesk: ["Built the testing stack following Test Driven Development architecture to test the various microservices using Jest, a JavaScript testing library.", "Worked with Kafka extensively to communicate between microservices. I was also responsible to build and maintain tech documentation for the microservices."], skills: ['NodeJS', 'TDD', 'Kafka', 'Microservices', 'MySQL', 'Documentation']}
                ]
            }
        },
        components: {
            ProjectComponent,
            SkillsTag
        },
        mounted() {
            this.emitter.on('scrollToProjects', () => {
                console.log("Scroll to Projects")
                var element = this.$refs.projectsRef;
                var top = element.offsetTop;
                window.scrollTo(0, top-10);
            });
        },
    }
</script>

<style scoped>

.about-highlight{
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    /* opacity: 1; */
        
}

.project-header{
    margin-top: 10rem;
    margin-bottom: 4rem;
}

a{
    text-decoration: none;
    color: white;
    font-size: 12px;
}
.project-component-container{
    width: 95%;                
    margin: 4rem 0;                         
    padding: 20px 10px;
    border-radius: 20px;
    background-color: #031133;
    display: flex;
    gap: 10px;
    color: rgba(255, 255, 255, 0.7);
}

.project-component-header{
    margin-bottom: 3rem;
}

.project-component-container:hover{

}
.project-component-rightside{
    width: 70%;
    /* background-color: blueviolet; */
}

.project-component-date{
    font-size: 14px;
    width: 28%;
    /* padding: 1rem 0; */
    height: 120px;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
}

.project-component-date img {
    width: 150px;
}
.project-component-company{
    font-size: 22px;    
    margin-bottom: 10px;
    font-weight: 500;
    letter-spacing: 0.1px;
    color: rgba(255, 255, 255, 1);
}


.project-component-skills-list{
    margin-top: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
}

.project-repos-link{
    display: flex;
    align-items: center;
    gap: 20px;
}

.project-repo-link-div a{
    display: flex;
    align-items: center;
}

svg{
    transform: rotate(45deg);
}

@media only screen and (min-width: 1024px) and (max-width: 1250px){
    .project-component-date img{
        width: 120px;
    }
    .project-component-date{
        width: 30%;
        display: flex;
        justify-content: center;
    }
    .project-component-rightside{
        /* background-color: aqua; */
        width: 70%;
    }
}
@media only screen and (max-width: 1023px){
    .project-component-container{
        display: block;
    }
    .project-component-date{
        width: 100%;
        display: flex;
        /* background-color: aqua; */
        justify-content: flex-start;
    }
    .project-component-rightside{
        /* background-color: aqua; */
        width: 100%;
    }
    .project-component-company{}
}
</style>
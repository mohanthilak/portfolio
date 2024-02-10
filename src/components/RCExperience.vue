<template>
    <div ref="experienceRef">
        <!-- Header -->
        <div>
            <h3 class="experience-header">EXPERIENCE</h3>
        </div>

        <!-- Experience List -->
        <div>
            <ExperienceComponent v-for="exp in experiencesArray" :company="exp.company" :role="exp.role" :descBody="exp.workDesk" :skills="exp.skills" />
        </div>
    </div>
</template>
<script >
    import ExperienceComponent from './ExperienceComponent.vue';
    export default{
        data() {
            return {
                experiencesArray: [
                {company:'Indian Space Research Organisation', role:"Unity Developer", workDesk: ["Worked with Unity to build simulations for space missions. Connect a 6DOF engine written in C++ to the simulations in unity through shared memory access.", "Reduced the latency in communication between unity game play and the 6DOF engine by shifting from UDP mode of communication to shared memory access."], skills: ['C#', 'C++', 'Unity', 'Computer Networks']},
                {company:'Bohni Tech Pvt Ltd', role:"Fullstack Developer Intern", workDesk: ["Built an admin dashboard using React to display statistics of various products and shops. Handled state management with Redux. Added features and optimized the company’s landing page built with NextJS for SEO.", "Worked with NodeJS and databases like MongoDB, PostgreSQL, and Elastic Search to build REST APIs.", "Working here helped me gain insight about Indian e-commerce for small scale businesses, by understanding the needs to scale their business. I also got an opportunity to learn and work with the ONDC REST APIs by integrating it with the platform."], skills: ['React', 'NextJS', 'SEO', 'Redux', 'BootStrap', 'Tailwind CSS', 'NodeJS', 'MongoDB', 'Elastic Search', 'PostgreSQL']},
                {company:'Intelliapplyd Technologies', role:"Backend Developer Intern", workDesk: ["Built the testing stack following Test Driven Development architecture to test the various microservices using Jest, a JavaScript testing library.", "Worked with Kafka extensively to communicate between microservices. I was also responsible to build and maintain tech documentation for the microservices."], skills: ['NodeJS', 'TDD', 'Kafka', 'Microservices', 'MySQL', 'Documentation']}
                ]
            }
        },
        components: {
            ExperienceComponent
        },
        mounted() {
            this.emitter.on('scrollToExperience', () => {
                console.log("SDJDSAJDASDJKADSADJKJADASJ")
                var element = this.$refs.experienceRef;
                var top = element.offsetTop;
                console.log({element, top})
                console.log("Scroll to experienceRef", element, "asd:", top)
                window.scrollTo(0, top-10);
                // Accessing the ref and scrolling to it
                // this.$refs.aboutRef.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }
</script>

<style scoped>
.experience-header{
    margin-top: 10rem;
    margin-bottom: 4rem;
}
</style>
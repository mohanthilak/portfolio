<template>
    <div ref="aboutRef" class="about-content-holder">
        <h3 class="about-header">ABOUT</h3>
        <p>Hi! I'm Mohan Thilak a Fullstack Engineer from Bengaluru, India. My journey with software development began right after high school. I dabbled my hands with <span class="about-highlight">Web Development</span>. The initial curiosity of exploring something new lasted unusually long. Sooner or later I was caught in an endless loop of learning and implementing something new in my projects. </p>
        <br>
        <p>Eventually, my exploration in software engineering led to System Design. I find it interesting how applications perform at scale. Hence I started implementing <span class="about-highlight">Microservices and Event Driven Architecture</span> in my projects. I got opportunities to learn and test my skills in the industry by interning at 2 startups. I have built a testing stack for testing multiple microservices and built and managed multiple web applications with ReactJS and NextJS. I also worked with NodeJS MongoDB, PostgreSQL, and Elastic Search to build RestAPIs. </p>
        <br>
        <p>I am currently honing my skills in building resilient applications with Go, Docker, and many other tools. Check out my <a href="https://hashnode.com/@mohanthilak" target="_blank">blogs</a> where I share my learnings through interactive blogs.</p>
    </div>
</template>

<script>
    export default {
        mounted() {
            // Listen for the event
            this.emitter.on('scrollToAbout', () => {
                var element = this.$refs.aboutRef;
                var top = element.offsetTop;
                window.scrollTo(0, top-113.5);
                console.log("Scroll to About", element)
                // Accessing the ref and scrolling to it
                // this.$refs.aboutRef.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }
</script>

<style scoped>

    .about-header{
        display: none;
    }
    p{
        letter-spacing: 0.5px;
        margin: 0 0;
        font-size: 16px;
        /* font-weight: 500; */
        color: rgba(255, 255, 255, 0.7);
        line-height: 25px;
    }
    .about-highlight{
        color: rgba(255, 255, 255, 1);
        font-weight: 500;
        /* opacity: 1; */
        
    }
    .about-content-holder{
        margin: 6rem 0;
    }
    a{
        color: white
    }

    @media only screen and (max-width: 1023px) {
        .about-header{
            display: block;
            margin-bottom: 3rem;
        }
    }
</style>
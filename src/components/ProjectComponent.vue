<template>
    <div class="project-component-container">
        <div class="project-component-date">
            <img :src="image" alt="">
        </div>
        <div style="width: 80%;">
            <div class="project-component-header">
                <h2 class="project-component-company">{{projectName}}</h2>
                
                <div class="project-repos-link">
                    <div class="project-repo-link-div">
                        <a href="" target="_blank">Frontend Repo</a>
                        <svg fill="white" width="19" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
                    </div>
                    <div class="project-repo-link-div">
                        <a href="" target="_blank">Backend Repo</a>
                        <svg fill="white" width="19" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
                    </div>
                </div>
            </div>

            <div class="project-component-body">
                <div v-for="para in descBody">
                    <p>{{para}}</p>
                    <br>
                </div>
            </div>
            
            <div class="project-component-skills-list">
                <SkillsTag v-for="attribute in skills" :SkillName="attribute" />
            </div>
        </div>
    </div>
</template>

<script>
    import SkillsTag from './SkillsTag.vue';
    export default {
        components: {
            SkillsTag,
        },
        props: {
        projectName:String,
        skills:Array,
        descBody: Array, 
        image: String,
    }
    }
</script>

<style scoped>
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
    color: rgba(255, 255, 255, 0.7);
}

.project-component-header{
    margin-bottom: 3rem;
}

.project-component-container:hover{

}

.project-component-date{
    font-size: 14px;
    width: 25%;
    padding-left: 1rem;
    height: 70px;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    font-weight: 500;
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

.project-repo-link-div{
    display: flex;
    align-items: center;
}

svg{
    transform: rotate(45deg);
}
</style>
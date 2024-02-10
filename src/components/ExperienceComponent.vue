<template>
    <div class="experience-component-container">
        <div class="experience-component-date">
            <p>Jan - April, 2024</p>
        </div>
        <div class="project-component-rightside">
            <div class="experience-component-header">
                <h2 class="experience-component-company">{{company}}</h2>
                <h4 class="experienxe-component-role">{{ role }}</h4>
            </div>

            <div class="experience-component-body">
                <div v-for="para in descBody">
                    <p>{{para}}</p>
                    <br>
                </div>
            </div>
            
            <div class="experience-component-skills-list">
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
        company:String,
        role: String,
        skills:Array,
        descBody: Array 
    }
    }
</script>

<style scoped>
.experience-component-container{
    width: 95%;                
    margin: 4rem 0;                         
    padding: 20px 10px;
    border-radius: 20px;
    background-color: #031133;
    display: flex;
    color: rgba(255, 255, 255, 0.7);
}

.experience-component-header{
    margin-bottom: 3rem;
}

.experience-component-container:hover{

}

.experience-component-date{
    font-size: 14px;
    width: 25%;
    padding-left: 1rem;
    height: 70px;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    font-weight: 500;
}
.project-component-rightside{
    width: 80%;
}
.experience-component-company{
    font-size: 22px;    
    margin-bottom: 10px;
    font-weight: 500;
    letter-spacing: 0.1px;
    color: rgba(255, 255, 255, 1);
}

.experienxe-component-role{
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
}

.experience-component-skills-list{
    margin-top: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
}


@media only screen and (max-width: 1023px){
    .project-component-rightside{
        width: 100%;
    }
    .experience-component-container{
        display: block;
    }
    .experience-component-date{
        width: 100%;
        display: flex;
        /* background-color: aqua; */
        justify-content: flex-start;
        height: fit-content;
        padding-left: 0;
        padding: 10px 0;
    }
    .experience-component-company{
        margin: 10px 0;
    }
}
</style>
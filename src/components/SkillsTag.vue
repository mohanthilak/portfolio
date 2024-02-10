
<template>
    <div class="skills-component-div">
    <p>{{SkillName}}</p>
    </div>
</template>

<script>
export default {
    props: {
        SkillName: String,
    }
}
</script>

<style scoped>
    .skills-component-div{
        background-color: rgba(41,175,167, 0.2);
        padding: 5px 10px;
        border-radius: 20px;
        width: fit-content;
    }
    .skills-component-div p{
        color: #00FFB2;
        font-size: 14px;
    }
</style>
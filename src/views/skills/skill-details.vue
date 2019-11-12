<template>
    <div class="skill-details">
        <h1>Skill details</h1>
        <h2>{{this.skills}}</h2>
        <div class="container ettn-grid row center">
            <div class="img">
                <img v-bind:src="this.skills[0].image" alt="">
            </div>
            <div class="content">
                <h2>{{this.skills[0].name}}</h2>
                {{this.skills[0].description}}
            </div>
        </div>
    </div>
</template>

<script>
    import http from 'axios';
    export default {
        data: function() {
            return {
                skills:{}
            }
        },
        mounted() {
            http.get('http://localhost:8080/skills.json').then(response => { console.log(response); this.skills = response.data.filter(q=>q.id.$oid == this.$route.params.id);});
        }
    }
</script>
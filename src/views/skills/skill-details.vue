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
                <p>
                    {{this.skills[0].description}}
                </p>
                <div class="rating">
                    <ul>

                    </ul>
                </div>
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
        created: function() {
            http.get('http://localhost:8080/skills.json').then(response => { this.skills = response.data.filter(q=>q.id.$oid == this.$route.params.id);});
        },
        updated() {
            let ratingElement = document.querySelector('.skill-details .rating ul');

            for (let i = 0; i < 5; i++){
                let litag = document.createElement('li');
                let itag = document.createElement('i');
                if (this.skills[0].rating > i){
                    itag.classList.add('icon');
                    itag.classList.add('ion-md-heart');
                }else{
                    itag.classList.add('icon');
                    itag.classList.add('ion-md-heart-empty');
                }

                litag.appendChild(itag);
                ratingElement.appendChild(litag);
            }
        }
    }
</script>
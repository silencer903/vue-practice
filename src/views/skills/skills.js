import http from "axios"

export default {
    name: "skills",
    data:function (){
        return {
            originalSkills:[],
            skills:{}
        }
    },
    created(){
        http.get('http://localhost:8080/skills.json').then(response => (this.skills = response.data.sort((a, b) => (b.rating - a.rating))));
    },
    mounted(){
        document.querySelector('.skills .search-bar input').addEventListener('keydown', (e) => {
            if(e.key =='Enter'){
                this.search(e.srcElement.value);
            }
        });
    },
    updated(){
        if(this.originalSkills.length <= 0){
            this.originalSkills = this.skills;
        }
    },
    methods: {
        search(input){
            if(this.originalSkills.length > 0 ){
                this.skills = this.originalSkills;
            }
            this.skills = this.skills.filter(q => q.description.toLowerCase().includes(input.toLowerCase()))
        },
        sortByAlphabet(){
            this.skills.sort((a, b) => {
                a.name.localeCompare(b.name)
            });
        },
        sortByRating(){
            this.skills.sort((a, b) =>
                (b.rating - a.rating));
        }
    }
}
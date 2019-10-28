import http from "axios"

export default {
    name: "skills",
    data:{
        return :{
            skills:{}
        }
    },
    mounted(){
        http.get('http://localhost:8080/skills.json').then(response => (this.skills = response.data));
    }
}
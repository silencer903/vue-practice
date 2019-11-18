export default {
    name: "contact",
    data: function(){
        return {
            name: '',
            msg: '',
        }
    },
    methods:{
        submit(e){
            if(/\d+/.test(this.name)){
                alert('WROOOOOOOOONG!');
                console.log('Name has number');
                e.preventDefault();

            }
            e.preventDefault();
            console.log(this.name,this.msg);
        }
    }
}
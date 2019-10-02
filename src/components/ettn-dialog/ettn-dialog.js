export default {
    name: "ettn-dialog",
    mounted(){
        this.$bus.$on('dialog-open',function (payload) {
            payload.dialog.classList.add('show');
            payload.blur.classList.add('show');
        });
        this.$bus.$on('dialog-close',function (payload) {
            payload.dialog.classList.remove('show');
            payload.blur.classList.remove('show');
        });
    }
}
<template src="./app.html"></template>
<script>
    import EttnNavBar from "@/components/ettn-nav-bar/ettn-nav-bar.vue"
    import EttnSideBar from "@/components/ettn-side-bar/ettn-side-bar.vue"
    import EttnDialog from "@/components/ettn-dialog/ettn-dialog.vue"

    export default {
        name: "App",
        components:{
            EttnNavBar,
            EttnSideBar,
            EttnDialog
        },
        mounted(){
            this.currentLang = this.$i18n.locale;
            this.currentTheme = document.body.classList.item(0);
            this.dialogs = {};
            this.dialogs.lang =  document.querySelector('.ettn-dialog .dialogLang [slot="dialog-container"]');
            this.dialogs.theme =  document.querySelector('.ettn-dialog .dialogTheme [slot="dialog-container"]');
            this.dialogs.blur = document.querySelector('.ettn-dialog .blur');
        },
        methods:{
            openDialogLang: function () {
                this.$bus.$emit('dialog-open',{
                    dialog:this.dialogs.lang,
                    blur:this.dialogs.blur
                });
            },
            closeDialogLang: function () {
                this.$bus.$emit('dialog-close',{
                    dialog:this.dialogs.lang,
                    blur:this.dialogs.blur
                });
            },
            openDialogTheme: function () {
                this.$bus.$emit('dialog-open',{
                    dialog:this.dialogs.theme,
                    blur:this.dialogs.blur
                });
            },
            closeDialogTheme: function () {
                this.$bus.$emit('dialog-close',{
                    dialog:this.dialogs.theme,
                    blur:this.dialogs.blur
                });
            },
            changeLang(lang){
                this.$i18n.locale = lang;
                this.currentLang = lang;
            },
            changeTheme(theme){
                document.body.classList.toggle(this.currentTheme);
                document.body.classList.add(theme);
                this.currentTheme = theme;
            }
        }
    }
</script>
<style lang="scss" src="./_app.scss"></style>


// @ is an alias to /src
import HelloWorld from '../../components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    mounted(){
        let videoPlayer = document.querySelector(".video-container .video-player video");
        this.playControls = {
            play: document.querySelector(".video-container .player-controls .play-controls .play"),
            pause: document.querySelector(".video-container .player-controls .play-controls .pause"),
        };
        this.volumeControls = {
            off:  document.querySelector(".video-container .player-controls .volume-controls .volume-off"),
            mute:  document.querySelector(".video-container .player-controls .volume-controls .volume-mute"),
            high:  document.querySelector(".video-container .player-controls .volume-controls .volume-high"),
            low:  document.querySelector(".video-container .player-controls .volume-controls .volume-low"),
        };

        this.playControls.play.classList.add("show");
        this.volumeControls.mute.classList.add("show");
        this.volumeControls.high.classList.add("show");
        this.volumeControls.low.classList.add("show");
        document.querySelector(".video-container .player-controls .play-controls").addEventListener("click", () => {
            if(videoPlayer.paused){
                videoPlayer.play();
                this.showPlayCmd();
            }else{
                videoPlayer.pause();
                this.showPauseCmd();
            }
        });
        document.querySelector(".video-container .player-controls .volume-controls").addEventListener("click", () => {
            videoPlayer.muted = !videoPlayer.muted;
            if(videoPlayer.muted){
                this.showVolumeHigh();
            }else{
                this.showVolumeOff();
            }
        });

    },
    methods:{
        showPlayCmd(){
            this.playControls.play.classList.remove("show");
            this.playControls.pause.classList.add("show");
        },
        showPauseCmd(){
            this.playControls.play.classList.add("show");
            this.playControls.pause.classList.remove("show");
        },
        showVolumeHigh(){
            this.volumeControls.mute.classList.remove("show");
            this.volumeControls.high.classList.add("show");
        },
        showVolumeOff(){
            this.volumeControls.mute.classList.add("show");
            this.volumeControls.high.classList.remove("show");
        }
    }
};
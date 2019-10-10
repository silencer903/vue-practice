// @ is an alias to /src
import HelloWorld from '../../components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    mounted(){
        let videoPlayer = document.querySelector(".video-container .video-player video");
        this.seekControl = document.querySelector(".video-container .player-controls .seek-controls .seek-slider");
        this.seekControl.setAttribute("min",0);
        this.seekControl.value = 0;
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
            this.seekControl.setAttribute("max", videoPlayer.duration);
            videoPlayer.muted = !videoPlayer.muted;
            if(videoPlayer.muted){
                this.showVolumeHigh();
            }else{
                this.showVolumeOff();
            }
        });
        document.querySelector(".video-container .player-controls .volume-slider-control .volume-slider").addEventListener("input", (e) => {
            videoPlayer.volume = e.target.value /100;
        });
        this.seekControl.addEventListener("input", (e) => {
            videoPlayer.pause();
            videoPlayer.currentTime = this.seekControl.value;
        });

        this.seekControl.addEventListener("change", (e) => {
            videoPlayer.play();
        });

        videoPlayer.addEventListener("timeupdate", (e) => {
            this.seekControl.value = videoPlayer.currentTime;
        })
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
        },
        slider(input){
            //let res = Math.round(input * 10)/10;
            let res = input / 100;

        }
    }
};
<template>
   <div class="container">
     <video id="my-video" class="video-js vjs-default-skin" controls preload="auto"
       poster="../../assets/about/poster.png" data-setup="{}">
       <source src="../../assets/about/video.mp4" type='video/mp4'>
       <p class="vjs-no-js">
         Для просмотра этого видео пожалуйста включите JavaScript, и рассмотрите возможность перехода на
         <a href="https://videojs.com/html5-video-support/" target="_blank">браузер, который поддерживает HTML5 видео</a>
       </p>
     </video>
   </div>
 </template>
 
<script>
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  
  export default {
    name: 'VideoPlayerComponent',
    mounted() {
      this.player = videojs(this.$el.querySelector('#my-video'), {
        controlBar: {
          pictureInPictureToggle: false
        }
      })
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose()
      }
    }
  }
</script>
 
 <style scoped>
   .container{
      width: 100%;
      height: auto;
   }

   #my-video{
      width: 100%;
      background: #16191f;
      height: 888px;
   }

   #my-video .vjs-poster {
      width: 100%;
    }


 </style>
 
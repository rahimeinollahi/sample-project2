<template>
    <div id="osu-page">
        <navbar-osu />
        <osu-body />
       
    </div>
</template>

<script>
import NavbarOsu from '@/components/NavbarOsu.vue'
import OsuBody from '@/components/OsuBody.vue'
    export default {
        components:{
            NavbarOsu,
            OsuBody
                
        }
    }
</script>

<style lang="scss" scoped>
#osu-page{
    // background-image:url('../../src/assets/01.jpg');
//    background-repeat: no-repeat;
//    background-size: cover;
    
}
</style>
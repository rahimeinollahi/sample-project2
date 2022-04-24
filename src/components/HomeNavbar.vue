<template>
    <div>
        <div class="container-fluid bg-light mt-1 d-flex justify-content-end">
            <img id="img-logo" src="./user-image.png" alt="logo-of-home" class="rounded-circle mt-2 p-1">
            <div class="">
                <router-link to="/login" class="text-dark nav-link mt-2 p-1">Login</router-link>
            </div>
         </div>
         
         <nav-bar />

    </div>
</template>

<script>
import NavBar from './NavBar.vue'
    export default {
        name:'HomeNavbar',
        components:{
            NavBar
        }
    }
</script>

<style lang="scss" scoped>

#img-logo{
    width:  40px;
    height: 40px;
}
</style>
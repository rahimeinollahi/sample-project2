<template>
    <div class="bg-dark  justify-content-start mt-2">
        <h1>Footer page and source...</h1>
        <ul>
            <li class="nav-item" v-for="item in footerItems" :key="item.id">
                <router-link class="nav-link text-white" :to="item.path">{{item.itemName}}</router-link>
            </li>
        </ul>
        <hr>
        <footer>
            <img src=../../src/assets/twitter.png>
            <i class="glyphicon glyphicon-cloud"></i>
            <i class="glyphicon glyphicon-thumbs-up"></i>
            <i class="fab fa-instagram"></i>
            <a href="#" class="fa fa-facebook text-white"></a>
        </footer>
    </div>
</template>

<script>
    export default {
        name:'FooterDep',
        data(){
            return{
                footerItems:[
                    {id:1,itemName:'Locate',path:'/'},
                    {id:2,itemName:'Academic Advising',path:'/'},
                    {id:3,itemName:'Campus Map',path:'/'},
                    {id:4,itemName:'Class Schedular ',path:'/'},
                    {id:5,itemName:'Books',path:'/'},
                    {id:6,itemName:'Social Work',path:'/'},
                    {id:7,itemName:'Departemant A to Z',path:'/'},
                    {id:8,itemName:'Library',path:'/'},
                    {id:9,itemName:'OTDI',path:'/'},
                    {id:10,itemName:'Provost',path:'/'},
            ]
        }
         }
    }
</script>

<style lang="scss" scoped>
*{

    scroll-behavior: smooth;
}
</style>
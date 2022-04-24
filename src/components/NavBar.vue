<template>
    <div class="row bg-light border mt-2">
        <div class="col-sm-6">
            <router-link class="nav-link" to="/OSU-dev">OSU.DEV</router-link>
        </div>
        <div class="col-sm-6">
            <ul class="nav ">
                <li class="nav-item" v-for="item in navHomeItems" :key="item.id">
                    <router-link class="nav-link" :to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'NavBar',
        data(){
            return{
                navHomeItems:[
                    {id:1,name:'Help',path:'/help'},
                    {id:2,name:'Link',path:'/link'},
                    {id:3,name:'Map',path:'/map'},
                    {id:4,name:'Find People',path:'/find-pople'},
                    {id:4,name:'Search',path:'/search'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="container mt-1 p-1">
        <div class="nav justify-content-center  ">
            <li class="nav-item bg-light dropdown" v-for="item in navOsuItems" :key="item.id">
                <router-link class="nav-link text-dark dropdown-toggle" data-bs-toggle='dropdown' to="/">{{item.name}}</router-link>
                <ul class="dropdown-menu" v-if="item.id==1">
                    <li v-for="item2 in futureItems" :key="item2.id">
                        <router-link class="dropdown-item " :to="item2.path" >{{item2.name}}</router-link>
                    </li>
                </ul>
            </li>
        </div>
    </div>
</template>

<script>
    export default {
        name:"NavbarOsu",
        data(){
            return{
                navOsuItems:[
                    {id:1,name:'Future Students'},
                    {id:2,name:'Current Students'},
                    {id:3,name:'Alumai'},
                    {id:4,name:'Faculty/Staff'},
                    {id:5,name:'Academic'},
                ],
                futureItems:[
                    {id:11,name:'Apply',path:"/apply"},
                    {id:12,name:'Application Status',path:"/"},
                    {id:13,name:'Admission',path:"/"},
                    {id:14,name:'Majors',path:"/"},
                    {id:15,name:'Visit',path:"/"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
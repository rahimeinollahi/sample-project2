<template>
    <div class="container mt-2 text-start">
        <div class="row mt-3">
            <div class="col-1"></div>
            <div class="col-10 bg-light">
                <h1 class="">Departements</h1>
                <img src="../../src/assets/dep-head.jpg" alt="departemant image">
                <div class="row mt-3">
                    <div class="col-sm-6">
                        <ul>
                            <li v-for="item in leftItems" :key="item.id">
                                <router-link class="nav-link text-dark" :to="item.path">{{item.itemName}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <ul>
                            <li v-for="item in rightItems" :key="item.id">
                                <router-link class="nav-link text-dark" :to="item.path">{{item.itemName}}</router-link>
                            </li>
                        </ul>
                    </div>
                        <footer-dep />
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
</template>

<script>
import FooterDep from '../../src/components/FooterDep.vue'
    export default {
        components:{
            FooterDep
        },
        data(){
            return{
                leftItems:[
                    {id:1,itemName:'Art',path:'/'},
                    {id:2,itemName:'Biology',path:'/'},
                    {id:3,itemName:'Business',path:'/'},
                    {id:4,itemName:'Classic',path:'/'},
                    {id:5,itemName:'Chemistery',path:'/'},
                    {id:6,itemName:'Communication',path:'/'},
                    {id:7,itemName:'Computer Sciense',path:'/'},
                    {id:8,itemName:'Economic',path:'/'},
                    {id:9,itemName:'English',path:'/'},
                    {id:10,itemName:'French',path:'/'},
                ],
                   rightItems:[
                    {id:1,itemName:'Mathmatices',path:'/'},
                    {id:2,itemName:'Music',path:'/'},
                    {id:3,itemName:'Philsophy',path:'/'},
                    {id:4,itemName:'Physics',path:'/'},
                    {id:5,itemName:'Pychology',path:'/'},
                    {id:6,itemName:'Social Work',path:'/'},
                    {id:7,itemName:'Soicology',path:'/'},
                    {id:8,itemName:'Spanish',path:'/'},
                    {id:9,itemName:'Theratrs',path:'/'},
                    {id:10,itemName:'Honor program',path:'/'},
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
#routes{
    text-decoration: none;
    
}
</style>
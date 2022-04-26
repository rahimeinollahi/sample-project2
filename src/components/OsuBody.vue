<template>
   <div>
        <div class="card bg-light opacity-75 w-75 mt-2 p-3">
        <h3 class="text-dark"> The Ohio State University</h3>
        <h6>The Ohio State UniversityWhat's it like to intern for the CEO of Pfizer? McKenna fills you in.</h6>
        <button class="btn btn-danger ">Read More</button>

        </div>

        <div class="row mt-3 text-center">
            <div class="col-sm" v-for="item in 3" :key="item">
                <h5>State of the university</h5>
                <p class="text-start">President Johnson highlights commitment to service and excellence</p>
                <button class="border-red btn btn-danger">Read More</button>
            </div>
            
        </div>

        <div class="row d-flex  justify-content-start  p-2 mt-2">
            <div class="col-sm-  p-1 text-center p-2">
                <router-link class="" to="/image1">
                    <img src="../../src/assets/pic1.jpg" alt="picture1">
                    <p class="nav-link">Ohio state envirment</p>
                </router-link>   
            </div>

            <div class="col-sm-  p-1 text-center p-2">
                <router-link class="" to="/image1">
                    <img src="../../src/assets/pic2.jpg" alt="picture2">
                     <p>Ohio state strategic plan</p>
                 </router-link>
            </div>

            <div class="col-sm-  p-1 text-center p-2">
               <router-link class="" to="/image1">
                    <img src="../../src/assets/pic3.jpg" alt="picture2">
                     <p>Ohio state strategic plan</p>
                 </router-link>
            </div>
          
        </div>

   </div>
</template>

<script>
    export default {
        name:"OsuBody"
    }
</script>

<style lang="scss" scoped>

</style>
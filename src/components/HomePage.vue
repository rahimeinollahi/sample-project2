
<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-sm-3 bg-light"></div>
            <div class="col-sm-6  flex-cloumn justify-content-start text-start p-2">
                <div class="text-start">
                    <h1>Tuturail</h1>
                     <h3>some Important thing in css</h3>
                     <hr class="">
                </div>
                <h6 class="text-danger text-start">bout me</h6>
                <router-link to="/" class="text-warning">Home</router-link>
                <br>
                <h4 class="mt-3"> 7 algorithms and data structures every programmer must know</h4>

                <pre>







                </pre>
                <h1>1.Sort algorithms</h1>
                  <p>Sorting is the most heavily studied concept in Computer Science. Idea is to arrange the items of a list in a specific order. Though every major programming language has built-in sorting libraries, it comes in handy if you know how they work. Depending upon requirement you may want to use any of these.</p>

                  <h1>Search Algorithms...</h1>
                  <h5>Binary Search (in linear data structure)</h5>
                  <p>Binary search is used to perform a very efficient search on sorted dataset. The time complexity is O(log2N). Idea is to repeatedly divide in half the portion of the list that could contain the item, until we narrow it down to one possible item. Some applications are</p>
                   
                 <pre>






                </pre>
                <h6>Leave a replay</h6>
                <textarea class="w-75  mt-3 text-center"></textarea>
                <h6>Anti-sapn</h6>
                <input type=" text" placeholder="Anti-spam-world">
                <p>To prove you are a person (not a spam script), type the words from the following picture or audio file</p>
               
                <form action="get">
                    <label for="username" class="form-label">UserName</label>
                    <input type="text" placeholder="Enter your userName" class="form-control"  id="username" name="username">
                    <label for="username" class="form-label">email</label>
                    <input type="text" placeholder="Enter your email"  class="form-control" id="email" name="email">
                    <input type="button" value="Post Comment" class="btn btn-danger mt-3">
                </form>
                    <div class="g-recaptcha" data-sitekey="6Lf0gqEfAAAAAMFVioD38jsmawFAbynsz94IcjZs"></div>
                    
                <div></div>

            </div>

            <div class="col-sm-3 bg-light"></div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomePage'
    }
</script>

<style lang="scss" scoped>
text-area{
    resize: true;
}
</style>
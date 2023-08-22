<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';

</script>

<template>

<h1 class = "display-6" >Contact</h1>

<div id = "main" class="container">

    <div id = "contact-modes" class="column shadow p-3 mb-5 bg-body-tertiary rounded">
        <h5>Talk to me</h5>

            <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <p><a href=""><i class="bi bi-envelope-at"></i></a>sanda.tsilana@gmail.com</p>
            </div>
            <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <p><a href=""><i class="bi bi-linkedin"></i></a>Linkedin</p>
            </div>
            <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <p><a href=""><i class="bi bi-github"></i></a>Github</p>
            </div>

        </div>

   
    

    <div id = "form" class="container">

    </div>
 </div>
  
</template>

<style scoped>
h1{
    text-align: center;
    text-decoration: underline;
    padding-top: 50px;
    padding-bottom: 70px;
}

h5{
    text-align: center;
    margin: 10px 0px 30px 0px;
    font-weight: bold;
}

#main{
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
}


i{
    padding: 20px 10px 20px 10px;
    font-size: 2rem;
}

div a{
    text-decoration: none;
    color: black;
}

#contact-modes{
    padding: 100px;
    width: 50%;
    height: 500px;
}

.col{
    text-align: center;
    padding: 30px 0px 30px 0px;

}


</style>
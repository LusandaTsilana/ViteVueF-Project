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

        <div id = "form-box" class="column shadow p-3 mb-5 bg-body-tertiary rounded">
            <h5>Write me your project</h5>

        <form>
            <div class="mb-3">
                <label for="InputName" class="form-label">Full Name</label>
                <input type="name" class="form-control" id="InputName">
    
            </div>
            <div class="mb-3">
                <label for="InputEmail" class="form-label">Email</label>
                <input type="Email" class="form-control" id="InputEmail">
            </div>
            <div class="mb-3">
                <label for="MessageBox" class="form-label" >Message</label>
                <input type="Message" class="form-control py-5" id="MessageBox">
            </div>
            <button type="submit" class="btn btn-outline" id = "submit-button">Submit</button>
        </form>
        </div>
    
 </div>
  
</template>

<style scoped>

/*--headings styling--*/
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
    justify-content: space-evenly;
    padding-bottom: 50px;
}

/*---contact modes styling--*/
i{
    padding: 20px 10px 20px 10px;
    font-size: 2rem;
}

div a{
    text-decoration: none;
    color: black;
}

#contact-modes, #form-box{
    padding: 100px;
    width: 40%;
    height: 500px;
}

.col{
    text-align: center;
    padding: 30px 0px 30px 0px;

}

/*---form box styling--- fix button placements*/
#submit-button{
    background-color: rgba(202, 220, 199, 1);
}

/*---responsiveness of column components---*/
@media (max-width: 992px) {
    #main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    #contact-modes, #form-box{
    padding: 100px;
    width: 60%;
    height: 500px;
}

}

</style>
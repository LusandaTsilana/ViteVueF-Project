<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';

</script>

<template>
  <footer>
        <div id="footer-icons">
            <div>
                <a href="/contact"><i class="bi bi-linkedin"></i></a>
            </div>
            <div>
                <a href="/contact"><i class="bi bi-github"></i></a>
            </div>
        </div>
        <div id="copyright">
            <div id="paragraph1">
                <p>Ⓒ 2023 Made by Lusanda Tsilana</p>
            </div>
            <div>
                <p>All rights reserved.</p>
            </div>  
        </div>
        
    </footer>
</template>

<style scoped>
footer{
    
    background-color: rgba(202, 220, 199, 1);
}

footer i{
    font-size: 1.25rem;
    line-height: 1rem; /* 16px */
   
    
}
footer a{
    text-decoration: none;
}

i{
    margin-right: 10px;
    margin-left: 10px;
}

#footer-icons{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    
}

#copyright div{
    display: flex;
    justify-content: center;
    align-items: center;
}

#paragraph1{
    margin-bottom: 0;

}
</style>
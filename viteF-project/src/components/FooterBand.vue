
<template>
  <footer>
        <div id="footer-icons">
            <div>
                <a href="https://www.linkedin.com/in/lusanda-tsilana31" target="_blank" @click="openLink()"><i class="bi bi-linkedin"></i></a>
            </div>
            <div>
                <a href="https://github.com/LusandaTsilana" target="_blank" @click="openLink()"><i class="bi bi-github"></i></a>
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
    bottom: 0;
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
}

footer i{
    font-size: 1.25rem;
    line-height: 1rem; /* 16px */
    
}
footer a{
    text-decoration: none;
    color:black;
}

footer a:hover{
    color: rgb(43, 72, 38);
}

i{
    margin-right: 10px;
    margin-left: 10px;
    transition: transform 0.3s ease;
}
i:hover{
    transform: scale(1.1);
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

#copyright p{
    margin-bottom: 15px;
    font-size: 12px;
    

}
</style>

<script>

export default {

    methods: {
    openLink() {

    }
} 
}

</script>
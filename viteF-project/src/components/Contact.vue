

<template>
    <h1 class="display-4">Contact</h1>

    <div id="main" class="container">

        <div id="contact-modes" class="column shadow p-3 mb-5 bg-body-tertiary rounded">
            <h5>Talk to me</h5>

            <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <p><a href=""><i class="bi bi-envelope-at"></i></a>sanda.tsilana@gmail.com</p>
            </div>
            <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <p><a href="https://www.linkedin.com/in/lusanda-tsilana31" target="_blank" @click="openLink()"><i class="bi bi-linkedin"></i></a>Linkedin</p>
            </div>
            <div class="col shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <p><a href="https://github.com/LusandaTsilana" target="_blank" @click="openLink()"><i class="bi bi-github"></i></a>Github</p>
            </div>

        </div>

        <div id="form-box" class="column shadow p-3 mb-5 bg-body-tertiary rounded">
            <h5>Write me your project</h5>



            <form @submit.prevent="submitForm" method="post">
              
                <div class="mb-3">
                    <label for="InputName" class="form-label">Full Name</label>
                    <input type="name" class="form-control" id="InputName" v-model="state.fullname"/>
                    <span v-if="v$.fullname.$error">
                    {{ v$.fullname.$errors[0].$message }}</span>
                   
                </div>

                <div class="mb-3">
                    <label for="InputNumber" class="form-label">Cellphone (optional)</label>
                    <input type="cellphone" class="form-control" id="InputNumber" v-model="state.cellphone"/>
                    <span v-if="v$.cellphone.$error">
                    {{ v$.cellphone.$errors[0].$message }}</span>
                   
                </div>

              
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Email</label>
                    <input  type="text" class="form-control" id="InputEmail" v-model="state.email"/>
                    <span v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}</span>
                </div>

               
                <div class="mb-3">
                    <label for="InputMessage" class="form-label">Message</label>
                    <input  type="text" class="form-control pb-5" id="InputMessage" cols="30" rows= "10" v-model="state.messagetext"/>
                    <span v-if="v$.messagetext.$error">
                    {{ v$.messagetext.$errors[0].$message }}</span>

                </div>




                <button type="submit" class="btn btn-outline" id="submit-button">Submit</button>
            </form>
        </div>

    </div>
</template>

<style scoped>
/*--headings styling--*/
h1 {
    text-align: center;
    text-decoration: underline;
    padding-top: 50px;
    padding-bottom: 70px;
}

h5 {
    text-align: center;
    margin: 10px 0px 30px 0px;
    font-weight: bold;
}

#main {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 50px;
}

/*---contact modes styling--*/
i {
    padding: 20px 10px 20px 10px;
    font-size: 2rem;
}

div a {
    text-decoration: none;
    color: black;
}

#form-box {
    padding: 100px;
    width: 50%;
    height: 100%;
}
#contact-modes{
    padding: 100px;
    width: 30%;
    height: 100%;
}

.col {
    text-align: center;
    padding: 30px 0px 30px 0px;

}

/*---form box styling--- fix button placements*/
#submit-button {
    background-color: rgba(202, 220, 199, 1);
}

span{
    color: red;
    font-size: 13px;
}

/*---responsiveness of column components---*/
@media (max-width: 992px) {
    #main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    #contact-modes,
    #form-box {
        padding: 100px;
        width: 60%;
        
    }

}
</style>


<script>

import { useVuelidate } from '@vuelidate/core'
import { required, alpha, numeric, email, minLength, maxLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'




//import axios from 'axios'
//import VueAxios from 'vue-axios'

export default {
    setup() {



        const state = reactive ({
            fullname: '',
            cellphone: '',
            email: '',
            messagetext: '',
            
          
    
    })
        const rules = computed (() => {
            return { 
                fullname: { required, alpha },
                cellphone: { numeric },
                email: { required, email },
                messagetext: { 
                required, minLength: minLength(30), 
                maxLength: maxLength(150)},

               
                
            }
        })

        const v$ = useVuelidate(rules, state)

        return {
            state,
            v$,
        };

    },

    minLength (min) {
        return {
            $property: "messagetext",
            $validator: minLength(min),
            $message: ({ $params }) => `This field should be at least ${$params.min} long. Give brief description of your project and I will be in contact.`,
            $params: { min}

        }
    },
    maxLength (max) {
        return {
            $property: "messagetext",
            $validator: maxLength(max),
            $message: ({ $params }) => 
            `Message cannot exceed ${$params} characters`,
            $arams: {max}

        }
    },
    

    methods: {
        submitForm() {
            //axios.post("https://jsonplaceholder.typicode.com/posts", this.state);
            this.v$.$validate()

            
            .then((response) => {
                
               console.log(response)
                //will send form to server/email.js here
            })
            .catch((errors) => {
                console.error('Validation errors: ', errors);
            });
          
           
        },

        openLink() {
            //to open to new window when clicking on view for school website
        },
    }
}





</script>



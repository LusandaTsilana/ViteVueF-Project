

<template>
    <h1 class="display-4">Contact</h1>

    <div id="main" class="container">

        <div id="contact-modes" class="column shadow p-5 mb-5 bg-body-tertiary rounded">
            <h5>Talk to me</h5>

            <div class="col shadow-sm p-3 mb-5 rounded" id="cols">
                <p><i class="bi bi-envelope-at"></i>sanda.tsilana<br>@gmail.com</p>
            </div>
            <a href="https://www.linkedin.com/in/lusanda-tsilana31" target="_blank" @click="openLink()">
                <div class="col shadow-sm p-3 mb-5 rounded" id="cols">
                    <p><i class="bi bi-linkedin" id="linkedin"></i>Linkedin</p>
                </div>
            </a>

            <a href="https://github.com/LusandaTsilana" target="_blank" @click="openLink()">
                <div class="col shadow-sm p-3 mb-5 rounded" id="cols">
                    <p><i class="bi bi-github" id="github"></i>Github</p>
                </div>
            </a>

        </div>

        <div id="form-box" class="column shadow p-3 mb-5 bg-body-tertiary rounded">
            <h5>Write me your project</h5>



            <form @submit.prevent="sendForm" ref="myForm">

                <div class="mb-3">
                    <label for="InputName" class="form-label">Full Name</label>
                    <input type="name" name="fullname" class="form-control" id="InputName" v-model="state.fullname" />
                    <span v-if="v$.fullname.$error">
                        {{ v$.fullname.$errors[0].$message }}</span>

                </div>

                <div class="mb-3">
                    <label for="InputNumber" class="form-label">Cellphone (optional)</label>
                    <input type="cellphone" name="cellphone" class="form-control" id="InputNumber"
                        v-model="state.cellphone" />
                    <span v-if="v$.cellphone.$error">
                        {{ v$.cellphone.$errors[0].$message }}</span>

                </div>


                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Email</label>
                    <input type="text" name="email" class="form-control" id="InputEmail" autocomplete="email"
                        v-model="state.email" />
                    <span v-if="v$.email.$error">
                        {{ v$.email.$errors[0].$message }}</span>
                </div>


                <div class="mb-3">
                    <label for="InputMessage" class="form-label">Message</label>
                    <input type="text" name="messagetext" class="form-control pb-5" id="InputMessage" cols="30" rows="10"
                        v-model="state.messagetext" />
                    <span v-if="v$.messagetext.$error">
                        {{ v$.messagetext.$errors[0].$message }}</span>

                </div>

                <div class="mb-3">
                    <div class="g-recaptcha" id="recaptcha"></div>
                </div>



                <button :disabled="!isRecaptchaCompleted" type="submit" class="btn btn-outline shadow"
                    id="submit-button">Submit</button>
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

#cols {
    transition: transform 0.3s ease;
}

#cols:hover {
    background-color: rgba(202, 220, 199, 1);
    transform: scale(1.05);
}

#form-box {
    padding: 100px;
    width: 50%;
    height: 100%;
}

#contact-modes {
    padding: 100px;
    width: 30%;
    /*height: 100%;*/
}

.g-recaptcha {
    display: block;
    height: 100px;
    width: 100px;
}

.col {
    text-align: center;
    padding: 30px 0px 30px 0px;

}

/*---form box styling--- fix button placements*/
#submit-button {
    background-color: rgba(202, 220, 199, 1);
}

#submit-button:hover {
    background-color: rgb(155, 209, 146)
}

span {
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
        width: 70%;

    }

}
</style>


<script>

import { useVuelidate } from '@vuelidate/core'
import { required, numeric, email, minLength, maxLength } from '@vuelidate/validators'
import { reactive, computed, ref, onMounted } from 'vue'
import emailjs, { sendForm } from '@emailjs/browser';
import Swal from 'sweetalert2';

export default {

    setup() {
        const swal = Swal.mixin({
            position: 'center', // Change position to 'center'
            showCloseButton: true,
        });

        const showAlert = () => {
            swal.fire({
                icon: 'success',
                title: 'Form Submitted!',
                text: 'Thank you!',
            });
        };

        const showError = () => {
            swal.fire({
                icon: 'error',
                title: 'Form not submitted',
                text: 'Please check connection and try again later',
            });
        };

        const state = reactive({
            fullname: '',
            cellphone: '',
            email: '',
            messagetext: '',
        });

        const recaptchaSiteKey = '6LfvMBwoAAAAAHBRBl_2OCBMvgygQgeOhT-IBTjk';
        const recaptchaWidgetId = ref(null);
        const isRecaptchaCompleted = ref(false);

        onMounted(() => {
            recaptchaWidgetId.value = grecaptcha.render('recaptcha', {
                sitekey: recaptchaSiteKey,
                callback: yourCallbackFunction,
            });
        });


        function yourCallbackFunction(response) {
            if (response) {
                // reCAPTCHA was completed, set the variable to true
                isRecaptchaCompleted.value = true;
                sendForm();
            } else {
                // reCAPTCHA was not completed, set to false
                isRecaptchaCompleted.value = false;
                // disable the submit button here 
            }
        }


        const rules = computed(() => {
            return {
                fullname: { required },
                cellphone: {
                    numeric,
                    minLength: minLength(10),
                    maxLength: maxLength(10)
                },
                email: { required, email },
                messagetext: {
                    required
                },

            };
        });


        const v$ = useVuelidate(rules, state);


        return {
            state,
            v$,
            showAlert,
            showError,
            isRecaptchaCompleted,

        };
    },


    minLength(min) {
        return {
            $property: "cellphone",
            $validator: minLength(min),
            $message: ({ $params }) => `A cellphone number should have ${$params.min} digits.`,
            $params: { min }
        };
    },
    maxLength(min) {
        return {
            $property: "cellphone",
            $validator: maxLength(min),
            $message: ({ $params }) => `A cellphone number should have ${$params.min} digits.`,
            $params: { min }
        };
    },
    methods: {


        async sendForm() {
            //to validate form fields using vuelidate
            this.v$.$validate();

            if (!this.v$.$error) {
                emailjs
                    .sendForm('service_ouebe0d', 'template_6yxd1di', this.$refs.myForm, 'n3c3fJnlqx0Zw7gBF')
                    .then((response) => {
                        console.log('Email sent successfully', response);

                        //show that form submission successful below
                        this.showAlert();

                        // Reset the form if there are no validation errors
                        this.$refs.myForm.reset();

                        // You can also reset the validation state 
                        this.v$.$reset();

                        // Clear the form data to its reactive state
                        this.state.fullname = '';
                        this.state.cellphone = '';
                        this.state.email = '';
                        this.state.messagetext = '';




                    }).catch((errors) => {
                        console.error('Email sending failed', errors);
                        this.showError();

                    });
            } else {
                //display error message if recaptcha is not clicked

            };

        },
        openLink() {
            //to open to new window when clicking on view for school website
        },




    },



};





</script>



<template>
    <div class="dialog-overlay" v-if="isVisible">
        <div class="dialog-content">
            <h1>{{ showLoginForm ? 'تسجيل الدخول' : 'إنشاء حساب' }}</h1>

            <form v-if="showLoginForm" @submit.prevent="submitLoginForm">
                <label for="emailOrPhone">الايميل او رقم الهاتف</label>
                <input type="text" id="emailOrPhone" v-model="emailOrPhone" placeholder="ادخل الايميل او رقم الهاتف"
                    required />

                <label for="password">كلمة السر</label>
                <input type="password" id="password" v-model="password" placeholder="ادخل الباسورد" required />

                <button type="submit">تسجيل الدخول</button>
            </form>

            <form v-else @submit.prevent="submitSignupForm">
                <label for="username">اسم المستخدم</label>
                <input type="text" id="username" v-model="username" placeholder="ادخل اسم المستخدم" required />

                <label for="email">الايميل</label>
                <input type="text" id="email" v-model="email" placeholder="ادخل الايميل" required />

                <label for="phoneNumber">رقم الهاتف</label>
                <input type="text" id="phoneNumber" v-model="phoneNumber" placeholder="ادخل رقم الهاتف" required />

                <label for="password">كلمة السر</label>
                <input type="password" id="password" v-model="password" placeholder="ادخل كلمة السر" required />

                <button type="submit">إنشاء حساب</button>
            </form>

            <button @click="$emit('close')">Close</button>

            <span class="switch-link" @click="toggleForm">
                {{ showLoginForm ? 'ليس لديك حساب؟ سجل هنا' : 'لديك حساب بالفعل؟ سجل الدخول هنا' }}
            </span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "authComponent",
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            showLoginForm: true,
            emailOrPhone: "",
            password: "",
            email: "",
            phoneNumber: "",
            username: "",
        };
    },
    methods: {
        async submitLoginForm() {
            if (this.emailOrPhone && this.password) {
                try {
                    const response = await axios.post('https://heraj-backend.onrender.com/users/login', {
                        emailOrPhone: this.emailOrPhone,
                        password: this.password
                    });
                    localStorage.setItem('id', response.data.user._id);
                    localStorage.setItem('email', response.data.user.email);
                    localStorage.setItem('phoneNumber', response.data.user.phoneNumber);
                    localStorage.setItem('username', response.data.user.username);
                    localStorage.setItem('password', response.data.user.password);
                    // Close the dialog on successful login
                    this.$emit("close");
                    window.location.href = "/";
                } catch (error) {
                    console.error(error);
                    alert(error.response?.status === 400 ? 'خطأ في كلمة المرور او اسم المستخدم' : 'حدث خطأ أثناء تسجيل الدخول');
                }
            } else {
                alert("Please fill in all fields.");
            }
        },
        submitSignupForm() {
            if (this.username && this.email && this.phoneNumber && this.password) {
                this.$emit("signup", {
                    username: this.username,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    password: this.password,
                });

                axios.post('https://heraj-backend.onrender.com/users/register', {
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    password: this.password,
                    username: this.username
                }).then(response => {
                    localStorage.setItem('email', response.data.user.email);
                    localStorage.setItem('phoneNumber', response.data.user.phoneNumber);
                    // Close the dialog on successful signup
                    this.$emit("close");
                    window.location.href = "/";
                }).catch(error => {
                    if (error.response) {
                        if (error.response.status === 400) {
                            if (error.response.data.message === "Email or Phone number already exists") {
                                alert('الايميل او الهاتف موجودين من قبل');
                            } else {
                                alert(error.response.data.message);
                            }
                        } else {
                            alert('خطأ عند محاولة التسجيل');
                        }
                    } else {
                        alert('خطأ في الاتصال بالخادم. يرجى المحاولة مرة أخرى.');
                    }
                });
            } else {
                alert("Please fill in all fields.");
            }
        },
        toggleForm() {
            this.showLoginForm = !this.showLoginForm;
            this.clearFields();
        },
        clearFields() {
            this.emailOrPhone = "";
            this.password = "";
            this.email = "";
            this.phoneNumber = "";
            this.username = "";
        },
    },


    toggleForm() {
        this.showLoginForm = !this.showLoginForm;
        this.clearFields();
    },
    clearFields() {
        this.emailOrPhone = "";
        this.password = "";
        this.email = "";
        this.phoneNumber = "";
        this.username = "";
    },
};
</script>

<style scoped>
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog-content {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    height: fit-content;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 14px;
    margin-bottom: 5px;
}

input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button[type="submit"]:hover {
    background-color: #45a049;
}

.switch-link {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: #007BFF;
    text-align: right;
    cursor: pointer;
    text-decoration: underline;
}

.switch-link:hover {
    color: #0056b3;
}
</style>

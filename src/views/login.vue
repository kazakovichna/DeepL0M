<template>
    <div class="main">
        <form class="fullForm" action="">
            <div class="chooseDiv">
                <div class="logIn">
                    <div @click="login(true)"
                    >log in</div>
                </div>
                <div class="logIn">
                    <div @click="login(false)"
                    >sign in</div>
                </div>
            </div>
            <div class="logDiv"
                v-if="logIn === true"
            >
                <div class="inputField">
                    <input type="text" placeholder="Введите имя пользователя">
                </div>
                <div class="inputField">
                    <input type="text" placeholder="Введите пароль">
                </div>
                <div class="forgotPassword">
                    <button>Forgot Password</button>
                </div>
                <div class="logInBtn">
                    <button>Log In</button>
                </div>
            </div>
            <div class="logDiv"
                v-else
            >
                <div class="inputField">
                    <input type="text" placeholder="Введите почту">
                </div>
                <div class="inputField">
                    <input type="text" placeholder="Введите имя пользователя">
                </div>
                <div class="inputField">
                    <input type="text" placeholder="Введите введите пароль">
                </div>
                <div class="inputField">
                    <input type="text" placeholder="Повторите пароль">
                </div>
                <div class="logInBtn">
                    <button>Sign In</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        logIn: true
    }),
    methods: {
        login(login) {
            if(login === true && this.logIn !== true) {
                 this.logIn = true
            } else if(login === false && this.logIn === true) {
                this.logIn = false
            }
        }
    },
}
</script>

<style scoped>
.main {
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;   
}
.main form {
    color:black;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    margin: 0;
    padding: 1%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.fullForm {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: dimgray;
}
.chooseDiv {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.logDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.logIn {
    padding: 10px;
    margin-bottom: 5%;
    border-radius: 3px;
    background-color: white;
    font-family: sans-serif;
}
.inputField {
    width: 90%;
    margin-bottom: 2%;
}
.inputField input {
    height: 35px;
    width: 100%;
    transition: 0.1s linear;
}
.inputField input:focus {
    outline: none;
    border-color: #e0e0e0 #e0e0e0 #e0e0e0 #e0e0e0;
    background-color: black;
    color: white;
}
.inputField input:hover {
    outline: none;
    border-color: #e0e0e0 #e0e0e0 #e0e0e0 #e0e0e0;
    background-color: black;
    color: white;
    border-radius: 5px;
}
.inputField input::placeholder {
    padding-left: 5px;
}
.logInBtn button{
    background-color: white;
    outline: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.1s linear;
}
.logInBtn button:hover{
    outline: none;
    border: none;
    border-radius: 1px;
    transform: scale(1.05);

    background-color: #000000;
    color: white;
}
</style>
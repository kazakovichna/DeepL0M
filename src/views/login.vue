<template>
    <div class="main">
        <form action="">
            <div class="chooseDiv">
                <div class="logIn">
                    <h4 @click="login(true)"
                    >log in</h4>
                </div>
                <div class="signIn">
                    <h4 @click="login(false)"
                    >sign in</h4>
                </div>
            </div>
            <div class="logDiv"
                v-if="logIn === true"
            >
                Login
            </div>
            <div class="logDiv"
                v-else
            >
                SignIn
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
    display: flex;
    justify-content: center;
    align-items: center;
}
.main form {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.chooseDiv {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
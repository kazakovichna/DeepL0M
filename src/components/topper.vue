<template>
    <div class="bod">
        <div class="navigation">
            <div class="logo-area">
                <div class="logo"
                    @click="goToMain()"
                >
                    <span>LOGO</span>
                </div>
                <div class="logo-text">
                    Сервис по подбору <br>
                    пероснализированных <br>
                    мероприятий и услуг <br>
                </div>
            </div>
            <div class="navi-area">
                <div class="privite-area">
                    <div class="material-icons">
                        account_circle
                    </div>
                </div>
            </div>
        </div>
        <div class="block-content">
            <div class="block-content-item"
                v-for="category in categoryMas"
                :key="category"
            >
                <span>{{category}}</span>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    data:() => ({
       categoryMas: [
            'All',
            'Cinema',
            'Theaters',
            'Hobby',
            'Nature',
            'Sport',
            'Museum',
            'Party',
            'Lectures',
            'Tures'
        ]  
    }),
    methods: {
      goToMain() {
          if(this.$route.name != 'main') {
            this.$router.push('/')
          } 
      }  
    },
}
</script>

<style scoped>
    .bod {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .navigation {
        padding-top: 1%;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo-area {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo {
        height: 40px;
        width: 40%;
        background-color: white;
        margin-right: 7%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .logo-text {
        color: black;
        font-family: Roboto, sans-serif; 
    }
    .navi-area {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        cursor: pointer;
    }
    .block-content {
        width: 90%;
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .block-content-item {
        margin-left: 5px;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Roboto, sans-serif;
        background-color: white;
        font-size: 16px;
        font-weight: 500;
        color: black;

        cursor: pointer;
        transition: 0.1s linear;
    }
    .block-content-item span::selection {
        background: transparent;
    }
    .block-content-item:hover {
        background-color: inherit;
        height: 25%;
        font-size: 24px;
        width: 16%;
    }
</style>
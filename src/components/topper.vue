<template>
    <div class="bod">
        <div class="navigation">
            <div class="logo-area">
                <div class="logo">
                    <span>LOGO</span>
                </div>
                <div class="logo-text">
                    Сервис по подбору <br>
                    пероснализированных <br>
                    мероприятий и услуг <br>
                </div>
            </div>
            <div style="color: white;">
                <h2 style="font-famity: sans-serif;">
                Да хуй знает как это дизайнить
                </h2>
            </div>
            <div class="navi-area">
                <div class="search-area">
                    <div class="material-icons">
                        search
                    </div>
                </div>
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
    })
}
</script>

<style scoped>
    .bod {
        background-color:dimgray;
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
    }
    .logo-text {
        color: white;
        font-family: Roboto, sans-serif; 
    }
    .navi-area {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
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
    .block-content-item::selection {
        background: transparent;
    }
    .block-content-item:hover {
        height: 25%;
        font-size: 18px;
        width: 16%;
    }
</style>
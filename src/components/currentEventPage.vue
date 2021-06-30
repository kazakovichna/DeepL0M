<template>
    <div class="modalMain"
        @click.self="darkModal()"
    >
        <div class="modalForm">
            <div class="firstDiv">
                <div class="photoDiv">
                    <img class="photoTag" :src="require('../assets/MainAfter.jpg')">
                </div>
                <div class="infoButtonDiv">
                    <div class="name">
                        <div class="nameText">
                            Concert Lil Pip
                        </div>  
                    </div>
                    <div class="date">
                        <div class="dateText">
                            13 Июля 
                        </div>
                    </div>
                    <div class="time">
                        <div class="timeText">
                            18 : 00
                        </div>
                    </div>
                    <div class="buyTicker">
                        <button>Купить билет</button>
                    </div>
                    <div class="mediaContent">
                        <img class="mediaImg" :src="require('../assets/concert.jpg')">
                    </div>
                </div>
            </div>
            <div class="secDiv">
                <div class="infoDiv">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nulla nam vel consectetur perspiciatis culpa facere dolores fugit autem omnis aperiam! 
                    Accusamus facere quidem reiciendis fugiat culpa? Fugit pariatur qui ratione.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nulla nam vel consectetur perspiciatis culpa facere dolores fugit autem omnis aperiam! 
                    Accusamus facere quidem reiciendis fugiat culpa? Fugit pariatur qui ratione.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nulla nam vel consectetur perspiciatis culpa facere dolores fugit autem omnis aperiam! 
                    Accusamus facere quidem reiciendis fugiat culpa? Fugit pariatur qui ratione.
                </div>
                <div class="textDiv"
                    @click="goToOrgPage()"
                >
                    OrgName
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
 
export default {
    methods: {
        ...mapActions([
            'OPEN_MODAL'
        ]),
        darkModal() {
            this.OPEN_MODAL(null)
        },
        goToOrgPage() {
            this.darkModal()
            this.$router.push('orgPage')
        }
    }
}
</script>

<style scoped>
    .modalMain {
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
    }
    .modalForm {
        width: 60%;
        height: 80%;
        background-color: white;
        border-radius: 10px;
        z-index: 2;
    }
    .firstDiv {
        margin: 2%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 1%
    }
    .photoTag {
        border-radius: 5px 1px 1px 1px;
        box-shadow: 0 0 3px #444;
        max-width: 100%;
    }
    .infoButtonDiv {
        max-width: 100%;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .name {
        padding: 5% 5% 5% 5%;
        margin: 0 0 5% 0;
        border-bottom: black;
        border-width: 1px;
        border-style: none none solid none;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;
        font-weight: 700;
    }
    .time {
        margin-bottom: 1%;
    }
    .timeText {
        font-size: 18px;
        font-weight: 800;
    }
    .buyTicker {
        width: 70%;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .buyTicker button {
        padding: 7%;
        border-color: black black black black;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        outline: none;
        font-family: sans-serif;
        font-size: 16px;
        background-color: white;
        transition: 0.2s linear;
    }
    .buyTicker button:hover {
        background-color: black;
        color: white;
        transform: scale(1.1);
    }
    .mediaImg {
        width: 100%;
    }
    .secDiv {
        margin: 2%;
        font-family: Roboto, sans-serif;
    }
    .infoDiv {
        text-align: justify;
    }
    .textDiv {
        font-weight: 600;
        cursor: pointer;
    }
</style>
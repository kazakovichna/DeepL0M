<template>
    <div class="orgDiv">
        <div class="firstDiv">
            <div class="photoDiv">
                <img class="photo" :src="require('../assets/orgImg.jpg')" alt="">
            </div>
            <div class="infoDiv">
                <div class="nameAndEditDiv">
                    <div class="name">
                        NonProfit
                    </div>
                    <div class="material-icons">
                        edit
                    </div>
                </div>
                <div class="discr">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Et culpa inventore excepturi nobis quia, 
                    voluptatibus adipisci aperiam beatae quisquam. 
                    Delectus odio doloribus adipisci nesciunt, 
                    Consequuntur dolore possimus obcaecati architecto sint?
                </div>
                <div class="location">
                    Vladivostok Uspenskogo, 53\4
                </div>
                <div class="media-files">
                    <img class="photo" :src="require('../assets/concert.jpg')" alt="">
                </div>
            </div>
        </div>
        <div class="secondDiv">
            <div class="name">
                Мероприятия организации
            </div>
        </div>  
        <div class="eventsField">
            <div class="eventField"
                v-for="event in exampleMas"
                :key="event"
                :id="event"
                @mouseover="eventHover(event)"
                @mouseleave="eventOut(event)"
                @click="openModal(event)"
                
            >
                <img  :src="require('@/assets/MainAfter.jpg')">
                <div>M A Z A S H I B</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import FastAverageColor from 'fast-average-color';

export default {
    data: () => ({
        exampleMas:[ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
        imgMas: []
    }),
    computed: {
        ...mapGetters([
            'GET_MODAL_POS'
        ])
    },
    methods: {
        ...mapActions([
            'OPEN_MODAL'
        ]),
        openModal(id) {
            this.OPEN_MODAL(id)
        },
        eventHover(id) {
            this.imgMas[id].div.style.backgroundColor = '#000000'
            this.imgMas[id].div.style.color = this.imgMas[id].img.rgba // this.imgMas[id].img.isDark ? '#fff' : '#000'
        },
        eventOut(id) {
            this.imgMas[id].div.style.backgroundColor = '#ffffff'
            this.imgMas[id].div.style.color = '#000000'
        },
        checkColor() {
                    for (let i = 0; i < this.exampleMas.length; i++) {  
            const testObj = {
                div: {},
                img: {}
            }
            this.imgMas.push(testObj)
            
            const fac = new FastAverageColor();
            this.imgMas[i].div = document.getElementById(i);
            this.imgMas[i].img = fac.getColor(this.imgMas[i].div.querySelector('img'));
        }
        }
    },
    mounted() {
        setTimeout(this.checkColor, 1000)
    }
}
</script>

<style scoped>
    
    .orgDiv {
        border-radius: 15px;
        padding: 2%;
        width: 90%;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .firstDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
    .infoDiv {
        margin-left: 2%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-family: sans-serif;
    }
    .secondDiv {
        margin-top: 2%;
        margin-bottom: 2%;
        font-family: sans-serif;
        width: 100%;
    }
    .nameAndEditDiv {
        width: 100%;
        margin-bottom: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nameAndEditDiv .material-icons {
        cursor: pointer;
    }
    .name {
        font-size: 24px;
        text-align: left;
    }
    .discr {
        opacity: 80%;
        text-align: justify;
    }
    .location {
        width: 100%;
        font-size: 14px;
        text-align: right;
    }
    .media-files {
        margin-top: 1%;
        height: 145px;
        border-radius: 5px;
    }
    .media-files img {
        border-radius: 5px;
        height: 100%;
    }
    .photoDiv {
        width: 50%;
    }
    .photoDiv img {
        width: 100%;
        border-radius: 5px;
    }

    /* Далее идет стили списка мероприятий организации */

    .eventsField {
        width: 60%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 2vw;
    }
    .eventField {
        transition: 0.1s linear;
        background-color:white;
        color:black;
    }
    .eventField img {
        max-width: 100%;
    }
    .eventField div {
        margin: 0 0 5px 10px;
        font-family: Roboto, sans-serif;
    }
    .eventField img:hover {
        border-radius: 5px 5px 0 0;
    }
    .eventField:hover {
        transform: scale(1.2);
        border-radius: 5px;
        font-weight: 600;
    }
</style>
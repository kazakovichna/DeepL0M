<template>
    <div class="bod">
            <div class="searchField">
                <div class="filterDiv">
                    <div class="material-icons">
                        filter_list
                    </div>
                </div>
                <div class="searcgInputDiv">
                    <input class="searcgInput" type="text">
                    <div class="searchBtnDIv">
                        <div class="matrial-icons">
                            search
                        </div>
                    </div>
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
    .bod {
        background-color: #EEEEEE;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .searchField {
        margin: 1% 0 1% 0;
        width: 60%;
        display: flex;
        justify-content: center;
    }
    .searcgInputDiv {
        margin-left: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .searcgInput {
        margin-right: 1%;
    }
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

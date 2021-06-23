<template>
    <div class="bod">
        <topper />
        <router-view />
    </div>
</template>

<script>
import topper from '../components/topper.vue'

export default {
    components: {
        topper
    }
}
</script>

<style scoped>
    .bod {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
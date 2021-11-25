<template>
  <v-img :src="images.card" :class="'card ' + type" :width="size"/>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: String,
    size: String,
    type: String,
  },
  data() {
    return {
      images: {
        card: require(`../assets/${this.card}.png`)
      }
    }
  },
  mounted() {
    console.log(this.card)
  }
}
</script>

<style scoped>
.card {
  display: inline-block;
  min-width: 35px;
}

@media (max-width: 959.99px) {
  .card {
    width: 5% !important;
  }
}

.cardClickable:hover {
  transform: scale(1.2);
  transition-duration: 0.3s;
}

.cardNotClickable:hover {
  animation: shake 0.5s;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

</style>
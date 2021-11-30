<template>
  <span class="card-padding">
    <v-img :src="images.card" :class="'card ' + type" :width="size"/>
  </span>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
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
}
</script>

<style scoped>
.card {
  display: inline-block;
  min-width: 35px;
}

.card-padding {
  padding-left: 2px;
  padding-right: 2px;
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

.active-player-glow {
  box-shadow: 0 0 30px 5px #6593A6;
  background-color: rgba(101, 147, 166, 0.5);
}

</style>
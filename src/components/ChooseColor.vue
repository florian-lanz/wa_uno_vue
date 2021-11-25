<template>
  <v-card :elevation="0">
    <v-card-text v-show="chooseColor">
      <Card @click.native="setSpecialCard('blue')" card="Blue_C" :size="size" type="cardClickable"/>
      <Card @click.native="setSpecialCard('red')" card="Red_C" :size="size" type="cardClickable"/>
      <Card @click.native="setSpecialCard('yellow')" card="Yellow_C" :size="size" type="cardClickable"/>
      <Card @click.native="setSpecialCard('green')" card="Green_C" :size="size" type="cardClickable"/>
    </v-card-text>
    <v-card-text v-show="!chooseColor">
      <Card @click.native="setSpecialCard('blue')" card="Blue_D" :size="size" type="cardClickable"/>
      <Card @click.native="setSpecialCard('red')" card="Red_D" :size="size" type="cardClickable"/>
      <Card @click.native="setSpecialCard('yellow')" card="Yellow_D" :size="size" type="cardClickable"/>
      <Card @click.native="setSpecialCard('green')" card="Green_D" :size="size" type="cardClickable"/>
    </v-card-text>
  </v-card>
</template>

<script>
import GameService from "@/services/gameService";
import Card from "@/components/Card";
export default {
  name: "ChooseColor",
  components: {Card},
  data() {
    return {
      chooseColor: false,
      card: '',
    }
  },
  props: {
    size: String,
  },
  async mounted() {
    const gameJson = await GameService.getJson();
    this.card = gameJson.specialCard;
    this.chooseColor = gameJson.specialCard === 'S C';
  },
  methods: {
    async setSpecialCard(color) {
      await GameService.setSpecialCard(this.card, color);
      this.$parent.loadGame();
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        v-for="times in cardList"
        :key="times.id"
        cols="6"
        sm="6"
        md="4"
      >
        <YourCard :times="times" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import YourCard from '@/components/YourCard'

  export default {
    name: 'YourTeam',
    components: {
      YourCard
    },
    computed: {
      cardList() {
        return this.$store.getters.allCards
      }
    },
    created(){
    if(this.$store.getters.allCards === null)
      this.$store.dispatch("fetchPlayers");
  }
  }
</script>
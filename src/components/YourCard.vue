<template>
  <v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{times.title}}
        </v-list-item-title>
        <v-list-item-subtitle>{{times.subtitle}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="150"
        color="grey"
        
      ><v-img :src="times.img"></v-img></v-list-item-avatar>
      
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Player Data
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default{
  props: ['times']
}
</script>
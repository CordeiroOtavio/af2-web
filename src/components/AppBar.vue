<template>
        <v-app-bar app     
      color="blue accent-6"
      height="57"
      dense
      dark
      flat
      >
      
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>PLAYER'S PROFILE - SOCCER </v-toolbar-title>
 <v-spacer></v-spacer>

      <v-toolbar-items
        v-for="component in items"
        :key="component.title"
      >
        <v-btn 
          :to="component.route"
          link
          icon
        >
          <v-icon>{{component.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home', route: '/' },
          { title: 'Your Team', icon: 'mdi-soccer', route: '/yourteam' },
          { title: 'Table', icon: 'mdi-table',route: '/table' },
          { title: 'About', icon: 'mdi-information',route: '/about' },
        ],
        right: null,
      }
    },
  }
</script>
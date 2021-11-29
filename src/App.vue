<template>
  <v-app id="inspire">
    <v-system-bar color="primary" dark>
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>18:30</span>
    </v-system-bar>

  <AppBar></AppBar>

    <v-navigation-drawer v-model="drawer" class = "blue accent-8" app>
      <v-list v-model="user">
        <v-list-item class="px-15">
          <v-list-item-avatar size="150">
            <v-img :src="user.picture"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ user.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

  <Footer></Footer>

  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar"
import Footer from "@/components/Footer"
export default {
  components:{
    AppBar,
    Footer,
  },
  data: () => ({
    drawer: null,
    user: {
      name: "Mário Sérgio(Marinho)",
      email: "marinho@santosfc.com",
      picture: "marinho2.jpg",
    },
    items: [
      {
        title: "Home",
        icon: "home",
        path: "/",
      },
      {
        title: "Your Team",
        icon: "soccer",
        path: "/yourteam",
      },
            {
        title: "Table",
        icon: "table",
        path: "/Table",
      },
                  {
        title: "About",
        icon: "information",
        path: "/about",
      },
    ],
  }),
};
</script>
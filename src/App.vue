<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-avatar tile color="blue">
              {{`${$faker().company.companyName().split(' ')[0][0].toUpperCase()}`}}
            </v-avatar>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{$faker().company.companyName()}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
              dense
              nav
      >
        <v-list-item
                v-for="item in navigationItems"
                :key="item.title"
                link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.path">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="goHome()">Human Lambdas</v-toolbar-title>
    </v-app-bar>

    <v-content class="grey lighten-4">

      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        data: () => ({
            navigationItems: [
                {title: 'Form Builder', icon: 'mdi-format-list-bulleted-type', path: '/form-builder'},
                {title: 'Photos', icon: 'mdi-image', path: '/photos'},
                {title: 'About', icon: 'mdi-help-box', path: '/about'},
            ],
            drawer: false,
        }),

        methods: {
            goHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<template>
    <v-navigation-drawer 
                         app 
      v-model="drawer"
    
class="primary"
    >

    <v-list>
      <v-list-item>
        <v-icon >$vuetify.icons.custom</v-icon>
      </v-list-item>
    </v-list>
    <v-divider class="mx-4"></v-divider>
     <v-list link>
      <template v-for="(item, index) in items">

        <v-divider
          v-if="item.divider"
          :key="index"
        ></v-divider>

        <v-list-item link
          v-else
          :key="item.title"
        >

          <v-list-item-content>
            <v-list-item-title class="nav" v-html="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </v-navigation-drawer>
  
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Искать деталь', icon: 'mdi-home-city' },
           { divider: true, inset: true },
          { title: 'Мои запросы', icon: 'mdi-account' },
           { divider: true, inset: true },
          { title: 'Архив запросов', icon: 'mdi-account-group-outline' },
           { divider: true, inset: true },
           { title: 'Настройки', icon: 'mdi-home-city' },
            { divider: true, inset: true },
          { title: 'Правила сервиса', icon: 'mdi-account' },
           { divider: true, inset: true },
          { title: 'Техподдержка', icon: 'mdi-account-group-outline' },
          { divider: true, inset: true },
           
        ],
        mini: false,
      }
    },
  }
</script>

<style scoped>
.nav{
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

letter-spacing: 0.05em;
text-transform: uppercase;

/* Light gray */

color: #888888;
}
/* .navigation-width {
  width: 0px;
} */
/* @media (max-width: 600px) {
  .container {

  } */
</style>

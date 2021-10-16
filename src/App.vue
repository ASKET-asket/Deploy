<template>
  <v-app>
    <v-app-bar app color="#F9F9F9" dark>
       <div class = "itemcenter">
       
          <v-text-field
            @click:append="() => {}"
            prepend-icon="mdi-magnify"
            placeholder="Найти деталь"
            single-line
            rounded
            left
            class="second"
            
            color="secondary lighten-4"
            hide-details
          ></v-text-field>
       </div>
<div model="butt" class="itemright ">
      <template v-if="width >=  600">
<v-btn
 class="primary button" 
 outlined
 max-width="120px"
>Vladimir S.</v-btn>
<v-btn 
 class="primary button" 
    max-width="80px"
  underline
  
>Выйти</v-btn>
 </template>

</div>
      </v-app-bar>
        <v-main>
         
          <Navigation/>
          <Title/>
          <Form/>
        </v-main>
    </v-app>
</template>

<script>

import Navigation from './components/Navigation.vue';
import Title from './components/Title.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',

  components: {
    Navigation, Title,Form,
  },

 data () {
      return {
        drawer: false,
        width: window.innerWidth,
      }
  },
  methods: {
                updateWidth() {
                   this.width = window.innerWidth
                  console.log("Ширина 1:" + this.width);
                },
  },
      created() {
          if(this.width == 0){ this.width = 600}
            window.addEventListener('resize', this.updateWidth);
          
           console.log("Ширина 2:" + this.width);
},
};
</script>

<style scoped>
    
    body {
      margin: 0;
    }
    * {
        box-sizing: border-box;
    }

    .itemcenter {
      position: center;
      margin-left: auto;
      margin-right: auto;
      width: 300px;
    }

    .itemright {
      margin-left: auto;
      display:block;
    }
    
    .search_button {
      max-width: 431px;
    }

    @media (width: 600){
    .v-btn {
       display: none;
    }
}
  
</style>

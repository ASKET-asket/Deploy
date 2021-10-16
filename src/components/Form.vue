<template>
  <v-card color='#F5F9FA'
  class="container "
    max-width="600px" >
    <v-list-item three-line>
      <v-list-item-content>
        

<template v-if="visible_car">
          <div class="but select  mb-4 text-center">
         <v-select
          v-model="model_maker" :items="items_maker" no-data-text="Нет данных"
          v-on:change="search_model"
          required 
       
          hide-details hide-selected :rules="rules_text"
          item-value='id'
         
           dense filled rounded solo placeholder="Марка">
          <template v-slot:item="{item}">
                    <div style="display: flex;align-items: center">
                      <v-img v-if="item.id>0" :src="item.logo" class="mr-1" height="18px" width="25px"></v-img>
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
                  <template v-slot:selection="{item}">
                    <div style="display: flex;align-items: center">
                      <v-img v-if="item.id>0" :src="item.logo" class="mr-1" height="18px" width="25px"></v-img>
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
          </v-select>


         </div>
          <div class="but select  mb-4 text-center">
         <v-select   v-model="model_model" :items="items_model" no-data-text="Нет данных"
         v-on:change="search_generation" :rules="rules_text"
         required
        hide-details hide-selected 
         item-value='id'
        
        dense filled rounded solo placeholder="Модель"
        :menu-props="{ bottom: true, offsetY: true }">
            <template v-slot:item="{item}">
                    <div style="display: flex;align-items: center">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
                  <template v-slot:selection="{item}">
                    <div style="display: flex;align-items: center">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
        </v-select>

          </div>
                   
                    
                 <div class="but select  mb-4 text-center">    
         <v-select  v-model="model_generation" :items="items_generation" no-data-text="Нет данных"
         :search-input.sync="search_generation" :rules="rules_text" required
        hide-details hide-selected  
        item-value='id'
       
         dense filled rounded solo placeholder="Поколение"
        :menu-props="{ bottom: true, offsetY: true }">
        <template v-slot:item="{item}">
                    <div style="display: flex;align-items: center">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
                  <template v-slot:selection="{item}">
                    <div style="display: flex;align-items: center">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
                  </v-select>
                 </div>  
               
    
</template>
<template v-else>
    <div class="but select  mb-4 text-center">
        <v-select  v-model="model_save_car" :items="items_save_car" no-data-text="Нет данных"
         :search-input.sync="search_generation" :rules="rules_text" required
        hide-details hide-selected 
        item-text="name" item-value='id'
        
        dense filled rounded solo placeholder="Сохраненный автомобиль"
        :menu-props="{ bottom: true, offsetY: true }">
         <template v-slot:item="{item}">
                    <div style="display: flex;align-items: center">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
                  <template v-slot:selection="{item}">
                    <div style="display: flex;align-items: center">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
        </v-select>
      </div>  
</template>


         <v-btn class="save_car" v-on:click="visible_car=!visible_car" text>{{visible_car?'Выбрать сохраненный автомобиль':'Выбрать другой автомобиль'}}
         </v-btn>
             
             <div class="but select  mb-4 text-center">
         <v-select v-model="model_worktype_subworktype" :items="worktype_subworktype" no-data-text="Нет данных"
                dense filled rounded solo placeholder="Название детали"
                :rules="rules_text"
                hide-details hide-selected  
                :menu-props="{ bottom: true, offsetY: true }"
                >
         <template v-slot:item="{item}">
                    <div style="display: flex;align-items: center">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
                  <template v-slot:selection="{item}">
                    <div style="display: flex;align-items: center">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
        </v-select>   
                </div>
                
             
               <template v-if="number">
                <v-text-field  id="model_number_or_vin" :rules="rules_text"
                hide-details hide-selected  
                class="but select  mb-4 text-center"
      v-model="model_number_or_vin"
      name="model_number_or_vin" 
            @click:append="() => {}"
            
           placeholder ="Номер детали"
           dense filled rounded solo
          ></v-text-field>
          </template>
          <template v-else>
             <v-text-field
            @click:append="() => {}" :rules="rules_text"
            id="model_number_or_vin"
      v-model="model_number_or_vin"
      name="model_number_or_vin" 
           placeholder ="VIN"
           dense filled rounded solo
          ></v-text-field>
            </template>
            
                 <div class="but select  mb-4 text-center">
            <v-btn  class="save_car" v-on:click="number=!number" text>{{number?'У меня нет номера детали':'У меня есть номер детали'}}</v-btn>   
                 </div>
             <div class="but select  mb-4 text-center">
              <v-row
    align="center"
    justify="space-around"
  >
<div class= "max_class">
    <v-btn  rounded :color="changeBackgroundColorAll ? '#42B8FF' : '#FFFFFF'"
               @click="changeBackgroundColorAll = !changeBackgroundColorAll,
                changeBackgroundColorBY = changeBackgroundColorAll,
                changeBackgroundColorNew = changeBackgroundColorAll">
      Все
    </v-btn>
    </div>
    <div class= "max_class">
    <v-btn rounded :color="changeBackgroundColorBY ? '#42B8FF' : '#FFFFFF'"
               @click="changeBackgroundColorBY = !changeBackgroundColorBY,
               changeBackgroundColorAll = changeBackgroundColorBY && changeBackgroundColorNew">
     Б/У
    </v-btn>
     </div>
    <div class= "max_class">
    <v-btn rounded  :color="changeBackgroundColorNew ? '#42B8FF' : '#FFFFFF'"
               @click="changeBackgroundColorNew = !changeBackgroundColorNew,
               changeBackgroundColorAll = changeBackgroundColorBY && changeBackgroundColorNew">
      Новые
    </v-btn>
     </div>
  </v-row>
  </div>
             <div class="but select  mb-5 text-center max_class">
            <v-btn  rounded @click="search" >
               ОТПРАВИТЬ ЗАПРОС ПОСТАВЩИКАМ
            </v-btn>
    </div>
           
           
      </v-list-item-content>

    </v-list-item>


  </v-card>

</template>

<script>
// import axios from 'axios';


export default {
   data: () => ({
      items_maker: [],
      items_model: [],
      items_generation: [],
      car_saved: [],
      worktype_subworktype: [],
     
      model_maker: null,
      model_model: null,
      model_generation: null,
      model_save_car: null,
      model_worktype_subworktype: null,
      model_number_or_vin: null,
      rules_text: [(v) => !!v || "Заполните поле!"],

      errors: [],
     
       changeBackgroundColorAll: false,
        changeBackgroundColorBY: true,
         changeBackgroundColorNew: false,

         visible_car: true,
         visible_detail: true,
         number: true,
      
    }),
    mounted () {
        
        fetch('http://195.69.187.126:8085/api/v1/car/maker')
          .then(res => res.clone().json())
         .then(res => {
            this.items_maker = res
            
          })
          .catch(err => {
            console.log(err)
          })

          fetch('http://195.69.187.126:8085/api/v1/profile/car/saved')
          .then(res => res.clone().json())
         .then(res => {
            this.car_saved = res
            
          })
          .catch(err => {
            console.log(err)
          })

          fetch('http://195.69.187.126:8085/api/v1/worktype/subworktype')
          .then(res => res.clone().json())
         .then(res => {
            this.worktype_subworktype = res
            
          })
          .catch(err => {
            console.log(err)
          })
          
      

   
    },
   
    methods: {
   search_model(a) {

      this.items_generation = [];
              fetch('http://195.69.187.126:8085/api/v1/car/model?car_maker='+a)
          .then(res => res.clone().json())
         .then(res => {
            this.items_model = res
          })
          .catch(err => {
            console.log(err )
          })
        
      },
      search_generation(a) {
        this.items_generation = [];
            fetch('http://195.69.187.126:8085/api/v1/car/generation?car_model='+a)
          .then(res => res.clone().json())
         .then(res => {
            this.items_generation = res
          })
          .catch(err => {
            console.log(err )
          })
      },
     search() {
       this.$refs["form"].validate()
     
      
},
    }
  }
</script>


<style scoped>
body {
      margin: 0;
    }
    * {
        box-sizing: border-box;
    }
    .max_class {
      width: 174px;
      height: 64px;
    }
    .send_class {
         width: 174px;
         height: 64px;
    }

.v-btn {
  width: 100%;
  min-width: 174px;
  min-height: 64px;
}

@media (max-width: 600) {
    .max_class {
       width: 110px;
        
        height: 44px;
       
    }
}
 .container {
   max-width: 600px;
  width: 100%; 
  margin: 15px auto;
  padding: 0px 15px; 
} 

.select {
  /* width: 100%; */
  display: flex;
  justify-content: center;
}
.save_car {
  width: 100%;

}
  .but{
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;

color: #888888;
  }

  .by{
    background: #42B8FF;
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
border-radius: 8px;


  }

  .by-word {
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;
/* identical to box height */

text-align: center;

/* white */

color: #FFFFFF;
  }

  .nomer {
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;
/* identical to box height */

text-decoration-line: underline;

color: #004FC6;
  }
  </style>
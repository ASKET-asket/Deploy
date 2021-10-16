<template>
  <v-card
    class="container"
    color='#F5F9FA'
    max-width="600px"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4 text-center">Искать деталь</div>

        <div class="images_container">
            <div class="info_images">
                <template v-if="width >= 600">
                  <v-img  max-height="95" max-width="130" src="../img/Circle_1.png" class="image_center" >
                      <v-img max-height="28" max-width="42" src="../img/Telegram.png" class="image_icon"></v-img>
                  </v-img>
                  </template>
                
                <template v-else>
                  <v-img max-height="28" max-width="42" src="../img/Telegram.png" class="image_icon"></v-img>
                </template>
                <div class="mb-4 images_container_mob"><p>Отправьте заявку поставщикам</p></div>
              </div>

          <template v-if="width >= 600">
                    <div class="info_array">
                              <v-img max-height="31" max-width="27" src="../img/Arrow.png"  class="image_icon"></v-img>
                    </div>
          </template>
            
            <template v-else>
            <v-img max-height="31" max-width="14" src="../img/Arrow.png"  class="image_icon"></v-img>
            </template>
          <div class=" info_images">
            <template v-if="width >=  600">
            <v-img  max-height="95" max-width="128" src="../img/Circle_2.png" class="image_center">
                <v-img max-height="42" max-width="34" src="../img/Settings.png" class="image_icon"></v-img>
            </v-img>
            </template>
            <template v-else>
                    <v-img max-height="42" max-width="34" src="../img/Settings.png" class="image_icon"></v-img>
            </template>
            <div class=" mb-4 images_container_mob"><p>Получите представления от поставщиков</p></div>
          </div>

          <template v-if="width >= 600">
          <div class="info_array">
                    <v-img max-height="31" max-width="27" src="../img/Arrow.png"  class="image_icon"></v-img>
          </div>
</template>
            
            <template v-else>
            <v-img max-height="31" max-width="14" src="../img/Arrow.png"  class="image_icon"></v-img>
            </template>

          <div class="info_images">
            <template v-if="width >=  600">
            <v-img  max-height="95" max-width="126" src="../img/Circle_3.png" class="image_center">
                <v-img max-height="37" max-width="43" src="../img/Message.png" class="image_icon"></v-img>
            </v-img>
            </template>
            <template v-else>
                <v-img max-height="37" max-width="43" src="../img/Message.png" class="image_icon"></v-img>
            </template>
            <div class=" mb-4 images_container_mob"><p>Выбирете поставщика и свяжитесь с ним</p></div>
          </div>
         </div>
            
      </v-list-item-content>

    </v-list-item>

    
  </v-card>
  
</template>

<style >
p {
  text-align: center;
    font-weight: 600;
    margin-bottom: 16px;
}
v-card {
  padding: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: PT Sans Regular,sans-serif;
    color: #212b36;
    display: flex;
    flex-direction: column;
    overflow: hidden!important;
    border: 1px solid #cedadd;
    border-radius: 8px;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 15%);
    width: 100%;
    height: 341px;
}
img {
    border-style: none;
    display: flex;
    align-items: center;
    margin:auto;
}
@media (max-width: 600){
    .p {
        font-size: 14px;
    }
}
.container {
  max-width: 600px;
  margin: 0px auto;
  padding: 0px 15px;
background-size: cover;
}

/* @media (max-width: 600px) {
  .container {

  }
} */
.images_container {
  width: 100%;
  max-width: 600px;
  display: flex;
  position: relative;
}
.images_container_mob {

    font-weight: 600;
    text-align: center;
    height: 100%;
}
  .image_center {
    display: flex;
    align-items: center;
    margin:auto;
    
  }
  .image_icon {
    margin:auto; display: flex;
  }

  .info_images {
    height: 100%;
    display: inline-block;
    position: relative;
    
    flex-direction: column;
    width: 30%;
  }
  .info_array {
 margin-top: 30px;
    display: inline-block;
 
    
  }
  
  
</style>

<script>


export default {
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

      
}
</script>

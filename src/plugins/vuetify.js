import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import CustomIcon from '@/components/CustomIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
   theme: {
    themes: {
      light: {
        primary:  '#1C283E',
        second: '#E5ECEE',
        main_color: '#F5F9FA',
      },
    },
  },
  icons: {
    values: {
      custom: { // name of our custom icon
        component: CustomIcon, // our custom component
      },
    },
  },
  iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
})

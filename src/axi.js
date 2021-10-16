import axios from 'axios';

export default {
    el: '#app',
   data() {
    return {
      info: null
    };
  },
  mounted() {
      for(var i=0;i<10;i++){
          axios
      .get('http://195.69.187.126:8085/api/v1/car/maker?format=json')
      .then(response => (this.info = response.data));
      }
    axios
      .get('http://195.69.187.126:8085/api/v1/car/maker?format=json')
      .then(response => (this.info = response.data));
  },
  };
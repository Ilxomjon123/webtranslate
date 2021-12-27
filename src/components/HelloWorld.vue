<template>
  <b-container class="justify-content-center my-5 text-white">
    <b-row>
      <div
        class="btn-group mb-3"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <select class="btn btn-outline-secondary">
          <option value="uz">Uzbek</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
        <button class="btn-secondary">
          <i class="bi bi-arrow-left-right" />
        </button>
        <select class="btn btn-outline-secondary">
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
          <option value="ru">Russian</option>
        </select>
      </div>

      <b-col md="6" class="text-center text-md-start mb-3">
        <!-- <p class="text-start m-0">Maksimum belgilar soni: 5000</p> -->
        <textarea
          autofocus
          v-model="msg"
          @input="translate"
          class="form-control custom-textarea"
          rows="10"
          maxlength="5000"
        ></textarea>
        <p class="text-end">{{ msg.length }}/5000</p>
        <b-button class="px-5" variant="secondary" @click="clear"
          >Clear</b-button
        >
      </b-col>
      <b-col md="6" class="text-center text-md-end mb-3">
        <!-- <p class="text-start m-0">Natija</p> -->
        <textarea
          class="form-control custom-textarea"
          rows="10"
          readonly
          :value="translated"
          id="editor"
        ></textarea>
        <p></p>
        <br />
        <b-button-group class="float-start">
          <b-button><i class="bi bi-hand-thumbs-up-fill" /></b-button>
          <b-button
            ><i class="bi bi-hand-thumbs-up-fill rotate-180"
          /></b-button>
        </b-button-group>
        <b-button class="px-5" variant="secondary" @click="copy">Copy</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { toCryllic, toLatin } from "../services/convert";
import axios from 'axios'
export default {
  data() {
    return {
      msg: "",
      isLatin: true,
      translated: "",
    };
  },
  methods: {
    copy() {
      var copyText = document.getElementById("editor");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
    },
    clear() {
      this.msg = "";
      this.translated = "";
    },
    translate() {
      try{
        const vm = this;
        axios.get('http://127.0.0.1:8000/api/', {
          params:{
            'text': this.msg,
            'from_lang': 3,
            'to_lang': 2
          },
          headers:{
            'Content-Type': 'application/json',
          }
        }).then(data => {
          vm.translated = data.data.result;
        });
      } catch (e){
        console.log(e);
      }
      // return !this.isLatin ? toLatin(this.msg) : toCryllic(this.msg);
    },
  },
  computed: {
    
  },
};
</script>

<style scoped>
.custom-textarea,
.custom-textarea:focus {
  background: rgb(37, 36, 39);
  border: none;
  color: white;
  font: bold;
}
.custom-textarea:read-only {
  background: rgb(58, 57, 61);
}
select.btn {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: white;
  font-size: x-large;
}

.rotate-180 {
  filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=0.5);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  display: inline-block;
}
</style>

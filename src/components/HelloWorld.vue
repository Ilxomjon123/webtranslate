<template>
  <b-container class="justify-content-center my-5 text-white">
    <b-row>
      <div
        class="btn-group mb-3"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <select class="form-select bg-custom" v-model="from_lang">
          <option
            v-for="(item, index) in langs"
            :key="index"
            :value="item.value"
          >{{ item.text }}</option>
        </select>
        <button class="btn" @click="swapLang">
          <i class="bi bi-arrow-left-right" />
        </button>
        <select class="form-select bg-custom" v-model="to_lang">
          <option
            v-for="(item, index) in langs"
            :key="index"
            :value="item.value"
          >{{ item.text }}</option>
        </select>
      </div>

      <b-col md="6" class="text-center text-md-end mb-3">
        <!-- <p class="text-start m-0">Maksimum belgilar soni: 5000</p> -->
        <textarea
          autofocus
          v-model="msg"
          @input="translate"
          class="form-control"
          rows="10"
          maxlength="5000"
        ></textarea>
        <p class="text-end text-dark">{{ msg.length }}/5000</p>
          <b-button class="px-5 text-white btn-custom mr-auto float-start" variant="warning" @click="clear">Clear</b-button>
          <b-button class="text-white btn-custom" variant="warning"><i class="bi bi-mic-fill"></i></b-button>
      </b-col>
      <b-col md="6" class="text-center text-md-end mb-3">
        <!-- <p class="text-start m-0">Natija</p> -->
        <textarea
          class="form-control"
          rows="10"
          readonly
          :value="translated"
          id="editor"
        ></textarea>
        <p></p>
        <br />
        <b-button-group class="float-start">
          <b-button variant="warning" class="text-white btn-custom">
            <i class="bi bi-hand-thumbs-up-fill" />
          </b-button>
          <b-button variant="warning" class="text-white btn-custom" id="dislike-button">
            <i class="bi bi-hand-thumbs-up-fill rotate-180" />
          </b-button>
        </b-button-group>
        <b-popover target="dislike-button" triggers="click" placement="bottom">
          <template #title>
            <b>Thanks for feedback</b>
            <br />You can suggest a translation
          </template>
          <form @submit.prevent="dislikeSubmit">
            <b-form-textarea v-model="suggestion" />
            <div>
              <b-button
                type="submit"
                class="w-100 mt-3 btn-custom"
              >Submit</b-button>
              <b-button class="mt-3 w-100" @click="closePopover">Cancel</b-button>
            </div>
          </form>
        </b-popover>
        <b-button class="px-5 text-white btn-custom" variant="warning" @click="copy">Copy</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "",
      isLatin: true,
      translated: "",
      from_lang: 1,
      to_lang: 2,
      showDislikePopover: false,
      suggestion: "",
      langs: [
        {
          value: 1,
          text: "Uzbek",
        },
        {
          value: 2,
          text: "Russian",
        },
        {
          value: 3,
          text: "English",
        },
      ],
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
      document.execCommand('copy');
    },
    swapLang() {
      const temp = this.to_lang;
      this.to_lang = this.from_lang;
      this.from_lang = temp;
    },
    clear() {
      this.msg = "";
      this.translated = "";
    },
    translate() {
      try {
        const vm = this;
        axios
          .get("http://translater.uz:9000/api/", {
            params: {
              text: this.msg,
              from_lang: this.from_lang,
              to_lang: this.to_lang,
            },
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((data) => {
            vm.translated = data.data.result;
          });
      } catch (e) {
        console.log(e);
      }
      // return !this.isLatin ? toLatin(this.msg) : toCryllic(this.msg);
    },
    dislikeSubmit() {
      this.suggestion = '';
      this.closePopover()
    },
    closePopover() {
      document.getElementById('dislike-button').click();
    }
  },
  watch: {
    from_lang(to, from) {
      if (this.to_lang == to) {
        this.to_lang = from;
      }
    },
    to_lang(to, from) {
      if (this.from_lang == to) {
        this.from_lang = from;
      }
    },
  },
  computed: {},
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
.custom-textar .custom-textarea,
.custom-textarea:focus {
  background: rgb(37, 36, 39);
  border: none;
  color: white;
  font: bold;
}
.custom-textarea:read-only {
  background: rgb(58, 57, 61);
}

select {
  border: none;
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
.btn-custom{
  background-color: #00b8ad;
  border-color: #00b8ad;
}
.bg-custom{
  background-color: #e4ecf0;
  border-color: #e4ecf0;
  color: #202525;
}
</style>
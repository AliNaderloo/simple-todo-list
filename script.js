// Define a new component called todo-item
Vue.component('todo-item', {
  template: "<li v-on:click='toggleClass'  v-bind:class=" + '"' + "{ 'strike': toggled }" + '"' + ">{{itemData.text}}</li>",
  props: ['itemData'],
  data: function() {
    return {
      toggled: false,
    }
  },
  methods: {
    toggleClass: function() {
      this.toggled = !this.toggled;
    }
  }
})
// Define Main Vue Model
var vue = new Vue({
  el: "#app",
  data: {
    title: "My To-dos",
    items: [{
        text: "Learn Vuejs"
      },
      {
        text: "Learn NodeJs"
      },
      {
        text: "Learn MongoDB"
      },
      {
        text:"Learn Js first"
      }
    ],
    inputVal: ""
  },
  methods: {
    submit: function() {
      this.items.push({
        text: this.inputVal
      })
    }
  }
})

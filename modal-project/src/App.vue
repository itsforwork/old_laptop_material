<template>
  <h1>{{ title }}</h1>
  <!-- use of template ref -->
  <!-- <input type="text" ref="name" /> -->
  <!-- <button @click="handleMe">Click Me</button> -->
  <h4>Welcome to the modals...</h4>
  <div v-if="showModal">
    <!-- this is how we pass using props -->
    <!-- <Modal :header="header" :text="text" :theme="theme" @close="toggleModal" /> -->
    <!-- this is how we pass using slots -->
    <Modal :theme="theme" @close="toggleModal" >
      <!-- name specific slot  -->
      <template v-slot:links>
       <a href="#">Sign up now! </a>
       <a href="#">more info</a>
      </template>
      <!-- by default slot -->
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
    </div>
    <!-- Reuse the same- 'modal component' by just changing props and content -->
    <div v-if="showModal2">
    <Modal @close="toggleModal2" >
      <h1>Sign Up!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
    </div>
    <!-- new close -->
  <button @click ="toggleModal">Open Modal</button> <br>
  <button @click ="toggleModal2">Open Modal2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "app",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      // header: "this is header",
      // // text: "this is text",
      theme: "sale",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    handleMe() {
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
</style>

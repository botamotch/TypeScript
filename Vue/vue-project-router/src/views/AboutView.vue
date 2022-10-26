<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ message }}</p>
    <button @click="increment">Count is: {{ count }}</button>
    <p> {{ name }}  has published books : {{ publishedBooksMessage }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message: "hello",
      count: 0,
      name: 'Jone Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    }
  },
  methods: {
    increment() {
      this.count++;
      if (this.message == 'hello') {
        this.message = 'goodbye'
      } else {
        this.message = 'hello'
      }
    }
  },
  computed: {
    publishedBooksMessage() {
      return this.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

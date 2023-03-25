<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({required: true,
    default: () => ''
  }) msg!: string;

  name = 'kevin'
}
</script>

<template>
  {{ name }}
  <input type="text" v-model="name">
  <div class="greetings">
    <h1 class="greetings--green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped lang="scss">
.greetings {
  &--green {
    color: red;
  }

  & h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  & h3 {
    font-size: 1.2rem;
  }
}


.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

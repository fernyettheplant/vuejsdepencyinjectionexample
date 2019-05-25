<template>
  <div>
    <h1>Kanye West Quotes</h1>
    <p>Quote: {{ quote }}</p>
    <button @click="getQuote">Get a quote!</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private quote: string = ''

  private getQuote (): Promise<void> {
    console.log('Click!')

    return Promise.resolve()
  }
}
</script>

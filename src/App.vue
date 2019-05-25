<template>
  <div>
    <h1>Kanye West Quotes</h1>
    <p>Quote: {{ quote }}</p>
    <button @click="getQuote">Get a quote!</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class App extends Vue {
  @Getter
  private quote!: string

  @Action
  private fetchKanyeQuote!: () => Promise<void>

  protected async mounted (): Promise<void> {
    await this.getQuote()
  }

  private async getQuote (): Promise<void> {
    await this.fetchKanyeQuote()
  }
}
</script>

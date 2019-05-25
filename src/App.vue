<template>
  <div>
    <h1>Kanye West Quotes</h1>
    <p>Quote: {{ quote }}</p>
    <button @click="getQuote">Get a quote!</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Inject } from 'inversify-props'
import IKanyeWestService from '@/services/IKanyeWestService'

@Component
export default class App extends Vue {
  @Inject()
  private kanyeWestService!: IKanyeWestService

  private quote: string = ''

  protected async mounted (): Promise<void> {
    await this.getQuote()
  }

  private async getQuote (): Promise<void> {
    const kanyeQuote = await this.kanyeWestService.getQuote()
    this.quote = kanyeQuote.quote
  }
}
</script>

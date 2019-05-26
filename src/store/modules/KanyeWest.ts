import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Inject } from 'inversify-props'
import KanyeQuote from '@/models/KanyeQuote'
import IKanyeWestService from '@/services/IKanyeWestService'

@Module
export default class KanyeWest extends VuexModule {
  @Inject()
  private kanyeWestService!: IKanyeWestService

  public kanyeQuote: KanyeQuote | null = null

  @Action
  public async fetchKanyeQuote (): Promise<void> {
    try {
      const kanyeQuote = await this.kanyeWestService.getQuote()
      this.context.commit('setKanyeQuote', kanyeQuote)
    } catch (error) {
      console.error(error)
    }
  }

  @Mutation
  public setKanyeQuote (newKanyeQuote: KanyeQuote): void {
    this.kanyeQuote = newKanyeQuote
  }

  get quote (): string {
    return this.kanyeQuote !== null ? this.kanyeQuote.quote : ''
  }
}

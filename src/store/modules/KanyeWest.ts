import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import KanyeQuote from '@/models/KanyeQuote'

@Module
export default class KanyeWest extends VuexModule {
  public kanyeQuote: KanyeQuote | null = null

  @Action
  public async fetchKanyeQuote (): Promise<boolean> {
    // TODO: Inject an Use Quote Service
    return Promise.resolve(true)
  }

  @Mutation
  public setKanyeQuote (newKanyeQuote: KanyeQuote): void {
    this.kanyeQuote = newKanyeQuote
  }
}

import axios from 'axios'
import { injectable } from 'inversify-props'
import IKanyeWestService from '@/services/IKanyeWestService'
import KanyeQuote from '@/models/KanyeQuote'

@injectable()
export default class KanyeWestService implements IKanyeWestService {
  private readonly API_URL: string = 'https://api.kanye.rest/'

  public async getQuote (): Promise<KanyeQuote> {
    const httpResponse = await axios.get<KanyeQuote>(this.API_URL)

    return httpResponse.data
  }
}

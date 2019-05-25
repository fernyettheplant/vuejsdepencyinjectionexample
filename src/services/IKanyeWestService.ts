import KanyeQuote from '@/models/KanyeQuote'

export default interface IKanyeWestService {
  getQuote(): Promise<KanyeQuote>
}

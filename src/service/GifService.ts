import { GifsDTO } from '../data-transports/GifsDTO'
import { GifClass } from '../models/GifClass'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif } from '@giphy/react-components'
import { urlToHttpOptions } from 'url'

const Gifapi = new GiphyFetch(import.meta.env.VITE_UNSPLASH_ACCESS_KEY) 


export class GifService {
  async findGifs(
    query: string,
    page: number,
    perPage: number
  ): Promise<GifsDTO> {
    let gifsDTO: GifsDTO = {
      gifs: [],
      totalPages: 0,
    }

    if (query) {
      const result = await Gifapi.search(query)
      
      console.log(result)
      
      const { data , pagination } = result
      if (data) {
        page = pagination.count 
        perPage= pagination.count

        const gifs = data.map((r) => new GifClass(r) )
        console.log(result.data)
        gifsDTO = {
          gifs,
          totalPages: pagination.total_count,
        }
      }
    }

    return gifsDTO
  }
}

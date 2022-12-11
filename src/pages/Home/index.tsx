import { useState, useEffect } from 'react'

import { GifClass } from '../../models/GifClass'
import { GifService } from '../../service/GifService'
import {
  Container,
  CurrentPage,
  FilterInput,
  Loading,
  NavigationArea,
  NavigationButton,
  ResultsArea,
  SearchArea,
  SearchButton,
} from './styles'
import loadingGif from '../../assets/img/loading.gif'
import GifCard from '../../components/GifCard'

const Home = () => {
  const [gifs, setGifs] = useState<GifClass[]>([])
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1)
  const [perPage, setPerpage] = useState(16)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, isLoading] = useState(false)

  const gifService = new GifService()

  const searchGifs = async () => {
    isLoading(true)
    setGifs([])
    const gifsFound = await gifService.findGifs(filter, page, perPage)
    setGifs(gifsFound.gifs)
    setTotalPages(gifsFound.totalPages)
    isLoading(false)
  }

  useEffect(() => {
    searchGifs()
  }, [page])

  return (
    <Container>
      <SearchArea>
        <FilterInput
          placeholder='Digite o termo da busca'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <SearchButton onClick={() => searchGifs()}>Buscar</SearchButton>
      </SearchArea>

      <ResultsArea>
        {loading && <Loading src={loadingGif} alt='Carregando resultados' />}

        {gifs.length > 0 &&
          gifs.map((p) => <GifCard key={p.id} gif={p} />)}
      </ResultsArea>

      {totalPages > 1 && (
        <NavigationArea>
          {page > 1 && (
            <NavigationButton onClick={() => setPage(page - 1)}>
              Página anterior
            </NavigationButton>
          )}

          <CurrentPage>
            Página {page} de {totalPages}
          </CurrentPage>

          {page < totalPages && (
            <NavigationButton onClick={() => setPage(page + 1)}>
              Próxima página
            </NavigationButton>
          )}
        </NavigationArea>
      )}
    </Container>
  )
}

export default Home

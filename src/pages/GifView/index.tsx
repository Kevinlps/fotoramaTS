
import { useLocation } from 'react-router-dom'
import { GifClass } from '../../models/GifClass'
import * as C from './styles'

type Location = {
  state: {
    gif: GifClass 
  }
}

const GifView = () => { 
  const location: Location = useLocation()
  const { gif } = location.state
  
  return (
    
    <C.Container>
      <C.Card>
        <C.GifImageDetail src={gif.url} alt={gif.description} />
        <C.SpanDescription>
          {gif.description}
        </C.SpanDescription>
        <C.SpanGifBy>
          Usuario : {gif.by}
        </C.SpanGifBy>
        <C.SpanCreationDate>
          Importado em : {gif.dateUpload}
        </C.SpanCreationDate>
        <C.ButtonBack onClick={() => history.back() } >Voltar</C.ButtonBack>

      </C.Card>
    </C.Container>

  )

}
export default GifView

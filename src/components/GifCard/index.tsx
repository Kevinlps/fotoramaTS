
import { GifClass } from '../../models/GifClass'
import {
  CardContainer,

  GifImage,

  InfoLink,

} from './styles'

type Props = {
  gif: GifClass

}

const GifCard = ({ gif }: Props) => {

  return (
    <InfoLink to='/view' state={{ gif }}>
      <CardContainer >

        <GifImage src={gif.url} alt={gif.description} />

      </CardContainer>
    </InfoLink>
  )
}

export default GifCard

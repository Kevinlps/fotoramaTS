
import * as C from './styles'

const PhotoView = () => {
  
  const deleteLocal = () => {
      localStorage.clear()
    };

    const navegateBack = () =>{
      history.back()
    }

    const handleclik = () => {
      deleteLocal()
      navegateBack()
    }

  const dateCriation = localStorage.getItem('data')
  const value: any = localStorage.getItem('photoSmall')
  const description = localStorage.getItem('description')
  const descriptionNotNull = () => {
    if (description === 'null') {
      return 'Não possui descrição'
    } else {
      return description
    }
  }


  return (
    <C.Container>
      <C.Card>
        <C.ImageSmall src={value} alt={description || 'Não possui descrição'} />
        <C.SpanDescription>
          {descriptionNotNull()}
        </C.SpanDescription>
        <C.SpanCreationDate>
          {dateCriation}
        </C.SpanCreationDate>
        <C.ButtonBack onClick={() => handleclik()} >Voltar</C.ButtonBack>

      </C.Card>
    </C.Container>

  )

}
export default PhotoView

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Photo } from '../../models/Photo'
import {
  CardContainer,
  InfoPanel,
  PhotoCreationDate,
  PhotoDescription,
  PhotoImage,
  ButtonDetailed,
} from './styles'

type Props = {
  photo: Photo
  
}





const PhotoCard = ({ photo }: Props) => {
  const navegate = useNavigate()
 

 const handleFormSubmit = () => {
  const getId= photo.id+""
    localStorage.setItem('id', getId);
    localStorage.setItem('description',photo.description);
    localStorage.setItem('photoSmall',photo.smallUrl);
    localStorage.setItem('data', photo.creationDate.toLocaleDateString());

  };
  const navegateView = () =>{
    navegate('/view')
  }
  const handleclik = () => {
    handleFormSubmit()
    navegateView()

  }
  return (
    <CardContainer >
  
      <PhotoImage  src={photo.smallUrl} alt={photo.description} />
      
      <InfoPanel >
      
        {photo.description && (
          <PhotoDescription>
            {photo.description.length > 50
              ? `${photo.description.slice(0, 50)}(...).`
              : photo.description}
              
          </PhotoDescription>
        )}
        <PhotoCreationDate>
          Criada em {photo.creationDate.toLocaleDateString()}
        </PhotoCreationDate>
        
        <ButtonDetailed onClick={()=>handleclik()} >Ver foto</ButtonDetailed>
      </InfoPanel>
      
    </CardContainer>

  )
}

export default PhotoCard

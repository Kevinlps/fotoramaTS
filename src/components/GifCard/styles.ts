import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`

export const GifImage = styled.img`
  width: 100%;
  border-radius: 20px;
`

export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #284387;
  width: 100%;
  text-align: center;
`
export const InfoLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`

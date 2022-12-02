import styled from 'styled-components'


export const Container = styled.div`
 height: 100vh;
 
 display: flex;
 flex-direction: column;
 align-items: center;
 margin: 0px;
 padding:60px;
 background-color: #628395;
 
`;

export const ButtonBack = styled.button`
font-family: 'bold';
margin: 40px 0 0;
background-color: black;
color: white;
border-radius:25px;
padding:10px 40px ;
cursor:pointer;
`

export const Card = styled.div`
display: flex;
flex-direction: column;
padding:50px;
background-color: white ;
align-items: center;
border-radius:15px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const ImageSmall = styled.img`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
margin: 0px;
width: 100%;
`


export const SpanDescription = styled.span`
  font-family: 'bold';
  margin: 5px;
  color: black;
`
export const SpanCreationDate = styled.span`
  font-family: 'regular';
  color: black;
  margin: 0px;
`

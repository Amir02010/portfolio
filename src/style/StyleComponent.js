import styled from 'styled-components'
import '../App.css'
export const Title = styled.h1`
  font-size: var(--font-size-40);
  font-weight: var(--font-weight-600);
    
`

export const Button = styled.button`
  padding: var(--gap-5) var(--gap-25);       
  background-color: var(--primary);
  color: var(--white);
  font-size: var(--font-size-20);
  border: 1px solid transparent;
  border-radius: var(--gap-5);
  transition: all .3s ease;
    

    &:hover {
        background-color: var(--white);
        color: var(--primary);
        transform: translateY(-10px);
        border: 1px solid var(--primary);
    }

    @media(max-width: 600px) {
      button{
        font-size: 1rem;
        padding: 3px;
      }
    }
`       

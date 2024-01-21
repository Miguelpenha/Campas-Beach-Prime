import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
    z-index: 1;
    bottom: 0%;
    width: 100%;
    height: 30vh;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(transparent, ${props => props.theme.secondaryColor} 80%);
`

export const Logo = styled(Image)`
    width: 70%;
    height: auto;
    max-width: 30em;
`
import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.header`
    padding: 1em;
    display: flex;
    padding-top: 1.5em;
    flex-direction: row;
    justify-content: center;
    background-color: ${props => props.theme.secondaryColor};
`

export const Logo = styled(Image)`
    width: 70%;
    height: auto;
    max-width: 30em;
`
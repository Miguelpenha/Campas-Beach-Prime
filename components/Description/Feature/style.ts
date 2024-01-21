import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Container = styled.div`
    width: 90%;
    height: 75vh;
    display: flex;
    align-self: center;
    align-items: center;
`

export const ContainerLoadingBar = styled.div`
    width: 18em;
    display: flex;
    align-self: center;
`

export const LoadingBar = styled.span`
    opacity: 0;
    width: 20%;
    padding: 0.2em;
    border-radius: 10px;
    align-self: flex-start;
    background-color: ${props => props.theme.primary};
`

export const Title = styled.h2`
    margin-top: 1em;
    font-size: 2.3em;
    text-align: center;
    vertical-align: middle;
    color: ${props => props.theme.primary};
`

export const Description = styled.span`
    font-size: 1em;
    margin-top: 1em;
    max-width: 40em;
    text-align: center;
    line-height: 1.5em;
    color: ${props => props.theme.tertiaryColor};
`

export const Image = styled(ImageRaw)`
    width: 100%;
    height: auto;
    max-width: 40em;
    margin-top: 2em;
    border-radius: 10px;
`
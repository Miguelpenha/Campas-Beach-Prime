import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Container = styled.div`
    gap: 2em;
    width: 80%;
    display: flex;
    max-width: 45em;
    align-self: center;
    align-items: center;
    margin-bottom: 1.5em;
`

export const Title = styled.h2`
    font-size: 2.3em;
    text-align: center;
    color: ${props => props.theme.color};
`

export const Description = styled.span`
    font-size: 1.5em;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.tertiaryColor};
`

export const Image = styled(ImageRaw)`
    width: 100%;
    height: auto;
`
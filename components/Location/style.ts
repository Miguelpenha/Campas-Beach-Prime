import styled, { css } from 'styled-components'
import ImageRaw from 'next/image'

interface IContainer {
    testAB: boolean
}

export const Container = styled.div<IContainer>`
    gap: 2em;
    width: 80%;
    display: flex;
    max-width: 45em;
    align-self: center;
    align-items: center;
    margin-bottom: 1.5em;

    ${props => props.testAB && css`
        margin-top: 2em;
    `}
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
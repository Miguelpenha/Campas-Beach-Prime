import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    padding-bottom: 3em;
    background-color: ${props => props.theme.secondary};
`

export const Title = styled.h2`
    font-size: 2.3em;
    padding: 0em 10%;
    text-align: center;
    color: ${props => props.theme.color};
`

export const Subtitle = styled.div`
    margin-top: 1em;
    font-size: 1.5em;
    font-weight: 500;
    padding: 0em 10%;
    text-align: center;
    margin-bottom: 2em;
    color: ${props => props.theme.tertiaryColor};
`
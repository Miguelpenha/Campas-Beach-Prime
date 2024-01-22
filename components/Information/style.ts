import styled from 'styled-components'

export const Container = styled.div`
    gap: 2em;
    width: 80%;
    display: flex;
    max-width: 45em;
    margin-top: 2em;
    align-self: center;
    align-items: center;
    margin-bottom: 1.5em;
`

export const Title = styled.h2`
    font-size: 2em;
    text-align: center;
    color: ${props => props.theme.color};
`

export const Description = styled.span`
    font-size: 1.5em;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.tertiaryColor};
`

export const Detail = styled.span`
    font-size: 0.8em;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.tertiaryColor};
`

export const Button = styled.a`
    width: 110%;
    border: none;
    padding: 1em;
    display: flex;
    cursor: pointer;
    max-width: 20em;
    font-weight: bold;
    font-size: 1.25em;
    margin-bottom: 1em;
    text-align: center;
    align-self: center;
    border-radius: 20px;
    align-items: center;
    text-decoration: none;
    transform: scale(0.9);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.secondaryColor};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.theme.primary};

    :hover {
        transform: scale(1);
    }
`

export const About = styled.div`
    gap: 0.8em;
    display: flex;
    margin-bottom: 2em;
`

export const AboutDetail = styled.span`
    font-size: 1.3em;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.tertiaryColor};
`

export const AboutPrice = styled.span`
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.tertiaryColor};
`
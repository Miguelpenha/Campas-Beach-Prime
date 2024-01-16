import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 2em 2em;
    background-color: ${props => props.theme.primary};

    @media screen and (min-width: 900px) {
        padding: 2em 20em;
    }
`

export const Title = styled.h3`
    font-size: 1.5em;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.secondaryBackground};
`

export const Description = styled.h2`
    font-size: 1em;
    margin-top: 1em;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.secondaryBackground};
`

export const Button = styled.a`
    width: 15em;
    padding: 1.2em;
    font-size: 1em;
    margin-top: 2em;
    font-weight: bold;
    text-align: center;
    align-self: center;
    border-radius: 30px;
    text-decoration: none;
    transform: scale(0.9);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.color};

    :hover {
        transform: scale(1);
    }
`

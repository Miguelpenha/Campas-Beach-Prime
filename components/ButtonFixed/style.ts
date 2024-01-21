import styled from 'styled-components'

export const Container = styled.div`
    bottom: 0%;
    width: 100%;
    display: none;
    z-index: 1001;
    padding: 0.5em;
    position: fixed;
    visibility: hidden;
    background-color: ${props => props.theme.secondaryColor};

    @media screen and (max-width: 900px) {
        display: flex;
    }
`

export const Button = styled.a`
    width: 25em;
    padding: 1.2em;
    font-size: 1em;
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
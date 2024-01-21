import styled from 'styled-components'

export const Container = styled.a`
    right: 1em;
    width: 20%;
    bottom: 5.5em;
    z-index: 1001;
    display: flex;
    padding: 0.8em;
    position: fixed;
    cursor: pointer;
    max-width: 3.5em;
    visibility: hidden;
    border-radius: 40px;
    transition-duration: 0.25s;
    background-color: #0AD08C;
    transition-timing-function: linear;

    svg {
        width: 100%;
    }

    :hover {
        transform: scale(1.15) !important;
    }
`
import styled, { css } from 'styled-components'
import InputMaskRaw from 'react-input-mask'

export const Container = styled.form`
    gap: 2em;
    width: 70%;
    display: flex;
    max-width: 35em;
    padding-top: 3em;
    visibility: hidden;
    align-self: center;
`

export const Text = styled.div`
    span {
        font-size: 1em;
        color: ${props => props.theme.primary};
    }

    .bold {
        font-weight: bold;
    }

    .lighter {
        font-weight: 500;
    }
`

const styleInput = css`
    width: 100%;
    border: none;
    padding: 1em;

    :focus {
        outline: none;
    }

    ::placeholder {
        font-size: 1.1em;
        font-weight: 500;
        color: ${props => props.theme.placeholderColor};
    }
`

export const Input = styled.input`
    ${styleInput}
`

export const InputMask = styled(InputMaskRaw)`
    ${styleInput}
`

export const Button = styled.button`
    width: 110%;
    border: none;
    padding: 1em;
    display: flex;
    cursor: pointer;
    max-width: 20em;
    font-weight: bold;
    font-size: 1.25em;
    margin-bottom: 3em;
    align-self: center;
    border-radius: 20px;
    align-items: center;
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

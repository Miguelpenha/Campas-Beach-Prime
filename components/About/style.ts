import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 3em 1.5em;
    background-color: ${props => props.theme.secondaryBackground};

    @media screen and (min-width: 900px) {
        padding: 5em 20em;
    }
`

export const Section = styled.div`
    margin-top: 4em;
`

export const Title = styled.h2`
    span {
        font-size: 1em;
        font-weight: bold;
    }

    .normal {
        color: ${props => props.theme.tertiaryColor};
    }

    .highlighted {
        color: ${props => props.theme.primary};
    }
`

export const Description = styled.span`
    display: flex;
    margin-top: 1em;
    font-weight: bold;
    line-height: 25px;
    color: ${props => props.theme.tertiaryColor};
`

export const Attributes = styled.ul`
    margin-top: 2em;
    margin-left: 1em;
`

export const Attribute = styled.li`
    margin-top: 1em;
    font-weight: 400;
    color: ${props => props.theme.tertiaryColor};
    font-family: ${props => props.theme.font.inter};
`

export const Price = styled.h3`
    margin-top: 2em;
    align-self: center;
    padding: 0.1em 1em;
    text-align: center;
    border-radius: 10px;
    border: 3px solid ${props => props.theme.primary};

    span {
        font-size: 1em;
        color: ${props => props.theme.color};
        font-family: ${props => props.theme.font.inter};
    }

    .normal {
        font-weight: normal;
    }

    .bold {
        font-weight: bold;
    }

    @media screen and (max-width: 350px) {
        span {
            font-size: 0.85em;
        }
    }
`
import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.main`
    display: flex;
    background-color: ${props => props.theme.secondaryColor};
`

export const ContainerVideoMain = styled.div`
    height: 35em;
    display: flex;
    position: relative;

    @media screen and (max-width: 900px) {
        height: 25em;
    }
`

export const LocationVideoMain = styled.h3`
    z-index: 1;
    width: 80%;
    margin: 0 auto;
    margin-top: 5em;
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.theme.secondaryColor};

    @media screen and (max-width: 900px) {
        font-size: 1em;
        margin-top: 6em;
    }
`

export const TitleVideoMain = styled.h1`
    z-index: 1;
    width: 95%;
    margin: 0 auto;
    margin-top: 1em;
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.secondaryColor};

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`

export const SubtitleVideoMain = styled.h1`
    z-index: 1;
    width: 59%;
    margin: 0 auto;
    font-weight: 400;
    font-size: 1.5em;
    margin-top: 0.5em;
    text-align: center;
    color: ${props => props.theme.secondaryColor};

    @media screen and (max-width: 900px) {
        width: 80%;
        font-size: 1.1em;
    }
`

export const VideoMain = styled.video`
    z-index: 0;
    width: 100%;
    height: 35em;
    object-fit: cover;
    position: absolute;
    object-position: center;
    filter: brightness(0.7);

    @media screen and (max-width: 900px) {
        height: 25em;
    }
`

export const Footer = styled.footer`
    display: flex;
    padding: 3em 0em;
    background-color: ${props => props.theme.background};
`

export const ContainerLogoFooter = styled.a`
    align-self: center;
`

export const LogoFooter = styled(Image)`
    width: 10em;
    height: auto;
    align-self: center;
`
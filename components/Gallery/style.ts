import styled from 'styled-components'
import { Swiper as SwiperRaw } from 'swiper/react'
import Image from 'next/image'

export const Container = styled.div`
    width: 100%;
    padding-top: 1.5em;
    align-self: center;
    background-color: ${props => props.theme.secondaryBackground};
`

export const Swiper = styled(SwiperRaw)`
    width: 100%;

    --swiper-pagination-color: ${props => props.theme.primary};
    --swiper-navigation-color: ${props => props.theme.primary};

    .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
        opacity: 0.5 !important;
    }

    .swiper-pagination-bullet {
        :not(.swiper-pagination-bullet-active) {
            opacity: 0.8;
        }
    }

    @media screen and (min-width: 900px) {
        width: 50%;
        border-radius: 20px;
    }
`

export const Photo = styled(Image)`
    width: 100%;
    height: auto;
`
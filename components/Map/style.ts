import styled from 'styled-components'
import { MapContainer as MapContainerRaw } from 'react-leaflet'

export const Container = styled.div`
    display: flex;
    margin-top: 2em;
    align-items: center;
`

export const Title = styled.h2`
    margin-left: 0.5em;
    align-self: flex-start;
    color: ${props => props.theme.background};
`

export const Description = styled.span`
    margin-top: 1em;
    line-height: 1.5em;
    margin-left: 0.5em;
    align-self: flex-start;
    color: ${props => props.theme.tertiaryColor};
`

export const MapContainer = styled(MapContainerRaw)`
    width: 100%;
    height: 30em;
    margin-top: 1em;
    align-self: center;

    .leaflet-popup-content-wrapper {
        display: flex;

        .leaflet-popup-content {
            display: flex;
        }
    }
`
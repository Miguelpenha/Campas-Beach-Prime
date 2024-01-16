import 'leaflet/dist/leaflet.css'
import page from '../../services/page'
import { Container, Title, Description, MapContainer } from './style'
import { TileLayer } from 'react-leaflet'
import Marker from './Marker'

function Map() {
    const position = page.components.main.map.position

    return (
        <Container>
            <Title>Localização Privilegiada</Title>
            <Description>Av. Jose Bezerra Sobrinho - Praia do Campas, Tamandaré, PE, 55578-000</Description>
            <MapContainer zoom={position.zoom} center={[ position.latitude, position.longitude ]}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker/>
            </MapContainer>
        </Container>
    )
}

export default Map
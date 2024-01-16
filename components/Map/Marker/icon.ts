import Leaflet from 'leaflet'
import MarkerIcon from '../../../public/img/Marker Map Icon.svg'

const icon = Leaflet.icon({
    iconSize: [50, 50],
    iconUrl: MarkerIcon.src,
})

export default icon
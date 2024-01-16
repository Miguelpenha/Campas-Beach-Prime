import usePopupOpen from './usePopup'
import page from '../../../services/page'
import { Marker as MarkerRaw, Popup } from 'react-leaflet'
import icon from './icon'
import { Title, Logo } from './style'
import logoHeaderSource from '../../../public/img/Logo Header.png'

function Marker() {
    const { markerRef } = usePopupOpen()
    const position = page.components.main.map.position

    return (
        <MarkerRaw ref={markerRef as any} icon={icon} position={[ position.latitude, position.longitude ]}>
            <Popup>
                <Title>Campas Beach Prime</Title>
                <Logo src={logoHeaderSource} alt={page.alts.header}/>
            </Popup>
        </MarkerRaw>
    )
}

export default Marker
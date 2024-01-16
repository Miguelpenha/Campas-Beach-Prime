import { useRef, useEffect } from 'react'
import { Popup } from 'leaflet'

function usePopupOpen() {
    const markerRef = useRef<Popup>(null)

    useEffect(() => {
        if (markerRef.current) {
            if (!markerRef.current.isPopupOpen()) {
                markerRef.current.openPopup()
            }
        }
    }, [])

    return { markerRef }
}

export default usePopupOpen
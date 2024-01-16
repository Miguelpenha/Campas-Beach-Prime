import { useEffect } from 'react'
import plugins from './plugins'
import { whatsapp, form, about } from './animations'

function useAnimation() {
    useEffect(() => {
        plugins()
        
        whatsapp()
        form()
        about()
    }, [])
}

export default useAnimation

import { useEffect } from 'react'
import gsap from 'gsap'

function useAnimation() {
    useEffect(() => {
        gsap.set('#whatsapp', {
            scale: 0,
            opacity: 0,
            autoAlpha: 1
        })
    
        gsap.to('#whatsapp',{ 
            scale: 1,
            opacity: 1,
            duration: 0.5
        })
    }, [])
}

export default useAnimation
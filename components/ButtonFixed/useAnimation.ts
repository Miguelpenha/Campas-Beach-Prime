import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function useAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('#button-fixed',
            { 
                opacity: 0,
                duration: 1,
                autoAlpha: 1,
                bottom: '-20%'
            },
            { 
                opacity: 1,
                duration: 1,
                bottom: '0%',
                scrollTrigger: {
                    end: '180% bottom',
                    endTrigger: '#form',
                    toggleActions: 'none play reverse none'
                }
            }
        )
    }, [])
}

export default useAnimation
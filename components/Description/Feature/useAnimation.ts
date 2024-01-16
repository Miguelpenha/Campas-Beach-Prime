import page from '../../../services/page'
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const { features } = page.components.main.description

function useAnimation() {
    const [showAnimation, setShowAnimation] = useState(false)
    const [indexFeature, setIndexFeature] = useState(0)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('#description>#feature', {
            scrollTrigger: {
                start: '35% bottom',
                trigger: '#description>#feature'
            },
            onStart() {
                setShowAnimation(true)

                setTimeout(() => {
                    gsap.fromTo('#description>#feature>.container-loading>.loading', 
                        {
                            y: 40,
                            opacity: 0,
                            duration: 1
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1
                        }
                    )
                }, 100)
            }
        })
    }, [])

    useEffect(() => {
        if (showAnimation) {
            const interval = setInterval(() => {
                setIndexFeature(index => {
                    if (index < features.length-1) {
                        return index + 1
                    } else {
                        return 0
                    }
                })
            }, 6000)
    
            return () => clearInterval(interval)
        }
    }, [showAnimation])

    useEffect(() => {
        if (showAnimation) {
            gsap.fromTo('#description>#feature>div>.loading', 
                {
                    width: '20%'
                }, 
                {
                    duration: 4,
                    width: '100%'
                }
            )

            gsap.fromTo('#description>#feature *:not(.container-loading)', 
                {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2
                }
            )

            gsap.to('#description>#feature *:not(.container-loading)', 
                {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                }
            ).delay(4.65)
        }
    }, [indexFeature, showAnimation])

    return { showAnimation, feature: features[indexFeature], index: indexFeature }
}

export default useAnimation
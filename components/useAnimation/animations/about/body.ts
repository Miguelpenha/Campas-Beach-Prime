import { IPage } from '../../../../types'
import gsap from 'gsap'

function body(index: number, section: IPage['components']['main']['about']['sections'][0]) {
    gsap.fromTo(`#about>.section:nth-child(${index+1})>.list li`,
        { 
            duration: 1,
            opacity: 0.2,
            y: section.animation == 'vertical' ? 150 : 0,
            x: section.animation == 'horizontal' ? -40 : 0
        },
        { 
            y: 0,
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            scrollTrigger: {
                start: '60% bottom',
                trigger: `#about>.section:nth-child(${index+1})`
            }
        }
    )
}

export default body
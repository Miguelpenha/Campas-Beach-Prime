import { IPage } from '../../../../types'
import gsap from 'gsap'

function head(index: number, section: IPage['components']['main']['about']['sections'][0]) {
    gsap.fromTo(`#about>.section:nth-child(${index+1})>.title, #about>.section:nth-child(${index+1})>.description`,
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
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                start: 'center center',
                trigger: index=== 0 ? '#gallery' : `#about>.section:nth-child(${index})`
            }
        }
    )
}

export default head
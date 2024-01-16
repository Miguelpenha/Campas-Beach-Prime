import gsap from 'gsap'

function form() {
    gsap.fromTo('#form',
        { 
            y: 100,
            duration: 1,
            opacity: 0.2,
            autoAlpha: 1
        },
        { 
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '#form',
                start: '-30% center'
            }
        }
    )
}

export default form
import { useState } from 'react'
import { Container, Swiper, Photo } from './style'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Photo1Source from '../../public/img/Photos/Photo 1.jpg'
import Photo2Source from '../../public/img/Photos/Photo 2.jpg'
import Photo3Source from '../../public/img/Photos/Photo 3.jpg'
import Photo4Source from '../../public/img/Photos/Photo 4.jpg'
import Photo5Source from '../../public/img/Photos/Photo 5.jpg'
import page from '../../services/page'

function Gallery() {
    const [loaded, setLoaded] = useState(false)

    return (
        <Container>
            <Swiper
                navigation
                id="gallery"
                loop={loaded}
                pagination={{ clickable: true }}
                onSwiper={() => setLoaded(true)}
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
            >
                <SwiperSlide key={1}>
                    <Photo placeholder="blur" src={Photo1Source} alt={page.alts.gallery[0]}/>
                </SwiperSlide>
                {loaded && <>
                    <SwiperSlide key={2}>
                        <Photo placeholder="blur" src={Photo2Source} alt={page.alts.gallery[1]}/>
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                        <Photo placeholder="blur" src={Photo3Source} alt={page.alts.gallery[2]}/>
                    </SwiperSlide>
                    <SwiperSlide key={4}>
                        <Photo placeholder="blur" src={Photo4Source} alt={page.alts.gallery[3]}/>
                    </SwiperSlide>
                    <SwiperSlide key={5}>
                        <Photo placeholder="blur" src={Photo5Source} alt={page.alts.gallery[4]}/>
                    </SwiperSlide>
                </>}
            </Swiper>
        </Container>
    )
}

export default Gallery
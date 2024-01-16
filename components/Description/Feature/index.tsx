import photoFeature1 from '../../../public/img/Features/Photo 1.jpg'
import photoFeature2 from '../../../public/img/Features/Photo 2.jpg'
import photoFeature3 from '../../../public/img/Features/Photo 3.jpg'
import useAnimation from './useAnimation'
import { Container, ContainerLoadingBar, LoadingBar, Title, Description, Image } from './style'
import page from '../../../services/page'

const photos = [
    photoFeature1,
    photoFeature2,
    photoFeature3
]

function Feature() {
    const { showAnimation, feature, index } = useAnimation()

    return (
        <Container id="feature">
            {showAnimation && <>
                <ContainerLoadingBar className="container-loading">
                    <LoadingBar className="loading"/>
                </ContainerLoadingBar>
                <Title className="title">{feature.title}</Title>
                <Description className="description">{feature.description}</Description>
                <Image className="photo" placeholder="blur" src={photos[index]} alt={page.alts.features[index]}/>
            </>}
        </Container>
    )
}

export default Feature
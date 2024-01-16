import { Container, Title, Description, Image } from './style'
import page from '../../services/page'
import imageLocationSource from '../../public/img/Image Location.jpg'

function Location() {
    return (
        <Container>
            <Title>{page.components.main.location.title}</Title>
            <Description>{page.components.main.location.description}</Description>
            <Image placeholder="blur" alt={page.alts.location} src={imageLocationSource}/>
        </Container>
    )
}

export default Location
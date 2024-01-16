import { Container, Title, Subtitle } from './style'
import page from '../../services/page'
import Feature from './Feature'

function Description() {
    return (
        <Container id="description">
            <Title>{page.components.main.description.title}</Title>
            <Subtitle>{page.components.main.description.description}</Subtitle>
            <Feature/>
        </Container>
    )
}

export default Description
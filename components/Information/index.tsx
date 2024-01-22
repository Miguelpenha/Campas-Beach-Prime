import page from '../../services/page'
import { Container, Title, Description, Detail, Button, About, AboutDetail, AboutPrice } from './style'

function Information() {
    const { title, description, detail, button, about } = page.components.main.information

    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Detail>{detail}</Detail>
            <Button href="#form">{button}</Button>
            <About>
                <AboutDetail>{about.detail}</AboutDetail>
                <AboutPrice>{about.price}</AboutPrice>
            </About>
        </Container>
    )
}

export default Information
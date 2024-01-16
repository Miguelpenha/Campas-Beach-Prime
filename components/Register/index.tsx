import { Container, Title, Description, Button } from './style'
import page from '../../services/page'

function Register() {
    return (
        <Container id="register">
            <Title>{page.components.main.register.title}</Title>
            <Description>{page.components.main.register.description}</Description>
            <Button href="#form">{page.components.main.register.button.text}</Button>
        </Container>
    )
}

export default Register
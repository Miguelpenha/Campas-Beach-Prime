import useAnimation from './useAnimation'
import { Container, Button } from './style'
import page from '../../services/page'

function ButtonFixed() {
    useAnimation()

    return (
        <Container id="button-fixed">
            <Button href="#form">{page.components.main.fixed}</Button>
        </Container>
    )
}

export default ButtonFixed
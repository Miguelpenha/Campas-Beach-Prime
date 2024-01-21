import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Button } from './style'
import page from '../../services/page'

interface IProps {
    testAB: boolean
}

const ButtonFixed: FC<IProps> = ({ testAB }) => {
    useAnimation(testAB)

    return (
        <Container id="button-fixed">
            <Button href="#form">{page.components.main.fixed}</Button>
        </Container>
    )
}

export default ButtonFixed
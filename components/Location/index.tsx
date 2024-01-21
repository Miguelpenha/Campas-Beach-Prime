import { FC } from 'react'
import { Container, Title, Description, Image } from './style'
import page from '../../services/page'
import imageLocationSource from '../../public/img/Image Location.jpg'

interface IProps {
    testAB: boolean
}

const Location: FC<IProps> = ({ testAB }) => {
    return (
        <Container testAB={testAB}>
            <Title>{page.components.main.location.title}</Title>
            <Description>{page.components.main.location.description}</Description>
            <Image placeholder="blur" alt={page.alts.location} src={imageLocationSource}/>
        </Container>
    )
}

export default Location
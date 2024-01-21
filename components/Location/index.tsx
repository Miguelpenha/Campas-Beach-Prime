import { FC } from 'react'
import { Container, Title, Description, Image } from './style'
import page from '../../services/page'
import imageLocationSource from '../../public/img/Image Location.jpg'

interface IProps {
    testAB: boolean
}

const Location: FC<IProps> = ({ testAB }) => {
    const { location } = page.components.main

    return (
        <Container>
            <Title>{!testAB ? location.title : location.titleTesteAB}</Title>
            <Description>{!testAB ? location.description : location.descriptionTesteAB}</Description>
            <Image placeholder="blur" alt={page.alts.location} src={imageLocationSource}/>
        </Container>
    )
}

export default Location
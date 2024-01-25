import { IVersion } from '../../types'
import { FC } from 'react'
import { Container, Title, Description, Image } from './style'
import page from '../../services/page'
import imageLocationSource from '../../public/img/Image Location.jpg'

interface IProps {
    version: IVersion
}

const Location: FC<IProps> = ({ version }) => {
    const { location } = page.components.main

    return (
        <Container>
            <Title>{version != 'design' ? location.title : location.titleTesteAB}</Title>
            <Description>{version != 'design' ? location.description : location.descriptionTesteAB}</Description>
            <Image placeholder="blur" alt={page.alts.location} src={imageLocationSource}/>
        </Container>
    )
}

export default Location
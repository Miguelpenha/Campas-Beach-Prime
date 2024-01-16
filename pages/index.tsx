import useAnimation from '../components/useAnimation'
import GTMTag from '../components/GTMTag'
import Head from '../components/Head'
import ButtonWhatsapp from '../components/ButtonWhatsapp'
import Header from '../components/Header'
import { Container, ContainerVideoMain, LocationVideoMain, TitleVideoMain, SubtitleVideoMain, VideoMain, Footer, ContainerLogoFooter, LogoFooter } from '../styles/pages'
import page from '../services/page'
import Form from '../components/Form'
import Location from '../components/Location'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Description from '../components/Description'
import Register from '../components/Register'
import LogoCompleteSource from '../public/img/Logo Complete.png'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

function Home() {
    useAnimation()

    return <>
        <GTMTag/>
        <Head/>
        <ButtonWhatsapp/>
        <Header/>
        <Container>
            <ContainerVideoMain>
                <LocationVideoMain>{page.components.main.video.location}</LocationVideoMain>
                <TitleVideoMain>{page.components.main.video.title}</TitleVideoMain>
                <SubtitleVideoMain>{page.components.main.video.subtitle}</SubtitleVideoMain>
                <VideoMain autoPlay loop muted preload="metadata">
                    <source src="/videos/Video.mp4#t=0.1" type="video/mp4"/>
                </VideoMain>
            </ContainerVideoMain>
            <Form/>
            <Location/>
            <Gallery/>
            <About/>
            <Description/>
            <Register/>
            <Map/>
            <Footer>
                <ContainerLogoFooter href="https://innovateconstrutora.com.br" target="_blank">
                    <LogoFooter placeholder="blur" src={LogoCompleteSource} alt={page.alts.logo}/>
                </ContainerLogoFooter>
            </Footer>
        </Container>
    </>
}

export default Home
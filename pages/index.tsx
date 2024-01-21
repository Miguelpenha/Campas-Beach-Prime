import dynamic from 'next/dynamic'
import useAnimation from '../components/useAnimation'
import GTMTag from '../components/GTMTag'
import Head from '../components/Head'
import ButtonWhatsapp from '../components/ButtonWhatsapp'
import Header from '../components/Header'
import { Container, ContainerVideoMain, LocationVideoMain, TitleVideoMain, SubtitleVideoMain, VideoMain, Footer, ContainerLogoFooter, LogoFooter } from '../styles/pages'
import page from '../services/page'
import LogoMain from '../components/LogoMain'
import Form from '../components/Form'
import ButtonFixed from '../components/ButtonFixed'
import Location from '../components/Location'
import Information from '../components/Information'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Description from '../components/Description'
import Register from '../components/Register'
import LogoCompleteSource from '../public/img/Logo Complete.png'
import { GetServerSideProps } from 'next'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

interface IProps {
    isTestAB: boolean
}

function Home({ isTestAB }: IProps) {
    useAnimation()

    return <>
        <GTMTag/>
        <Head/>
        <ButtonWhatsapp/>
        {!isTestAB && <Header/>}
        <Container>
            <ContainerVideoMain>
                {!isTestAB && <>
                    <LocationVideoMain>{page.components.main.video.location}</LocationVideoMain>
                    <TitleVideoMain>{page.components.main.video.title}</TitleVideoMain>
                    <SubtitleVideoMain>{page.components.main.video.subtitle}</SubtitleVideoMain>
                </>}
                {isTestAB && <LogoMain/>}
                <VideoMain autoPlay loop muted playsInline poster="/img/Thumbnail.png">
                    <source src="/videos/Video.mp4" type="video/mp4"/>
                </VideoMain>
            </ContainerVideoMain>
            {!isTestAB && <Form/>}
            {isTestAB && <Information/>}
            <Location testAB={isTestAB}/>
            <ButtonFixed/>
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

interface IQuery {
    v: string
}

export const getServerSideProps: GetServerSideProps<IProps> = async (req) => {
    const { v } = req.query as unknown as IQuery

    return {
        props: { isTestAB: Boolean(v) }
    }
}
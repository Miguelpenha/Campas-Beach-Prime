import dynamic from 'next/dynamic'
import { IVersion } from '../types'
import useAnimation from '../components/useAnimation'
import GTMTag from '../components/GTMTag'
import Head from '../components/Head'
import ButtonWhatsapp from '../components/ButtonWhatsapp'
import Header from '../components/Header'
import { Container, ContainerMain, LocationMain, TitleMain, SubtitleMain, VideoMain, PhotoMain, Footer, ContainerLogoFooter, LogoFooter } from '../styles/pages'
import page from '../services/page'
import LogoMain from '../components/LogoMain'
import PhotoMainSource from '../public/img/Photo Main.jpg'
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
    version: IVersion
}

function Home({ version }: IProps) {
    useAnimation()

    return <>
        <GTMTag/>
        <Head/>
        <ButtonWhatsapp/>
        {version != 'design' && <Header/>}
        <Container>
            <ContainerMain>
                {version != 'design' && <>
                    <LocationMain>{page.components.main.video.location}</LocationMain>
                    <TitleMain>{page.components.main.video.title}</TitleMain>
                    <SubtitleMain>{page.components.main.video.subtitle}</SubtitleMain>
                </>}
                {version == 'design' && <LogoMain/>}
                {version != 'performance' ? (
                    <VideoMain autoPlay loop muted playsInline poster="/img/Thumbnail.png">
                        <source src="/videos/Video.mp4" type="video/mp4"/>
                    </VideoMain>
                ) : (
                    <PhotoMain placeholder="blur" priority alt={page.alts.main} src={PhotoMainSource}/>
                )}
            </ContainerMain>
            {version != 'design' && <Form/>}
            {version == 'design' && <Information/>}
            <Location version={version}/>
            {version == 'design' && <Form/>}
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
        props: {
            version: (v == '2' ? 'design' : v == '3' && 'performance') as any
        }
    }
}
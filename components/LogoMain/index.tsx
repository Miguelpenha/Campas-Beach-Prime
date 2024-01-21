import { Container, Logo } from './style'
import LogoHeaderSource from '../../public/img/Logo Header.png'
import page from '../../services/page'

function LogoMain() {
    return (
        <Container>
            <Logo placeholder="blur" src={LogoHeaderSource} alt={page.alts.header}/>
        </Container>
    )
}

export default LogoMain
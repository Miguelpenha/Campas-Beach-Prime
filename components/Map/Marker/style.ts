import styled from 'styled-components'
import Image from 'next/image'

export const Title = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    align-self: center;
`

export const Logo = styled(Image)`
    width: 100%;
    height: auto;
    margin-top: 1em;
`
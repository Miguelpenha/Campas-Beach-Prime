import HeadRaw from 'next/head'
import page from '../services/page'
import theme from '../styles/theme'

function Head() {
    return (
        <HeadRaw>
            <title>{page.meta.title}</title>
            <meta name="language" content="pt-BR"/>
            <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:title" content={page.meta.title}/>
            <meta property="og:description" content={page.meta.description}/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:site_name" content={page.meta.name}/>
            <meta property="og:type" content={page.meta.type}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:title" content={page.meta.title}/>
            <meta name="twitter:description" content={page.meta.description}/>
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta name="description" content={page.meta.description}/>
            <meta name="theme-color" content={theme.primary}/>
        </HeadRaw>
    )
}

export default Head
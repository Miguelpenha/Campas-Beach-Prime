interface IPage {
    meta: {
        title: string
        description: string
    }
    alts: {
        header: string
        location: string
        gallery: string[]
        features: string[]
        logo: string
    }
    components: {
        main: {
            video: {
                location: string
                title: string
                subtitle: string
            }
            form: {
                title: {
                    bold: string
                    lighter: string
                }
            }
            location: {
                title: string
                description: string
            }
            about: {
                sections: {
                    animation: 'horizontal' | 'vertical'
                    title: {
                        normal: string
                        highlighted: string
                    }
                    description?: string
                    attributes: string[]
                }[]
                price: {
                    normal: string
                    bold: string
                }
                button: {
                    text: string
                }
            }
            description: {
                title: string
                description: string
                features: { title: string, description: string }[]
            }
            register: {
                title: string
                description: string
                button: {
                    text: string
                }
            }
            map: {
                position: {
                    zoom: number
                    latitude: number
                    longitude: number
                }
            }
        }
    }
}

export default IPage
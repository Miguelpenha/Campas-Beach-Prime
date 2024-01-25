interface IPage {
    meta: {
        name: string
        title: string
        description: string
    }
    alts: {
        header: string
        location: string
        information: string
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
            fixed: string
            location: {
                title: string
                titleTesteAB: string
                description: string
                descriptionTesteAB: string
            }
            information: {
                title: string
                description: string
                detail: string
                button: string
                about: {
                    detail: string
                    price: string
                }
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
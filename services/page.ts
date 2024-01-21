import { IPage } from '../types'

const page: IPage = {
    meta: {
        title: 'Viva o extraordinário, viva Campas Beach Prime.',
        description: 'Exclusividade, tecnologia e natureza em total sinergia com o seu estilo de vida.'
    },
    alts: {
        header: 'Logos Empresas',
        location: 'Imagem Localização',
        gallery: ['Foto 1', 'Foto 2', 'Foto 3', 'Foto 4', 'Foto 5'],
        features: ['Foto 1', 'Foto 2', 'Foto 3'],
        logo: 'Logo Innovate',
        information: 'Imagem Localização'
    },
    components: {
        main: {
            video: {
                location: 'Praia de Campas - Tamandaré - Pernambuco',
                title: 'Viva o extraordinário, viva Campas Beach Prime.',
                subtitle: 'Exclusividade, tecnologia e natureza em total sinergia com o seu estilo de vida, ao lado da Praia de Carneiros e Tamandaré.'
            },
            form: {
                title: {
                    bold: 'Cadastre-se',
                    lighter: ' e fale com nossa equipe de vendas.'
                }
            },
            fixed: 'QUERO MAIS INFORMAÇÕES',
            location: {
                titleTesteAB: 'Águas cristalinas, piscinas naturais e areia branca.',
                title: 'Um oásis entre a Praia de Carneiros e Tamandaré.',
                description: 'Invista em uma das localizações que mais se valorizam no Brasil.',
                descriptionTesteAB: 'Agora imagine ter tudo isso a poucos metros de distância. Isso é o que o Campas Beach Prime oferece. Tenha exclusividade, tecnologia e natureza, a poucos minutos das praias mais bonitas do Brasil'
            },
            information: {
                title: 'Um oásis entre a Praia de Carneiros e Tamandaré.',
                description: 'Invista em uma das localizações que mais se valorizam no Brasil.',
                detail: 'Clique no botão abaixo pra receber todos os detalhes: ',
                button: 'QUERO MAIS INFORMAÇÕES',
                about: {
                    detail: '2 quartos  -  42m² a 154m²',
                    price: 'a partir de R$ 423 MIL'
                }
            },
            about: {
                sections: [
                    {
                        animation: 'vertical',
                        title: {
                            normal: 'O Campas ',
                            highlighted: 'Beach Prime'
                        },
                        description: '24 apartamentos + 4 unidades Prime, plantas de 42,96M2 a 154,10M2.',
                        attributes: [
                            'Todos os cômodos climatizados (Samsung Wind Free)',
                            'Automação completa (Climatização, iluminação, e tomadas)',
                            'Fechadura digital',
                            'Tomadas USB e Interruptores Wi Fi',
                            '1 Plug in para veículos elétricos na área comum',
                            'Preparação para aquecimento a gás'
                        ]
                    },
                    {
                        animation: 'vertical',
                        title: {
                            normal: 'Unidades ',
                            highlighted: 'Prime'
                        },
                        description: 'Plantas com 113,52m2 e 154,10m2',
                        attributes: [
                            '3 quartos sendo 2 suítes',
                            'Garagem independente',
                            'Piscina privativa',
                            'Área gourmet privativa',
                            'Tomada plugin para Veículos elétricos',
                            'Jardim exclusivo'
                        ]
                    },
                    {
                        animation: 'horizontal',
                        title: {
                            normal: 'O Condomínio',
                            highlighted: ''
                        },
                        attributes: [
                            'Placas fotovoltaicas para atender condomínio',
                            'Elevador gera energia que consome',
                            '1 plug-in para carro elétrico na area comum',
                            'Rooftop com piscina aquecida de borda infinita com 12 m (2 espaços infantis).',
                            'Playground completo',
                            '4 espaços gourmet equipado com churrasqueira com forno a gás e carvão no rooftop',
                            'Playground completo.'
                        ]
                    }
                ],
                price: {
                    normal: 'A PARTIR DE ',
                    bold: 'R$ 423.343,00'
                },
                button: {
                    text: 'Tenho interesse'
                }
            },
            description: {
                title: 'Campas, a sua segunda casa.',
                description: 'O Seu Refúgio Entre Tamandaré e Carneiros.',
                features: [
                    {
                        title: 'Qualidade de vida',
                        description: 'Viva ao ar livre, conectado com a natureza, em sua segunda casa na praia.'
                    },
                    {
                        title: 'Tranquilidade',
                        description: 'Rodeado por tranquilidade, o Campas Beach Prime amplifica sua produtividade. Dedique seu tempo ao que importa, em um ambiente seguro e sem preocupações.'
                    },
                    {
                        title: 'Conforto',
                        description: 'Serviços, saúde, educação e lazer ao alcance. Desfrute da exclusividade de Campas Beach Prime, onde a vida é vivida com conforto à beira-mar.'
                    }
                ]
            },
            register: {
                title: 'COMODIDADE PARA MORAR, SEGURANÇA PARA INVESTIR',
                description: 'Cadastre-se agora e aproveite as nossas condições especiais',
                button: {
                    text: 'Quero mais informações'
                }
            },
            map: {
                position: {
                    zoom: 15,
                    latitude: -8.74372,
                    longitude: -35.08869
                }
            }
        }
    }
}

export default page

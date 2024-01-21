import { Container, Section, Title, Description, Attributes, Attribute, Price } from './style'
import page from '../../services/page'

function About() {
    return (
        <Container id="about">
            {page.components.main.about.sections.map((section, index) => (
                <Section className="section" key={index}>
                    <Title className="title">
                        <span className="normal">{section.title.normal}</span>
                        <span className="highlighted">{section.title.highlighted}</span>
                    </Title>
                    {section.description && (
                        <Description className="description">{section.description}</Description>
                    )}
                    <Attributes className="list">
                        {section.attributes.map((attribute, index) => (
                            <Attribute key={index}>{attribute}</Attribute>
                        ))}
                    </Attributes>
                </Section>
            ))}
            <Price>
                <span className="normal">{page.components.main.about.price.normal}</span>
                <span className="bold">{page.components.main.about.price.bold}</span>
            </Price>
        </Container>
    )
}

export default About
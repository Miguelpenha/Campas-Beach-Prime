import { useState } from 'react'
import { Container, Text, Input, InputMask, Button } from './style'
import page from '../../services/page'

function Form() {
    const [telephone, setTelephone] = useState('')

    return (
        <Container id="form" action={process.env.NEXT_PUBLIC_URL_FORM_DATA} method="post">
            <Text>
                <span className="bold">{page.components.main.form.title.bold}</span>
                <span className="lighter">{page.components.main.form.title.lighter}</span>
            </Text>
            <Input type="text" name="name" id="name" required placeholder="Nome..."/>
            <InputMask
                required
                type="tel"
                maskChar=""
                id="telephone"
                minLength={20}
                name="telephone"
                placeholder="Whatsapp..."
                mask="+55 (99) 9 9999-9999"
                onChange={ev => setTelephone(ev.target.value)}
            />
            <Input value={`https://api.whatsapp.com/send?phone=${telephone.replace(/[-()+ ]/g, '')}`} type="hidden" name="Whatsapp Link"/>
            <Input type="email" name="email" id="email" required placeholder="Email..."/>
            <Button type="submit">Enviar</Button>
        </Container>
    )
}

export default Form
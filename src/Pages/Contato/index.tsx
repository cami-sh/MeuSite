import React from 'react'
import { Helmet } from 'react-helmet'

const Contato = () => {
    return (
        <>
            <Helmet>
                <title>Contato</title>
            </Helmet>

            <p>Meus contatos:</p>
            <ul>
                <li>Whatsapp: (11) 95556-0620</li>
                <li>E-mail: camilahanazono@gmail.com</li>
                <li><a href='https://www.linkedin.com/in/camilasayuri0/' target="_blank">LinkedIn</a></li>
            </ul>
        </>
    )
}

export default Contato
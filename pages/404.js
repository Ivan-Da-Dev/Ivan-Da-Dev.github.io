import Head from "next/head"

export default function Custom404() {
    const face_exp = '>w<'

    return(
        <div className='_404'>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>404</title>
                <link rel="icon" href="../images/icon.png"></link>

                <meta property="og:description" content="Baka this page does not exist" data-vue-meta="true"></meta>
            </Head>

            <h1 className='_404_title'>404</h1>
            <h2 className='_404_desc'>Onii-chan! This page does not exist {face_exp},</h2>
            <a className='_404_redirect' href='https://oniichann.tk'>Go to home?</a>
        </div>
    )
}
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>Kishore NP</title>
        <meta
          name='description'
          content='Welcome my website. My name is Kishore Nandagopal'
        ></meta>
        <link
          rel='stylesheet'
          href='https://unicons.iconscout.com/release/v4.0.0/css/line.css'
        ></link>
        <meta
          name='keyword'
          content='Kishore Nandagopal blog, Kishore NP blog'
        ></meta>
        <meta name='robots' content='noindex,nofollow' />
        <meta property='og:type' content='Kishore Nandagopal Blog' />
        <meta property='og:image' content='LogoReal.png' />
        <meta
          property='og:description'
          content='Welcome to Kishore Nandagopal Blog. A Place where you can get to know about me...'
        />
        <meta property='og:locale' content='en_IN' />
        <meta property='og:site_name' content='Kishore Nandagopal Blog' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='600' />
        <link rel='canonical' href='https://kishoren.vercel.app/'></link>
        <meta property='og:url' content='https://kishoren.vercel.app/'></meta>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Righteous&display=swap'
          rel='stylesheet'
        ></link>
      </head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

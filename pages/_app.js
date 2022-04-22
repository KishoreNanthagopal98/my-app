import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>Kishore NP</title>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      </head>
      <Component {...pageProps} />
    </>
 
  )
}

export default MyApp

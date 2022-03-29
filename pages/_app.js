import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>Kishore NP</title>
      </head>
      <Component {...pageProps} />
    </>
 
  )
}

export default MyApp

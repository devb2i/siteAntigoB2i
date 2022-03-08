import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { GlobalStyle } from "../styles/global"



function MyApp({ Component, pageProps }) {

 
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      
      <GlobalStyle/>
    </>
  )

}

export default MyApp

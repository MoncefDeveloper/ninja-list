import '../styles/globals.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp

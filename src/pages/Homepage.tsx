import Dropdown from '../components/Dropdown'
import Featured from '../components/Featured'
import Header from '../components/Header'
import Shop from '../components/Shop'
import Footer from '../components/Footer'



const Homepage = () => {
  return (
    <>
    <div className='pt-2 px-10 md:px-20'>
        <Header />
        <Dropdown />
        <Featured />
        <Shop />
    </div>
    <Footer />
    </>
  )
}

export default Homepage
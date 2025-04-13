import Navbar from './navbar'
import {Outlet} from "react-router-dom"
import Footer from './footer'
const Layout = () => { 
    return (
        <main>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </main>
    )
}

export default Layout
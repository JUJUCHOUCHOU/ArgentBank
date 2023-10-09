import Nav from "../../component/Nav/index"
import Hero from "../../component/Hero/index"
import Features from "../../component/Features/index"
import Footer from "../../component/Footer/index"


function HomePage(){
    return(
        <div className="homePage">
            <Nav/>
            <Hero />
            <Features/>
            <Footer/>
        </div>
    )
}
export default HomePage
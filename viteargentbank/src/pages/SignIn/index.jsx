import Nav from "../../component/Nav";
import Footer from "../../component/Footer";
import Form from "../../component/Form"
import './style.scss'

function SignIn(){
    return(
      <div>
         <Nav/>
      <main className=" main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
      <Form/>
      </section>
      </main>
      <Footer/>
      </div>
    )
}
export default SignIn
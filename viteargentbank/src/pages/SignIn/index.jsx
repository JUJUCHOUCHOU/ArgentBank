import Nav from "../../component/Nav";
import Footer from "../../component/Footer";
import Form from "../../component/Form"
import './style.scss'

function SignIn(){
   console.log('SignIn')
    return(
       <div>
        <Nav />
         <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form />
        </section>
        </main>
        <Footer/>
       </div>
    )
}
export default SignIn
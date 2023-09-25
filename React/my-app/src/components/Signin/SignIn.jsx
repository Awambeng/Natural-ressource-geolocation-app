import React, {Component} from 'react'
import bgImg from '../../assets/world.png'
// import { useForm } from 'react-hook-form'
import './login.css'
import axios from 'axios'
import { Navigate  } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    const udata = localStorage.getItem('user')
    let loggedIN = true
    if (udata == null){
      loggedIN = false
    }
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        email: '',
        password: '',
        loggedIN
    }
}

onChangeUserEmail(e) {
  this.setState({ email: e.target.value })
}
onChangePassword(e) {
  this.setState({ password: e.target.value })
}
onSubmit(e) {
  e.preventDefault()
 

  const userObject = {
      email: this.state.email,
      password: this.state.password
  };
  axios.post('http://127.0.0.1:8000/api/auth/login', userObject)
      .then((res) => {
         if(res.status=== 200){
          this.setState({
            loggedIN : true
          })
          localStorage.setItem('user', JSON.stringify(res.data))
         }
      }).catch((error) => {
          console.log(error)
          alert("login failed")
      });
  this.setState({ email: '', password: ''})
}

render() {
  if (this.state.loggedIN){
    return <Navigate  to="/dashboard"/>
  }
    

    // console.log(watch('username'));
    // const { register, handleSubmit, formState: { errors } } = useForm()
    // const onSubmit = data => console.log(data);
  return (
    <div className="test">
      <div>
        <a href="/" className="back">
          <BsFillArrowLeftCircleFill className="home1" />
        </a>
      </div>
        <div className="register">
            <div className="col-2">
                <h2>Sign In</h2>
                <span>register and enjoy our services</span>
                {/* <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}> */}
                <form id='form' className='flex flex-col' onSubmit={this.onSubmit}>
                    <input type="email" 
                    // {...register("email",  
                    // { required : true, maxLength: 30 })} 
                    placeholder='email' 
                    onChange={this.onChangeUserEmail}
                    name="email"
                    value={this.state.email} required
                    />
                    {/* <div className='error_msg'>
                    {errors.email?.type === "required" && "email required"}
                    </div> */}

                    <input type="password" 
                    // {...register("password",  
                    // { required : true, maxLength: 20 })} 
                    placeholder='password' 
                    onChange={this.onChangePassword}
                    name="password"
                    value={this.state.password} required
                    />
                    {/* <div className='error_msg'> */}
                    {/* {errors.username?.type === "maxLength" && "Max Length Exceed"} */}
                    {/* {errors.password?.type === "required" && "password required"} */}
                    {/* {errors.password?.type === "maxLength" && "password Max Length is 10 characters"} */}
                    {/* </div> */}
                    <button className='btn1' type="submit">Sign In</button>
                    <div>
                      <h5>Don't have an account?</h5>
                      <a href="/sign-up" className='btn_signin'>SIGN UP</a>
                    </div>
                </form>

            </div>
            <div className="col-1">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </div>
  )
}
}
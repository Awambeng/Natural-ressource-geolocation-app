import React, {Component} from 'react'
import bgImg from '../../assets/world.png';
// import { useForm } from 'react-hook-form';
import './sign_up.css'
import axios from 'axios';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        first_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }
}
onChangeFirstName(e) {
    this.setState({ first_name: e.target.value })
}

onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
}
onChangePassword(e) {
    this.setState({ password: e.target.value })
}
onChangePasswordConfirmation(e) {
    this.setState({ password_confirmation: e.target.value })
}
onSubmit(e) {
    e.preventDefault()

if(this.state.first_name.length<2 || this.state.first_name.length>20 ){
  alert("First-name should be between 2-20 charaters")
}

if(this.state.password.length<6 ){
  alert("Password should be greater then 5 charaters")
}

if(this.state.password !== this.state.password_confirmation ){
  alert("Enter same password in both fields")
}

    const userObject = {
        first_name: this.state.first_name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
    };
    axios.post('http://127.0.0.1:8000/api/auth/register', userObject)
        .then((res) => {
           console.log(res,"aaaaaaaaaaa");
            if(res.data.message === "User successfully registered"){
                alert("Registration Successful")
                window.location = "/sign-in";
            }
        }).catch((error) => {
            if(error.response.data ===  "{\"email\":[\"The email has already been taken.\"]}"){
              alert("The email has already been taken.")
            }
        });
    this.setState({ first_name: '', email: '', password: '', password_confirmation: '' })
}
    // const { register, handleSubmit, formState: { errors } } = useForm()
    // const onSubmit = data => console.log(data);

    // console.log(watch('username'));
  render() {
  return (
    <section className="test"> 
      <div>
        <a href="/" className="back">
          <BsFillArrowLeftCircleFill className="home2" />
        </a>
      </div>
      <div className="register">
            <div className="col-2">
                <h2>Sign Up</h2>
                <span>register and enjoy our services</span>

                <form id='fom' className='flex flex-col' onSubmit={this.onSubmit}>
                    <input type="text" 
                    placeholder=" username"
                    onChange={this.onChangeFirstName}
                    name="firstname"
                    value={this.state.first_name} required
                    // {...register("username",  { required : true, maxLength: 30 })} placeholder='username' 
                    />
                    {/* <div className='error_msg'> */}
                    {/* {errors.email?.type === "required" && "email required"} */}
                    {/* {errors.username?.type === "maxLength" && "username Max Length Exceed 30 characters"} */}
                    {/* </div> */}
                    <input type="email" 
                    placeholder="Enter email"
                    onChange={this.onChangeUserEmail}
                    name="email"
                    value={this.state.email} required
                    // {...register("email",  { required : true, maxLength: 30 })} placeholder='email'
                    />
                    {/* <div className='error_msg'>
                    {errors.email?.type === "required" && "email required"}
                    </div> */}
                    <input type="password" 
                    placeholder="Enter password"
                    onChange={this.onChangePassword}
                    name="password"
                    value={this.state.password} required
                    // {...register("password",  { required : true, maxLength: 10 })} placeholder='password' 
                    />
                    {/* <div className='error_msg'>
                    {errors.password?.type === "required" && "password required"}
                    {errors.password?.type === "maxLength" && "password Max Length is 10 characters"}
                    </div> */}
                    <input type="password" 
                    placeholder="Enter password"
                    onChange={this.onChangePasswordConfirmation}
                    name="confirmpassword"
                    value={this.state.password_confirmation} required
                    // {...register("password",  { required : true, maxLength: 10 })} placeholder='confirm password' 
                    />
                    {/* <div className='error_msg'>
                    {errors.password?.type === "required" && "password required"}
                    {errors.password?.type === "maxLength" && "password Max Length is 10 characters"}
                    </div> */}
                    <button className='btn1' type="submit">CREATE ACCOUNT</button>
                    <div>
                      <h5>Already have an account?</h5>
                      <a href="/sign-in" className='btn_signin'>SIGN IN</a>
                    </div>
                </form>

            </div>
            <div className="col-1">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
}
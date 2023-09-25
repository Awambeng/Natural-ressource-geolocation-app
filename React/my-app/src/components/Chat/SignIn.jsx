import React from 'react'
import GoogleButton from 'react-google-button'
import './stylenav.css'
import {auth} from '../../firebase'
import {GoogleAuthProvider, signInWithRedirect, signInWithPopup} from 'firebase/auth'

// const style = {
//     wrapper: `flex justify-center`
// }



const SignIn = () => {
  const googleSignIn =  async () => {
    const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth, provider);
    return signInWithPopup(auth, provider)
}
  return (
    <div className="wrapper">
      <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn

// import React from 'react'
// import GoogleButton from 'react-google-button'
// import './stylenav.css'
// import { auth } from '../../firebase'
// import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth'

// const provider = new GoogleAuthProvider()
// const authInstance = getAuth()

// const googleSignIn = () => {
//   signInWithRedirect(authInstance, provider)
// }

// const SignIn = () => {
//   return (
//     <div className="wrapper">
//       <GoogleButton onClick={googleSignIn} />
//     </div>
//   )
// }

// export default SignIn
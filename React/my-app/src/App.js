// import Dashboard from './Dashboard';
// import Chat from './chat';
// import SignIn from './components/Signin/SignIn';
// import SignUp from './components/signup/SignUp';
// import Sidebar from './components/Sidebar/Sidebar';
// import Logout from './components/Logout/Logout';
// // import Map from './components/Map/Map';
// // import './app.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Touristic from './components/Touristic/Touristic';
// import ListCategory from './components/Category/Listcategory';
// import EditCategory from './components/Category/Edit';
// import AddRes from './components/Resources/AddRes';
// import AddResAdmin from './components/ResourceAdmin/AddResAdmin';
// import ResourceTable from './components/Resources/ResourceTable';
// import ResourceAdmin from './components/ResourceAdmin/ResourceAdmin';
// import MyResourcesList from './components/Resources/MyResourcesList';
// import AdminPage from './components/AdminPage/AdminPage';
// import Citizen from './components/Citizen/Citizen';
// import ListCitizen from './components/Citizen/ListCitizen';
// import EditCitizen from './components/Citizen/EditCitizen';
// import Search from './components/Resources/Search';
// import EditResource from './components/ResourceAdmin/EditResource';
// import NewCategory from './components/Category/NewCategory';
// import Zone from './components/Zone/Zone';
// import NewZone from './components/Zone/NewZone';
// import EditZone from './components/Zone/EditZone';
// import Login from './components/AdminPage/Login';
// // import Chat from './components/Chat/Chat';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routes>
//         <Route path={"/"} Component={Dashboard} />
//         <Route path={"/login"} Component={SignIn} /> 
//         <Route path={"/login/admin"} Component={Login} /> 
//         <Route path={"/signup"} Component={SignUp} /> 
//         <Route path={"/sign-in"} Component={SignIn} /> 
//         <Route path={"/sign-up"} Component={SignUp} />
//         <Route path={"/home"} Component={Dashboard} />
//         <Route path={"/dashboard"} Component={Sidebar} />  
//         <Route path={"/logout"} Component={Logout} />
//         <Route path={"/touristic"} Component={Touristic} />
//         <Route path={"/cat"} Component={ListCategory} />
//         <Route path={"/addres"} Component={AddRes} />
//         <Route path={"/resource/admin/new"} Component={AddResAdmin} />
//         <Route path={"/new-category"} Component={NewCategory} />
//         <Route path={"/Category/List"} Component={ListCategory} />
//         <Route path={"/category/edit/:id"} Component={EditCategory} />
//         <Route path={"/all-resources"} Component={ResourceTable} />
//         <Route path={"/all-resources/admin"} Component={ResourceAdmin} />
//         <Route path={"/myres"} Component={MyResourcesList} />
//         <Route path={"/admin"} Component={AdminPage} />
//         <Route path={"/new-citizen"} Component={Citizen} />
//         <Route path={"/all-citizens"} Component={ListCitizen} />
//         <Route path={"/citizen/edit/:id"} Component={EditCitizen} />
//         <Route path={"/search/resource"} Component={Search} />
//         <Route path={"/resource/edit/:id"} Component={EditResource} />
//         <Route path={"/all-zones"} Component={Zone} />
//         <Route path={"/new-zone"} Component={NewZone} />
//         <Route path={"/zone/edit/:id"} Component={EditZone} />
//         <Route path={"/chat"} Component={Chat} />
//         {/* <Route path="/mapp" component={Map} /> */}
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import Dashboard from './Dashboard';
import Chat from './ChatMain';
import SignIn from './components/Signin/SignIn';
import SignUp from './components/signup/SignUp';
import Sidebar from './components/Sidebar/Sidebar';
import Logout from './components/Logout/Logout';
// import Map from './components/Map/Map';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Touristic from './components/Touristic/Touristic';
import ListCategory from './components/Category/Listcategory';
import EditCategory from './components/Category/Edit';
import AddRes from './components/Resources/AddRes';
import AddResAdmin from './components/ResourceAdmin/AddResAdmin';
import ResourceTable from './components/Resources/ResourceTable';
import ResourceAdmin from './components/ResourceAdmin/ResourceAdmin';
import MyResourcesList from './components/Resources/MyResourcesList';
import AdminPage from './components/AdminPage/AdminPage';
import Citizen from './components/Citizen/Citizen';
import ListCitizen from './components/Citizen/ListCitizen';
import EditCitizen from './components/Citizen/EditCitizen';
import Search from './components/Resources/Search';
import EditResource from './components/ResourceAdmin/EditResource';
import NewCategory from './components/Category/NewCategory';
import Zone from './components/Zone/Zone';
import NewZone from './components/Zone/NewZone';
import EditZone from './components/Zone/EditZone';
// import Chat from './components/Chat/Chat';
import React from 'react';
// import Navbar from './components/Chat/Navbar';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginAdmin from './components/AdminPage/Login';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
};

function App() {
  const [user] = useAuthState(auth);
  // console.log(user)
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        {/* <Navbar /> */}
        {/* {user ? <Chat /> : null} */}
      </section>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={Dashboard} />
          <Route path={"/login"} Component={SignIn} /> 
          <Route path={"/login/admin"} Component={LoginAdmin} /> 
          <Route path={"/signup"} Component={SignUp} /> 
          <Route path={"/sign-in"} Component={SignIn} /> 
          <Route path={"/sign-up"} Component={SignUp} />
          <Route path={"/home"} Component={Dashboard} />
          <Route path={"/dashboard"} Component={Sidebar} />  
          <Route path={"/logout"} Component={Logout} />
          <Route path={"/touristic"} Component={Touristic} />
          <Route path={"/cat"} Component={ListCategory} />
          <Route path={"/addres"} Component={AddRes} />
          <Route path={"/resource/admin/new"} Component={AddResAdmin} />
          <Route path={"/new-category"} Component={NewCategory} />
          <Route path={"/Category/List"} Component={ListCategory} />
          <Route path={"/category/edit/:id"} Component={EditCategory} />
          <Route path={"/all-resources"} Component={ResourceTable} />
          <Route path={"/all-resources/admin"} Component={ResourceAdmin} />
          <Route path={"/myres"} Component={MyResourcesList} />
          <Route path={"/admin"} Component={AdminPage} />
          <Route path={"/new-citizen"} Component={Citizen} />
          <Route path={"/all-citizens"} Component={ListCitizen} />
          <Route path={"/citizen/edit/:id"} Component={EditCitizen} />
          <Route path={"/search/resource"} Component={Search} />
          <Route path={"/resource/edit/:id"} Component={EditResource} />
          <Route path={"/all-zones"} Component={Zone} />
          <Route path={"/new-zone"} Component={NewZone} />
          <Route path={"/zone/edit/:id"} Component={EditZone} />
          <Route path={"/chat"} Component={Chat} />
          {/* <Route path={"/map"} Component={Map} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

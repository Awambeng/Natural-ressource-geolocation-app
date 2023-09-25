import Navbar from './components/Chat/Navbar';
import './components/Chat/stylenav.css';
import Chat from './components/Chat/Chat';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// const style = {
//   appContainer: `max-w-[728px] mx-auto text-center`,
//   sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
// };

function ChatMain() {
  const [user] = useAuthState(auth);
  return (
    <div className="appContainer">
      <section className="sectionContainer">
        {/* Navbar */}
        <Navbar />
        <Chat />
        {/* {user ? <Chat /> : null} */}
      </section>
    </div>
  );
}

export default ChatMain;

import './Styles/App.css';
import Header from './Components/Header'
import About from './Components/About'
import About2 from './Components/About2'
import Feature from './Components/Feature'
import Blog from './Components/Blog'
import DownloadApp from './Components/Download_app'
import Pricing from './Components/Pricing';
import SocialShare from './Components/Social_share'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
      <Header />
      <About />
      <About2 />
      <Feature />
      <Blog />
      <DownloadApp />
      <Pricing />
      <Contact />
      <SocialShare />
      <Footer />

    </div>
  );
}

export default App;

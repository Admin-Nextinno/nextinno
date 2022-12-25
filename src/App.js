import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Projects from './components/Projects/Projects';
import Expertise from './components/Expertise/Expertise';
// import Contact from './components/Contact/Contact';
import Section10 from './components/Section10/Section10';
import Footer from './components/Footer/Footer';
import whatsa from './whatsapp.png'
import Section5 from './components/Section5/Section5';

function App() {
  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };
  const onSubmit = () => {
    let number = 917907961290;
    let message = `Hi Nextinno, `;
    let url;
    const device = deviceType();
    if (device === "desktop") {
      url = `https://web.whatsapp.com/send?phone=${number}`;

      url += `&text=${encodeURI(message)}&app_absent=0`;
    } else {
      url = `whatsapp://send?phone=${number}`;
      url += `&text=${encodeURI(message)}&app_absent=0`;
    }
    window.open(url);

  };
  return (
    <div className="__nuxt">

      <div className='__layout'>
        <main>
          <img onClick={() => onSubmit()} className="whatsapp-logo-static" src={whatsa} alt="whatsapplogo" />

          <Header />
          <div>
            <div data-v-29faf9aa className="home">
              <div id='Home-scroll'>
                <Home />

              </div>
              <div id='Service-scroll'>
                <Service />

              </div>
              <div id='Expertise-scroll'>
                <Expertise />

              </div>
              <div id='Projects-scroll'>
                <Projects />

              </div>
              <Section5 />
              <div id='Contact-scroll'>
                <Section10 />

              </div>
              <Footer />
            </div>
          </div>
        </main>

      </div>

    </div>
  );
}

export default App;

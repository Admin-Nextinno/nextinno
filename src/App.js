import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Expertise/Service';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="__nuxt">
      <div className='__layout'>
        <main>
          <Header />
          <div>
            <div data-v-29faf9aa className="home">
              <Home />
              <Service />
              <Projects />

            </div>
          </div>
        </main>

      </div>

    </div>
  );
}

export default App;

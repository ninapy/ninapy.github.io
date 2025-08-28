import '../assets/styles/BrowserWindow.css';
import { useNavigate } from 'react-router-dom';
import cvPDF from "../assets/docs/CV Nina Py Brozovich.pdf";


export default function BrowserWindow({ children }) {
  const navigate = useNavigate();
  const handleOpenActivism = () => {
    // navigate('/about');
  };

  return (
    <div className="browser-window">
      <div className="browser-header">
        <div className="left-controls">
          <button className="back-btn">←</button>
          <input className="address-bar" placeholder="About me 𓆝 𓆟 𓆞" />
        </div>
        <div className="tab-bar">
          <div className="tab active">Nina Py Brozovich ✕</div>
        </div>
        <div className="window-controls">
          <button onClick={handleOpenActivism}>⌞ ⌝ </button>
        </div>
      </div>

      <div className="browser-body">
        <div className="body-title">
          <h3>✧About me✧</h3>

          <div className="title-icons">
            {/* Map Icon */}
            <a href="/map.html">
              <img src="/images/I1.png" alt="Map Icon" className="icon-btn" />
            </a>

            {/* CV Icon */}
            <a href={cvPDF} target="_blank" rel="noopener noreferrer">
              <img src="/images/I2.png" alt="CV Icon" className="icon-btn" />
            </a>
          </div>
        </div>

        <p className='text-body'> Bolivian 🇧🇴 French 🇫🇷</p>
        <p className='text-body'>CS + Math @<a href='https://www.brown.edu/' className='brown-link'>BrownUniversity</a> </p>
        <p className='text-body'>
          SWE&nbsp;
          <a href='https://www.infosys.com/instep.html' className='instep-link'>
            Instep&nbsp;
          </a>
          Intern @
          <a href='https://www.infosys.com' className='infosys-link'>
            Infosys
          </a> 🇮🇳
        </p>
        <p className='text-body'>Currently in Arusha, Tanzania 🇹🇿 <a href='https://studyabroad.sit.edu/program/fall-2025-tanzania-wildlife-conservation-and-political-ecology/' className='brown-link'>studying abroad</a> </p>

        <div className="about-icons">
          <a
            href="https://en.wikipedia.org/wiki/Nina_Py_Brozovich"
            target="_blank"
            rel="noopener noreferrer"
            className="wikipedia-icon"
          >
            <i className="fab fa-wikipedia-w"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nina-py-brozovich"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/ninapy"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        {children}
      </div>
    </div>
  )
}

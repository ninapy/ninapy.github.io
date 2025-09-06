import '../index.css'
import { Link } from 'react-router-dom'
import camera from '../assets/images/camera.png'
import phone from '../assets/images/phone.png'
import cell from '../assets/images/cell.png'

import BrowserWindow from '../components/BrowserWindow'
import NotepadWindow from '../components/NotepadWindow'
import FileExplorer from '../components/FileExplorer'
import WordWindow from '../components/WordWindow'
import VSCodeWindow from '../components/VSCodeWindow';
import IPodPlayer from '../components/iPodPlayer'
import { useState, useEffect } from 'react'

const fullName = 'Nina Py Brozovich'

export default function Home() {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')
  const [blink, setBlink] = useState(true)

  const [current, setCurrent] = useState(0)
  const imageCount = 7

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % imageCount)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let timeout

    if (phase === 'typing') {
      if (text.length < fullName.length) {
        timeout = setTimeout(() => {
          setText(fullName.slice(0, text.length + 1))
        }, 100)
      } else {
        setPhase('blinking')
      }
    }

    if (phase === 'blinking') {
      let blinkCount = 0
      const interval = setInterval(() => {
        setBlink(prev => !prev)
        blinkCount++
        if (blinkCount >= 20) {
          clearInterval(interval)
          setTimeout(() => setPhase('deleting'), 300)
        }
      }, 700)
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(fullName.slice(0, text.length - 1))
        }, 80)
      } else {
        setTimeout(() => setPhase('typing'), 500)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase])

  return (      
    <div className='desktop'>

      <div className='part1--'>
        <div className='name-section'>
          <h1 className="pixel-font">
            &gt;{text}
            <span className="cursor">{blink ? '_' : ' '}</span>
          </h1>
        </div>
        
        <div className="ipod-wrapper">
          <IPodPlayer />
        </div>
      </div>


      <div className='part2'>
        <div className='about-me'>
          <BrowserWindow />            
        </div>

        <div className='vscode-window'>
          <VSCodeWindow />
        </div>

        <div className='learning'>
          <FileExplorer />
        </div>
      </div>

      <div className='part3'>
        <NotepadWindow />

        <WordWindow>
          <span className='environmental-work-title' style={{ display: 'block', marginBottom: '0%' }}>°❀⋆.ೃ࿔* Environmental Work and Advocacy °❀⋆.ೃ࿔* </span>

          <span className='environmental-work'>Founder of Fridays For Future Bolivia and UNICEF #OneGeneration ambassador, I've represented youth at the UN's first Youth Climate Summit, volunteered for wildlife rescue and community initiatives in Bolivia and Tanzania, and published reporting on Bolivia's environmental crisis. Check out my work!</span>
          
          <div className="articles-section">
            <a
              className="article-box-simple"
              href="https://www.unicef.org/lac/en/press-releases/one-planet-unasolageneracion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/A3.jpg"
                alt="UNICEF #OneGeneration"
              />
              <span>UNICEF #OneGeneration</span>
            </a>

            <a
              className="article-box-simple"
              href="https://elpais.com/planeta-futuro/2020-11-20/retrato-de-la-generacion-mas-preocupada-por-el-clima-de-la-historia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/A1.jpg"
                alt="El País"
              />
              <span>El País</span>
            </a>

            <a
              className="article-box-simple"
              href="https://sendaverde.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/A4.JPG"
                alt="La Senda Verde"
              />
              <span>La Senda Verde</span>
            </a>
          </div>
        </WordWindow>


        <div className='media'>
          <div className='media-pt1'>

            <div className="camera-wrapper">
              <Link to="/media" className="camera-section">
              <img src={camera} className="camera-icon" alt="Camera" />
              <div className="camera-screen">
                <img
                  src={`/images/S${current + 1}.JPG`}
                  alt={`Photo ${current + 1}`}
                />
              </div>
              </Link>
            </div>

            <div className='phone-wrapper'>
              <Link to="/media" className="phone-section">
                <img src={phone} className="media-icon" alt="Phone" />
                <div className="phone-screen-text">
                  Read my blogs!
                </div>
              </Link>
            </div>
          </div>

          <div className='media-pt2'>
            <div className="cell-wrapper">
              <img src={cell} className="cell-icon" alt="Flip Phone" />

              <div className="cell-screen">
                <a href="mailto:nina_py_brozovich@brown.edu" title="Email me">
                  <img src="/images/M1.png" alt="Email icon" />
                </a>
                <a href="tel:+14013901841" title="Call me">
                  <img src="/images/M2.png" alt="Phone icon" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='footer'>
        <p className="footer-text">© 2025 ⋆⋅☆⋅⋆ made with ♡ by Nina</p>
      </div>

    </div>
  )
}

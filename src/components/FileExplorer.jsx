import '../assets/styles/FileExplorer.css'
import { useNavigate } from 'react-router-dom';

export default function FileExplorer() {
  const navigate = useNavigate();
  const handleOpenActivism = () => {
    // navigate('/projects');
  };

  return (
    <div className="file-explorer">
      <div className="explorer-title-bar">
        <span>Computer ▸ Projects (hover for description)</span>
        <div className="explorer-buttons">
          <button onClick={handleOpenActivism}>⌞ ⌝</button>
        </div>
      </div>

      <div className="explorer-toolbar">
        <button>⋆⭒˚｡⋆</button>
        <button>✰ ✰ ✰</button>
        <button>✧˖°.</button>
        <input className="explorer-search" placeholder="✧ Coding Projects ✧" />
      </div>

      <div className="explorer-body">
        <div className="explorer-sidebar">
          <div className="section">All Projects
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/Human-to-Robot-Facial-Expression-Mapping-with-Graph-Neural-Networks", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Trained a Graph Neural Network on 135k samples to map human facial landmarks to humanoid robot actuators with ~6° MAE."
                >
                  Human-to-Robot Facial Expression Mapping
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/You-Just-Want-Attention", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Implemented Transformer from 'Attention Is All You Need,' trained on Multi30k (BLEU 33.3 DE→ENG), with Whisper AI speech-to-text integration."
                >
                  You Just Want Attention!
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/AI-Go-Game-Solver", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Developed Go solver AI using Minimax, Alpha-Beta, and MCTS with policy/value networks for 5×5 and 9×9 boards."
                >
                  AI-Based Go Game Player
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/Stackoverflow-AI-Trends", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Analyzed 2008–2024 StackOverflow data with sentiment analysis, statistical test, and visualization for LLM impacts on engagement."
                >
                  Stack Overflow in the Age of AI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/Data-Analysis-of-Territory-Use-and-Activity-Patterns-of-the-Jaguar", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Analyzed ~7,000 jaguar GPS fixes to study road proximity and identify clusters for conservation planning (wildlife corridors)."
                >
                  Analysis of Jaguar Territory Use
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/LLL-Algorithm", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Implemented LLL lattice basis reduction and Gram–Schmidt orthogonalization in Python with NumPy, with tests and documentation."
                >
                  Gram-Schmidt and LLL-Algorithms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/AutoBrief-Multiagent-Brief-Generator", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Built multi-agent AI that converts diverse inputs into creative briefs with scheduling, task management, and multi-language support."
                >
                  AutoBrief
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/LanguageGo", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Website for practicing typing in non-Latin languages."
                >
                  LanguageGo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://devpost.com/software/guided-z2qek5", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Website providing university students with personalized professional opportunities, supported by AI."
                >
                  GuidED
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://github.com/ninapy/JavaFX-Pacman-Game", "_blank")}
                  className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                  title="Built an object-oriented Pacman game with ghost AI using BFS pathfinding, multiple game modes, and arcade mechanics."
                >
                  JavaFX Pacman Simulator
                </button>
              </li>
            </ul>
          </div>
        </div>



        <div className="explorer-content">
          <div className='github-projects'>
            {/* View All Projects */}
            <a href="https://github.com/ninapy" target="_blank" rel="noopener noreferrer" className="github-icon-projects">
              <i className="fab fa-github"></i>
              <span>See all my projects on GitHub!</span>
            </a>
          </div>

          {/* Row 1 */}
          <div className="projects">
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/Human-to-Robot-Facial-Expression-Mapping-with-Graph-Neural-Networks" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Trained a Graph Neural Network on 135k samples to map human facial landmarks to humanoid robot actuators with ~6° MAE."
              >
                <img src="/images/P8.png" alt="Human-to-Robot Mapping" className="project-logo" />
                <span>Human-to-Robot Facial Mapping</span>
              </a>
            </div>
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/AutoBrief-Multiagent-Brief-Generator" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Built multi-agent AI that converts diverse inputs into creative briefs with scheduling, task management, and multi-language support."
              >
                <img src="/images/P6.png" alt="AutoBrief" className="project-logo" />
                <span>AutoBrief</span>
              </a>
            </div>
          </div>

          {/* Row 2 */}
          <div className="projects">
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/You-Just-Want-Attention" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Implemented Transformer from 'Attention Is All You Need,' trained on Multi30k (BLEU 33.3 DE→ENG), with Whisper AI speech-to-text integration."
              >
                <img src="/images/P1.png" alt="You Just Want Attention" className="project-logo" />
                <span>You just want attention!</span>
              </a>
            </div>
            <div className='folder'>
              <a 
                href="https://devpost.com/software/guided-z2qek5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Website providing university students with personalized professional opportunities, supported by AI."
              >
                <img src="/images/P5.png" alt="GuidED" className="project-logo" />
                <span>GuidED</span>
              </a>
            </div>
          </div>

          {/* Row 3 */}
          <div className="projects">
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/AI-Go-Game-Solver" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Developed Go solver AI using Minimax, Alpha-Beta, and MCTS with policy/value networks for 5×5 and 9×9 boards."
              >
                <img src="/images/P7.png" alt="AI-Based Go Game Player" className="project-logo" />
                <span>AI-Based Go Game Player</span>
              </a>
            </div>
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/Stackoverflow-AI-Trends" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Analyzed 2008–2024 StackOverflow data with sentiment analysis, statistical test, and visualization for LLM impacts on engagement."
              >
                <img src="/images/P2.png" alt="StackOverflow AI Trends" className="project-logo" />
                <span>StackOverflow AI Trends</span>
              </a>
            </div>
          </div>

          {/* Row 4 */}
          <div className="projects">
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/Data-Analysis-of-Territory-Use-and-Activity-Patterns-of-the-Jaguar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Analyzed ~7,000 jaguar GPS fixes to study road proximity and identify clusters for conservation planning (wildlife corridors)."
              >
                <img src="/images/P9.png" alt="Jaguar Territory Analysis" className="project-logo" />
                <span>Jaguar Territory Analysis</span>
              </a>
            </div>
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/LanguageGo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Website for practicing typing in non-Latin languages."
              >
                <img src="/images/P4.png" alt="LanguageGo" className="project-logo" />
                <span>LanguageGo</span>
              </a>
            </div>
          </div>

          {/* Row 5 */}
          <div className="projects">
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/LLL-Algorithm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Implemented LLL lattice basis reduction and Gram–Schmidt orthogonalization in Python with NumPy, with tests and documentation."
              >
                <img src="/images/P3.png" alt="LLL Algorithm" className="project-logo" />
                <span>LLL-Algorithm</span>
              </a>
            </div>
            <div className='folder'>
              <a 
                href="https://github.com/ninapy/JavaFX-Pacman-Game" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="file-icon"
                title="Built an object-oriented Pacman game with ghost AI using BFS pathfinding, multiple game modes, and arcade mechanics."
              >
                <img src="/images/P10.png" alt="Pacman Simulator" className="project-logo" />
                <span>Pacman Simulator</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

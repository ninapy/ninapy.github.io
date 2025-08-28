import { useNavigate } from 'react-router-dom';
import '../assets/styles/VSCodeWindow.css';

export default function VSCodeWindow() {
  const navigate = useNavigate();

  const handleOpenSkills = () => {
    // navigate('/skills');
  };

  return (
    <div className="window-container">
      <div className="vscode-window">
        <div className="vscode-title-bar">
          <span>Visual Studio Code</span>
          <div className='vscode-buttons'>
            <button onClick={handleOpenSkills}>⌞ ⌝</button>
          </div>
        </div>

        <div className="vscode-toolbar">
          <span className="window-tab">skills.py ✕</span>
          <input type="text" placeholder="❀˖° My skills ❀˖°" />
        </div>

        <div className="vscode-body">
          <div className="code-line">
            <span className="comment">// Skills:</span>
          </div>
          <div className="skills-tags">
            {[
              'Python', 'Java', 'C', 'C++', 'JavaScript',
              'CSS', 'HTML', 'Vite', 'Firebase', 'SQLite',
              'MySQL', 'Keras', 'Matplotlib', 'NumPy', 'Pandas',
              'PyTorch', 'scikit-learn', 'TensorFlow',
              'GitHub', 'LaTeX', 'Figma', 'React', 'Node.js'
            ].map((skill, index) => (
              <span
                key={index}
                className={`skill-tag ${skill.toLowerCase().replace('+', 'plus').replace(/\s+/g, '')}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="vscode-footer">
          <span className="left">● main</span>
          <span className="right">Ln 1, Col 1  |  UTF-8  |  React  |  Local</span>
        </div>
      </div>
    </div>
  );
}

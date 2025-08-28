import { useNavigate } from 'react-router-dom';
import '../assets/styles/WordWindow.css';

export default function WordWindow({ children }) {
  const navigate = useNavigate();

  const handleOpenActivism = () => {
    // navigate('/activism');
  };

  return (
    <div className="word-window">
      <div className="word-title-bar">
        <span>Environmental Work - Microsoft Word</span>
        <div className="window-buttons">
          <span>💖</span>
          <span>💖</span>
          <span>💖</span> &nbsp;
          <button onClick={handleOpenActivism}>⌞ ⌝</button>
        </div>
      </div>

      <div className="word-toolbar">
        <div className="menu-row">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Insert</span>
          <span>Format</span>
          <span>Tools</span>
          <span>Table</span>
          <span>Window</span>
          <span>Help</span>
        </div>

        <div className="formatting-row">
          <select>
            <option>Normal</option>
            <option>Heading</option>
          </select>
          <select>
            <option>Times New Roman</option>
            <option>Comic Sans</option>
          </select>
          <select>
            <option>12</option>
            <option>14</option>
          </select>

          <div className="icon-buttons">
            <button><b>B</b></button>
            <button><i>I</i></button>
            <button><u>U</u></button>
          </div>
        </div>
      </div>

      <div className="word-body">
        {children}
      </div>

      <div className="word-status-bar">
        <span>Page 1</span>
        <span>Sec 1</span>
        <span>1/1</span>
        <span>Ln 1</span>
        <span>Col 1</span>
      </div>
    </div>
  );
}

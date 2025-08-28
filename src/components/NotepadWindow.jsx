import '../assets/styles/NotepadWindow.css'

export default function NotepadWindow({ children }) {
  return (
    <div className="notepad-window">
      <div className="notepad-title-bar">
        <span className="title-text">Research Experience - Notepad</span>
        <div className="notepad-controls">
          <span className="notepad-btn">▭</span>
          <span className="notepad-btn">☐</span>
          <span className="notepad-btn">✕</span>
        </div>
      </div>
      <div className="notepad-menu-bar">
        <span>File</span>
        <span>Edit</span>
        <span>Format</span>
        <span>View</span>
        <span>Help</span>
      </div>

      <div className="notepad-content">
        <div className='title-content'><b>Research Experience</b></div>

        <div className='notepad-body'>
          <a
            className="research-experience"
            href="https://github.com/ninapy/Human-to-Robot-Facial-Expression-Mapping-with-Graph-Neural-Networks"
          >
            <img
              src="/images/R01.png"
              alt="facemesh"
            />
            <span><b>@Infosys 🇮🇳</b> Human-to-Robot Facial Expression Mapping with GNNs</span>
          </a>


          <a
            className="research-experience"
            href="https://turquoise-laundry-fe5.notion.site/Humanoid-Robot-Development-Project-107bf89ad314809885b3c6a4679f54f2"
          >
            <img
              src="/images/R1.png"
              alt="Humanoid Robot Project"
            />
            <span>@BrownUniversity Humanoid Robot Project</span>
          </a>


          <a
            className="research-experience"
            href="https://sites.google.com/southalabama.edu/tbil/"
          >
            <img
              src="/images/R2.png"
              alt="Inquiry Team-Based Learning in intro Mathetematics"
            />
            <span>@BrownUniversity Inquiry Team-Based Learning in Intro Mathetematics</span>
          </a>
          {children}
        </div>
      </div>
    </div>
  )
}

import { useState, useRef } from 'react'
import '../assets/styles/IPodPlayer.css'

const songs = [
  {
    title: '💖 Weltita',
    file: '/music/track1.mp3',
    cover: '/covers/track1.png',
  },
  {
    title: '🌸 Push2Start',
    file: '/music/track2.mp3',
    cover: '/covers/track2.jpeg',
  },
  {
    title: '🌸 L`amour de ma vie',
    file: '/music/track3.mp3',
    cover: '/covers/track3.png',
  },
  {
    title: '💖 Something ain`t right',
    file: '/music/track4.mp3',
    cover: '/covers/track4.jpeg',
  },
]

export default function iPodPlayer() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  const next = () => {
    const nextIndex = (index + 1) % songs.length
    setIndex(nextIndex)
    setPlaying(true)
    setTimeout(() => audioRef.current.play(), 0)
  }

  const prev = () => {
    const prevIndex = (index - 1 + songs.length) % songs.length
    setIndex(prevIndex)
    setPlaying(true)
    setTimeout(() => audioRef.current.play(), 0)
  }

  const song = songs[index]

  return (
    <div className="ipod">
      <div className="screen">
        <img src={song.cover} alt="cover" />
        <p>{song.title}</p>
      </div>

      <div className="wheel">
        <button className="btn prev" onClick={prev}>⏮</button>
        <button className="btn play" onClick={togglePlay}>
          {playing ? '⏸' : '▸'}
        </button>
        <button className="btn next" onClick={next}>⏭</button>
        <div className="center-circle"></div>
      </div>

      <audio ref={audioRef} src={song.file} preload="auto" />
    </div>
  )
}

import './App.css'
import profile from '/eisntein.jfif'
import { useState, useRef, useEffect } from 'react'

function Invitation({
  name = 'Your Name',
  title = 'Graduation Ceremony',
  place = 'Main Hall, University Campus',
  place2 = '',
  time = 'Saturday, June 14 — 3:00 PM',
  note = "I'd be honored if you could join me to celebrate this milestone.",
  contact = 'email@example.com',
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const handleTrackPlay = () => {
    // pause background music when user plays the track
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleTrackEnded = () => {
    // optionally resume background music when track ends
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  // Christmas surprise state
  const [isChristmas, setIsChristmas] = useState(false)
  const christmasRef = useRef(null)

  // Slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    '/eisntein.jfif',
    '/kimjonun.jfif',
    '/normal.png',
    '/alone.png',
    '/billie.png',
    '/ed.png',
    '/elon.png',
    '/faker.png',
    '/gabe.png',
    '/hideo.png',
    '/hidetaka.png',
    '/homelander.png',
    '/jojo.png',
    '/keanu.png',
    '/kratos.png',
    '/mikasa.png',
    '/mike.png',
    '/normal.png',
    '/pewdiepie.png',
    '/rock.png',
    '/slender.png',
    '/smosh.png',
    '/spidey.png',
    '/trump.png',
    '/white.png',
    '/saitama.png'
  ]

  useEffect(() => {
    if (isChristmas) {
      // attempt to play christmas audio when enabled
      if (christmasRef.current) {
        // play is allowed because user interaction (button click) triggered this
        christmasRef.current.play().catch(() => {})
      }
    } else {
      if (christmasRef.current) {
        christmasRef.current.pause()
        christmasRef.current.currentTime = 0
      }
    }
  }, [isChristmas])

  // Slideshow effect (only when not in Christmas mode)
  useEffect(() => {
    if (isChristmas || images.length === 0) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isChristmas, images.length])

  const toggleChristmas = () => {
    const willEnable = !isChristmas
    setIsChristmas(willEnable)
    if (willEnable) {
      // pause background music when enabling surprise
      if (audioRef.current) {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    } else {
      // when disabling, resume background music
      if (audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <main className={`inv-root ${isChristmas ? 'christmas' : ''}`}>
      <audio ref={audioRef} loop autoPlay>
        <source src="/solo1.m4a" type="audio/mpeg" />
      </audio>
      <button className="inv-music-btn" onClick={toggleMusic} title={isPlaying ? 'Turn off music' : 'Turn on music'}>
        {isPlaying ? '♪' : '✕'}
      </button>
      <button className="inv-surprise-btn" onClick={toggleChristmas} title="Another surprise">
        🎁
      </button>
      <div className="inv-thank-you">
        <p className="inv-thank-you-text">An invitation for you guys </p>
      </div>
      
      <div className="inv-title-top">
        <h2 className="inv-page-title">{title}</h2>
      </div>
      
      <article className="inv-card inv-card-fade">
        <div className="inv-photo-side">
          <img src={isChristmas ? '/xmas_santa.png' : images[currentImageIndex]} alt="profile" className="inv-photo" />
        </div>

        <div className="inv-info">
          <header className="inv-header">
            <h1 className="inv-name">{name}</h1>
          </header>

          <div className="inv-details">
            {place2 && <p className="inv-place inv-place-strikethrough">📍 {place2}</p>}
            <p className="inv-place">📍 {place}</p>
            <p className="inv-time">⏰ {time}</p>
          </div>
          <p className="inv-note">{note}</p>

          <div className="inv-player">
            <div className="inv-player-meta">
              <strong className="inv-player-title">A gift from me</strong>
              <span className="inv-player-sub">— Michael</span>
            </div>
            <audio
              ref={trackRef}
              controls
              className="inv-player-audio"
              src="/talktpme3.m4a"
              onPlay={handleTrackPlay}
              onEnded={handleTrackEnded}
            >
              Your browser does not support the audio element.
            </audio>
            <a className="inv-player-download" href="/talktpme3.m4a" download>
              Download
            </a>
          </div>

          <div className="inv-player">
            <div className="inv-player-meta">
              <strong className="inv-player-title">And another one</strong>
              <span className="inv-player-sub">— Michael</span>
            </div>
            <audio
              controls
              className="inv-player-audio"
              src="/pent.m4a"
            >
              Your browser does not support the audio element.
            </audio>
            <a className="inv-player-download" href="/pent.m4a" download>
              Download
            </a>
          </div>

          <footer className="inv-contact">
            <strong>Contact:</strong> <a href={`mailto:${contact}`}>{contact}</a>
          </footer>
        </div>
      </article>
      {isChristmas && (
        <>
          <audio
            ref={christmasRef}
            src="/xmas.mp3"
            loop
            autoPlay
            className="inv-christmas-audio"
          >
            Your browser does not support the audio element.
          </audio>

          <div className="snow-container" aria-hidden="true">
            {Array.from({ length: 30 }).map((_, i) => {
              const left = Math.round(Math.random() * 100)
              const delay = (Math.random() * 5).toFixed(2)
              const duration = (5 + Math.random() * 8).toFixed(2)
              const size = Math.round(6 + Math.random() * 8)
              const opacity = (0.5 + Math.random() * 0.6).toFixed(2)
              return (
                <span
                  key={i}
                  className="flake"
                  style={{
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                  }}
                />
              )
            })}
          </div>
        </>
      )}
    </main>
  )
}

// Note: we render the YouTube player inside the component's returned DOM when isChristmas === true
// The iframe will be inserted conditionally in the JSX below (CSS handles fixed positioning).

export default function App() {
  return (
    <Invitation
      name="Nguyễn Minh Bảo Ân (Michael)"
      title="Graduation Ceremony (Lễ tốt nghiệp)"
      place="Đại học Bách Khoa Tòa A4 268 Đ. Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh"
      place2="77 Massachusetts Avenue, Cambridge, MA 02139, United States, Sep 31st 10am GMT-5"
      time="Sunday, November 30 2025 — 3:20 PM UTC+7 "
      note="- Tăng 1 3:30 pm to 5pm : ở trường quậy 
- Tăng 2 5pm to 7pm : nhậu + bbq đến 7pm (Bogo BBQ Buffet - Quận 3)
- Tăng 3 7pm to 9pm : karaoke xong vác đít đi về (Karaoke KTV 199 Điện Biên Phủ)

Oh yea I got some gifts for ya , some self records and buttons at the left corners"
      contact="0941930803"
    />
  )
}

import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'
import facebookIcon from '../../assets/Facebook_logo.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Sana</span>
        <span>Nayyab</span>
      </a>
      <div>
        <p>
          Made by <img src={reactIcon} alt="React" /> Sana Nayyab
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/sana-nayyab-0b231b171/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/sananayab"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/s.nayyab4/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://discord.com/users/smilepk9#6511"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
        <a
          href="https://www.facebook.com//profile.php?id=100008439577139"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </div>
    </Container>
  )
}

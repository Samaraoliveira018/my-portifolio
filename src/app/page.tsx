import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btns/social-btns'
import "./styles/home.scss"

export default function Home() {
  return (

    <main className="container">
        <Header/>
        <Experience/>
        <Info/>
        <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href="mailto:samaraoliv.dev@gmail.com">
          contact me
            <EmailIcon/>
          </a>
        </div>
    </main>
  )
}
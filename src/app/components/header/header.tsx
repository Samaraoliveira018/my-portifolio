import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
          <h1>Hi, I&apos;m Samara! 👋</h1>
          <h2>Software Engineer</h2>

          </div>
          <Image
            src="/me.png"
            alt="samara"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}
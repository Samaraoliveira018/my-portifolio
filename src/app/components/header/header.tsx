import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
          <h1>Hi, I&apos;m Samara! 👋</h1>
          <h2>Dev Front End</h2>

          </div>
          <Image
            src="/me.png"
            alt="samara"
            width={240}
            height={260}
            priority
          />
        </div>
    )
}
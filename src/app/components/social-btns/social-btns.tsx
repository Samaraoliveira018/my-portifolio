import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/samaraoliveiraab/">
                <InstaIcon/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/samara-oliveira-2ab639347/">
                <LinkedInIcon/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="http://github.com/Samaraoliveira018">
                <GitHubIcon/>
            </a>
        </div>
    )
}
import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"
import Image from "next/image";

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          
          <span>
            <Image src="/US.png" alt="us" width={20} height={20} />
            EN - Basic
          </span>

          <span>
            <Image src="/br.png" alt="br" width={20} height={20} />
            PT-BR - Native Speaker
          </span>

        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Studying Systems Analysis and Development - Estácio</span>
        </div>
      </div>
    )
}
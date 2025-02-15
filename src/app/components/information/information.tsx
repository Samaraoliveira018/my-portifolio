import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>
             <img src="./US.png" alt="us" />
              EN - Basic</span>

          <span>
            <img src="./br.png" alt="br" />
            PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Studying Systems Analysis and Development - Estácio</span>
        </div>
      </div>
    )
}
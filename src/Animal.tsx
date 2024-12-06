import "./Animal.css";

interface AnimalProps{
    icone: string;
    nome:string;
    peso:number;
    extincao:boolean;
}

export default function Animal({icone, nome, peso, extincao}:AnimalProps){
    if(extincao){
        return <div className="animal">
            <div className="icone">{icone}</div>
            <div className="nome">{nome}</div>
            {peso>0.0?(
                <div className="peso">{peso.toLocaleString()+" Kg"}</div>
            
                ):(
                    <div className="peso">Desconhecido</div>
                )
            }   
            {extincao && <div className="extincao">Em extinção</div>}
        </div>
    }
}
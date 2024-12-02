import "./Animal.css";

interface AnimalProps{
    icone: string;
    nome:string;
    peso:number;
    extincao:boolean;
}

export default function Animal({icone, nome, peso, extincao}:AnimalProps){
    return <div className="animal">
        <div>{icone}</div>
        <div>{nome}</div>
        <div>{peso+" Kg"}</div>
        <div>{extincao}</div>
    </div>
}
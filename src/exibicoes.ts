type ExibicaoTuplaType=[string,string,string,AnimaisTuplaType[]];

export type AnimaisTuplaType=[string,string,number,boolean];



const EXIBICOES: Array<ExibicaoTuplaType> = [
  ["A1","024-11-05T08:00-03:00","2024-11-05T16:00-03:00",[
    ["🦭","Foca",97.3,true],
    ["🦈","Tubarão",1508.3,true],
    ["🐋","Baleia",2015.20,true],
  ]],
  ["B2","024-11-05T13:00-03:00","2024-11-05T19:00-03:00",[
    ["🪼","Água viva",3.20,false],
    ["🦀","Carangueijo",0.473,false],
  ]],
]

export default EXIBICOES
let Wins = prompt("Quantas vitorias?","Digite elas");
let Losses = prompt("Quantas perdas?", "Digite elas");
let Saldo = RankCalc(Wins, Losses);
let lvl = "Ferro";

switch(true){ 
case Saldo < 10:
 lvl =  "Ferro";
 break;
 case Saldo > 10 && Saldo < 21:
 lvl = "Bronze";
 break;
  case Saldo > 20 && Saldo < 51:
 lvl =  "Prata";
 break;
  case Saldo > 50 && Saldo < 81:
 lvl = "Ouro";
 break;
  case Saldo > 80 && Saldo < 91:
 lvl = "Diamante";
 break;
  case Saldo > 90 && Saldo < 100:
lvl = "Lendário";
 break;
  case Saldo >= 100:
 lvl = "Imortal";
 break;
}
console.log("O Herói tem de saldo de " + Saldo +  " está no nível de " + lvl);

function RankCalc(numA, numB){
  let Calc = numA - numB;
  return Calc;
}

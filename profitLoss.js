let initialPrice=document.querySelector("#initial-price");
let  stockQuantity=document.querySelector("#stock-quantity");
let currentPrice=document.querySelector("#current-price");
let button=document.querySelector("button")
let output=document.querySelector("#output");



let calcProfitLoss=(initialPrice,quantity,currentPrice)=>{
    if(initialPrice>currentPrice){
          let loss=(initialPrice-currentPrice)*quantity;
          let lossPerc=(loss/initialPrice)*100;
          output.classList.add("red");
          output.innerHTML=` No worries, the Loss   is ${loss} and the profit percentage is ${lossPerc}`
    }else if(currentPrice>initialPrice){
  let profit =(currentPrice-initialPrice)*quantity;
  let profitPerc=(profit/initialPrice)*100;
  output.classList.add("green");
  output.innerHTML=` Hurray!! the profit  is ${profit} and the profit percentage is ${profitPerc}`
    }else{
      output.innerHTML="Nor Profit Neither Loss";
    }

}
let submit=()=>{
    let ip=Number(initialPrice.value);
    let qt=Number(stockQuantity.value);
    let cp=Number(currentPrice.value);
    checkVal(ip,qt,cp);
}

let checkVal=(ip,qt,op)=>{
    console.log(ip,qt,op)
    if(ip<0 || qt<0 ||op<0){
        output.innerHTML="Please provide positive values"
    }else{
    if(ip==="" && qt===""  && op===""){
        output.innerHTML="Please Provide All the Values";
    }else{
        calcProfitLoss(ip,qt,op);
    }
}

}



button.addEventListener("click",submit)
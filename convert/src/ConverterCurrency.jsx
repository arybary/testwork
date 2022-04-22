import React, { useState, useEffect } from "react";
import Converter from "./Converter";

const fetchCurrency = (currency) =>  fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&json`)
;

const ConverterCurrency =()=> { 
 const[dataCurrency, setDataCurrency]=useState({data: null, Usd: null, Eur:null});
 
  const infoCurrency = async () => {
    const responceUSD = await fetchCurrency('USD');
    const infoUSD = (await responceUSD.json())[0];

    const responceEUR = await fetchCurrency('EUR');
    const infoEUR = (await responceEUR.json())[0];
setDataCurrency({data:infoUSD.exchangedate , Usd: infoUSD.rate, Eur: infoEUR.rate})
  };


  useEffect(() => {
    infoCurrency();
  }, []);
  const{data, Usd, Eur}=dataCurrency;

    return (
      <><header><div className="time">{data}</div>
      <div className="currency"><span>{`USD: ${Usd} UAH`}</span><span>{`EUR: ${Eur} UAH`}</span></div></header>
    <div>Примітка: Поточного дня буде відображатися офіційний курс гривні до іноземних валют, встановлений НА ЗАВТРА за схемою:

До 15:30* – відображається лише офіційний курс гривні до іноземних валют, що встановлюється 1 раз на місяць.
Після 15:30* - офіційний курс, зазначений у п.1, та офіційний курс гривні до іноземних валют, що встановлюється щодня.
* пункт 4 Порядку встановлення офіційного курсу гривні до іноземних валют та розрахунку довідкового значення курсу гривні до долара США й облікової ціни банківських металів та їх оприлюднення від 01.03.2021 № 79-рш (зі змінами, внесеними рішенням Правління НБУ від 31.12.2021 № 659-рш).</div>
     <Converter usd={Usd} eur={Eur} />
     
      </>
    );

}
export default ConverterCurrency;

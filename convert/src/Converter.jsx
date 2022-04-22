import React, { useState } from "react";


const Converter =({usd,eur})=> {
 const[value,setValue]=useState({start:0,end:0, selectStart:1, selectEnd:1})


    const selectChangeStart = (e) => {
      setValue({start:value.start,
      end:(value.start*e.target.value/value.selectEnd).toFixed(2),
      selectStart:e.target.value,
      selectEnd:value.selectEnd});
          };
      const selectChangeEnd = (e) => {
        setValue({start:(value.end*e.target.value/value.selectStart).toFixed(2),
      end:value.end,
      selectStart:value.selectStart,
      selectEnd:e.target.value});
          };
        const handleChangeStart = (e) => {
          setValue({start:e.target.value,end:(e.target.value *value.selectStart/value.selectEnd).toFixed(2),selectStart:value.selectStart,selectEnd:value.selectEnd});
          };
          const handleChangeEnd = (e) => {
            setValue({end:e.target.value,start:(e.target.value *value.selectEnd/value.selectStart).toFixed(2),selectStart:value.selectStart,selectEnd:value.selectEnd});
            };
console.log(value)

    return (
      <div className="create-task">
            <input
          className="create-task__input"
          type="text"
          value={value.start}
          onChange={handleChangeStart}
        />
          <select name="select" onChange={selectChangeStart}>
  <option value={1} >UAH</option>
  <option value={eur} >EUR</option>
  <option value={usd}>USD</option>
</select>
<input
          className="create-task__input"
          type="text"
          value={value.end}
          onChange={handleChangeEnd}
        />
           
       <select name="select" onChange={selectChangeEnd}>
  <option value={1} >UAH</option>
  <option value={eur} >EUR</option>
  <option value={usd}>USD</option>
</select>
        
     
      </div>
    );
  }


export default Converter;

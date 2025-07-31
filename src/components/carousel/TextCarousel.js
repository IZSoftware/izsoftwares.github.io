import React, { useState } from 'react'
import './carousel.css'

function TextCarousel() {
    const Words = [{value:"An array"},{value: "of strings"},{value: "to pass the component"}];
    const [wordsData, setWordsData] = useState(Words[0].value)
const handleClick=(index)=>{
  console.log(index);
  const wordds = Words[index].value
  setWordsData(wordds)
}
  return (
    <div>
      {wordsData}
      {Words.map((item,id)=>(
        <div>
          <div className='flexxx' onClick={()=>handleClick(id)}>.hhh</div>
        </div>
      ))}
    </div>
  )
}

export default TextCarousel
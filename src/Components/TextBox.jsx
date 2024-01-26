import React, { useEffect, useState } from 'react'

function TextBox() {
  const text = 'My name is Akash kumar';
  const textArr = [...text]
  let count = 0;
  let [word, setWord] = useState('')


  useEffect(()=>{
    const TypingText = setInterval(()=>{
      if(count < textArr.length - 1){
        setWord((prevWord) =>{
          return prevWord + textArr[count]
          })
          count += 1;
      }else{
        clearInterval(TypingText);
      }
    },50)
    return () => clearInterval(TypingText);
  }, []);

  return (
    <div className='w-96'>
      <h3 className='text-center font-bold text-3xl'>HELLO WORLD</h3>
      <p className='py-4 text-lg text-gray-300 font-semibold font-mono text-center'>
        {word}
      </p>
    </div>
  )
}

export default TextBox

import React from 'react'
import arrayPhrases from '../utils/phrases.json'
import getRandom from '../services/getRandom'
import arrayImages from '../utils/images.json'

// const arrayImages = [1,2,3,4]

const ButtonPhrase = ({setPhrases, setImage}) => {
    
    const handlePhrase = () => {
        setPhrases(getRandom(arrayPhrases))
        setImage(getRandom(arrayImages))
        // setPhrases('Este es el nuevo valor')
    }

    // const handleImage = () => {
    //     setImage(getRandom(arrayImages))
    // }


  return (
    <div>
        <button onClick={handlePhrase} className='btn'>Probar mi suerte</button>
    </div>
  )
}

export default ButtonPhrase
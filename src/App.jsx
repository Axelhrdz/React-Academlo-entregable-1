
import './App.css';
import arrayPhrases from './utils/phrases.json';
import getRandom from './services/getRandom';
import { useState } from 'react';
import ShowPhrase from './components/ShowPhrase';
import ButtonPhrase from './components/ButtonPhrase';
import arrayImages from './utils/images.json';
// const arrayImages = [1,2,3,4]

function App() {

  const [phrase, setPhrases] = useState(getRandom(arrayPhrases))

  console.log(phrase['phrase'])
  // console.log(getRandom(arrayImages))

  // const image = getRandom(arrayImages)
  // console.log(image)
  
  const [image, setImage] = useState(getRandom(arrayImages))


  const objStyles = {
    // backgroundImage: `url(../public/assets/fortuna-2/fondo${image}.png)`,
    // backgroundImage: `url(/public/fortuna-2/fondo${image}.png)`,
    backgroundImage: `url(../fortuna-2/fondo${image}.png)`,
  }

  return (
    <>
      <div className='app' style={objStyles}>
        <h1 className='app__title'>Galletas de la fortuna</h1>
        <ButtonPhrase
          setPhrases={setPhrases}
          setImage={setImage}
        />
        <ShowPhrase
          phrase={phrase}
        />
      </div>
    </>
  )
}

export default App

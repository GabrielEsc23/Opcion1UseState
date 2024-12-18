
import './eslilos/App.css'
import PersonalInfo from './components/InfoPersonal'
import SportsGallery from './components/deportes'
import Studies from './components/estudios'
import Tools from './components/herramientas'
import Formulario from './components/formulario'



function App() {
  

  return (
    <>
    <div className='body'>
    <PersonalInfo/>
        <Studies/>
        <Tools/>
        <SportsGallery/>
        <Formulario/>
    </div>
        
        
        
    </>
  )
}

export default App

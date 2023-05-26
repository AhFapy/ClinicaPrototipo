import Navbar from '../components/navbar'
import Footer from '../components/footer'


export default function Home(){
 
  
  return (
    <>
    <Navbar>
    </Navbar>
        <main>
          <div className='contacta'>
            <div className='contacta-container'>

            <h1 className='contacta-header'>Bienvenido al portal virtual de Órbita Med</h1>
            <br/>

            <p className='contacta-text'>En las clínicas de <strong>Orbita Med</strong> garantizamos servicios de máxima calidad en Madrid</p>
            <p className='contacta-text'>Contacta con nosotros mediante nuestro número de <strong>atención al cliente</strong></p>
            <a aria-label="Chat on WhatsApp" href=""><img alt="Chat on WhatsApp" src="https://i.imgur.com/gEyIfmR.png"/>
              </a>
          

            </div>
          </div>

          <div className='ubicacion'>
            <h1 className='ubicacion-h1'>Encuéntranos</h1>
            <br></br>
            <p>En esta localización puedes realizar tu primera consulta</p>
            <br></br>
            <p>Dirígete a la ubicación marcada en el mapa para que te podamos atender</p>
            <iframe className='ubicacion-embed' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47211.79244286353!2d-3.6731841770565428!3d40.4265656205073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228aed26288b7%3A0xf3d3fe114341e1fd!2sHospital%20General%20Universitario%20Gregorio%20Mara%C3%B1%C3%B3n!5e0!3m2!1ses!2ses!4v1685087161604!5m2!1ses!2ses"></iframe>
          </div>
        </main>

        <Footer/>
        
    </>
  )
}

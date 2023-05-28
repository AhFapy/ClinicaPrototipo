import React from 'react'

const Servicio = (props) => {
  const styles = {
    width: '30vw',
    height: '50vh',
    marginTop: '5vh',
    backgroundColor: 'aqua',
    backgroundImage: `url(${props.img})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover" 
 }

  return (
    <div>
        <div className={props.clase} style={styles}>
          </div>
    </div>
  )
}

export default Servicio

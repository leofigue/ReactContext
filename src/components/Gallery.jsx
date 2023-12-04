import { useContext } from 'react';
import { JsonContext } from "../context/JsonContext";
import IconHeart from './IconHeart';



const Gallery = ({filtrar}) => {

  const {fotos, setFotos} = useContext(JsonContext)

  var mostrar = filtrar==true ? 'hidden' : 'visible'

  const favorito = (id) => {
    const actualiza = fotos.map((foto)=>{
      if(id == foto.id )
        foto.liked = foto.liked==true ? false : true
      return foto
    })
    setFotos(actualiza)
  }

  return <div className="gallery grid-columns-5 p-3">
    {fotos.filter((foto)=>{
      return(filtrar ? foto.liked : foto)
    }).map((foto) => {
      return (
        <div className='photo'  key={foto.id} style={{backgroundImage: `url(${foto.src.tiny})`}}  >
          
          <div style={{textAlign:'right', width:'100%', visibility:mostrar}}>
          <span
              onClick={() => favorito(foto.id)}
              role="button"
              
            >
              <IconHeart filled={foto.liked}></IconHeart>
            </span>
        </div>
        <div style={{visibility:mostrar}}>{foto.alt}</div>
          
          

        </div>
      );
    })}
  </div>;
};
export default Gallery;

import React from 'react'
import style from './result.module.css'
import remove from '../png/remove.png'



let Chosen = (props) => {

 return (
 
 	  <div className={style.div}>

         {props.chosen.map(e => { 
         	
         	return( 

                <div className={style.chosen}>
                     <div>
                         <img src={e.image}/>
                     </div>
                     <div>
                        <b className={style.b}>{e.title}</b>
                      <p className={style.p}>{e.description}</p>
                     </div>
                     <div>
                          <a onClick={() => {if(window.confirm("Are you sure?")){props.removed(e, e.id)}}}>
                             <img src={remove}/>
                          </a> 
                     </div>
                </div>  )
                        })}
 	  </div>
 	

 	)

}

export default Chosen


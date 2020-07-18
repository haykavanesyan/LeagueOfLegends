import React from 'react'
import * as axios from 'axios'



export let SearchAPI = (value) => {
 
   return  axios.get(`https://api-search.win.gg/search?q=${value}&index=tournament`)
}
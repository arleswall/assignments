import {meme} from "./addMeme";

const state = {
  meme: []
}

const reducer = function(prevState=state, action){
  return{
    meme: meme(prevState.meme, action)
  }
}

export default reducer

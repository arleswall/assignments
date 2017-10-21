export function meme(prevMeme = [], action){
  let newMeme = [...prevMeme]
  switch(action.type){
    case "ADD_MEME":
    newMeme.push(action.meme);
    return newMeme;
    case "DELETE_MEME":
    newMeme.splice(action.index, 1);
    return newMeme;
    default:
    return prevMeme;
  }
}
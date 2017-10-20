export function meme(prevMeme = [], action){
  let newMeme = [...prevMeme]
  switch(action.type){
    case "ADD_MEME":
    newMeme.push(action.meme);
    return newMeme;
    default:
    return prevMeme;
  }
}
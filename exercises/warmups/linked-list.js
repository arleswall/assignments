function linkedList(n){
  if(n === 0) return{
    next: null,
    value: 0
  }
  return {
    next: linkedList(n-1),
    value: n
  }  
}

linkedList(3);
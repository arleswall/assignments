let state = {
  timer: {
    count: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }
}


const reducer = function(prevState = state, action) {
      return {
        timer: timer(prevState.timer, action)
      }
}

function timer(prevTimer, action) {
  switch (action.type) {
    case "ADD_TIME":
      let count = prevTimer.count + 10;
      let now = new Date(count);
      let milliseconds = now.getMilliseconds().toString().slice(0, 2);
      let seconds = now.getSeconds();
      let minutes = now.getMinutes();
      return {
        count,
        minutes,
        seconds,
        milliseconds
      }
    case "RESET":
      return {
          count: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
      }
    default:
      return prevTimer
  }
}



export default reducer;
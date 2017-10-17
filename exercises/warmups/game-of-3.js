function gameof3(num, count = 0){
  if(num === 1) return count;
  if(num % 3 === 0) {
    count++;
    return gameof3(num/3, count);
  } else if ((num - 1) % 3 === 0){
    count++;
    return gameof3((num-1)/3, count);
  } else {
    count ++;
    return gameof3((num+1)/3, count);
  }
}

console.log(gameof3(6));

//OR

function threes(num) {
    let count = 0;
    console.log(`Original Number: ${num}`)
    while (num > 1) {
        if (num % 3 === 0) {
            count++;
            console.log(`New Number: ${num}`)
            num = num / 3;
        } else if ((num - 1) % 3 === 0) {
            count++;
            console.log(`New Number: ${num}`)
            num = (num - 1) / 3;
        } else if ((num + 1) % 3 === 0) {
            count++;
            console.log(`New Number: ${num}`)
            num = (num + 1) / 3;
        }
    }
    console.log(`Times divided: ${count}`);
    return `Final Number: ${num}`
}
console.log(threes(255));
// Code your solutions in this file
function writeCards(array, msg){
  let all = [];

  for (let i = 0; i < array.length; i++) {
    all.push(`Thank you, ${array[i]}, for the wonderful ${msg} gift!`)
  }

  return all

}

function countDown(num){
  while (num >= 0){
    console.log(num--);
    
  }
}

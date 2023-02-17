export function CardCheck(checkNum) {

  function stringToNumberArr(arr) {
    const newNumArr = arr.split("").map((num) => {
      return Number(num)
    })
    return newNumArr
  }

  //method 2      
  // let myFunc = num => Number(num);
  // return Array.from(String(arr), myFunc);

  let initialArr = stringToNumberArr(checkNum)
  //console.log('initial arr = ' + initialArr);

  const modifiedArr = initialArr.reverse().map((num, index) => {
    if (index % 2 !== 0) {
      let newnum = num * 2
      if (newnum >= 10) {
        return 1 + (newnum - 10)
      } else
        return newnum
    } else {
      return num
    }
  })

  //console.log('modified arr = ' + modifiedArr);

  let sum = 0;
  modifiedArr.forEach(num => {
    sum += num
  })
  if (sum % 10 === 0) {
    return true
  } else
    return false
}
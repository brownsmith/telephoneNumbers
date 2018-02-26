function createPhoneNumber(numbers){
  let areaCode = numbers.slice(0,3);
  let numberBodyStart = numbers.slice(3,6);
  let numberBodyEnd = numbers.slice(6);
  let telephoneNumber = '(' + areaCode[0] + 
    areaCode[1] +
    areaCode[2] +
    ') ' +
    numberBodyStart[0] +
    numberBodyStart[1] +
    numberBodyStart[2] +
    '-' +
    numberBodyEnd[0] +
    numberBodyEnd[1] +
    numberBodyEnd[2] +
    numberBodyEnd[3];
  return telephoneNumber;
}

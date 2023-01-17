export const CC_FORMAT = (ele) => {
  let filteredEle = ele.split("").filter(whitespc => !whitespc.match(/\s/));
  // console.log(filteredEle)

  const arrEle = filteredEle.map((char, idx) => 
                                idx % 4 === 0 && idx !== 0 ? " " + char : char
                              );
                              
  // console.log(arrEle.join(''))
  return arrEle.join("");
}
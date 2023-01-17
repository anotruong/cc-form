export const CC_FORMAT = (ele) => {
  let filteredEle = ele.split("").filter(digit => digit.match(/\d/));

  const arrEle = filteredEle.map((char, idx) => 
                                idx % 4 === 0 && idx !== 0 ? " " + char : char
                              );
  return arrEle.join("");
}
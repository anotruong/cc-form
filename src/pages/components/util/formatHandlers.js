/*
Purpose: Format the input as user submits data asyncronously 

Rules:
  Explicit:
    Fetches element by documentId
    Format the element while the user is adding in the data

  Implicit:

Data structure:
  Num -> string

Algo:
  -Functionn that reassigns the id with the new value.
    START element by id
    REASSIGN element by id with value returned by formatting functionn.
    RETURN element

  -Formatting function
    START element by id
    DECLARE variable 'copyPARA' assigned to value of elementById
    DECLARE 'formattedNum' unassigned
    ITERATE through 'copyPara'
    FORMAT 16 digit code with regEX
      use String.match() => array
      ASSIGN reference to the array to cariable 'formattedNum;
    COERCE reference of 'formattedNum' -> string
    RETURN 'formattedNum'
*/

export const CC_FORMAT = (ele) => {
  // try {
  // if ()
    let filteredEle = ele.split("").filter(digit => digit.match(/\d/));
    // console.log(filteredEle)
    // const arrEle = filteredEle.match(/(\d{0,4})?(\d{0,4})?(\d{0,4})?(\d{0,4})?$/);
    const arrEle = filteredEle.map((char, idx) => 
                                idx % 4 === 0 && idx !== 0 ? " " + char : char
                              );
    return arrEle.join("");
  // } catch(err) {
    // return "";
  // }
}



/*
START numeric parameter
EVALUATE value of parameter
TRANSFORM numberic primitive to an array
ITERATE array of parameter
  ADD whitespace after every 4 element of the value. 
TRANSFORM array to numeric primitive
RETURN numeric primitive*/
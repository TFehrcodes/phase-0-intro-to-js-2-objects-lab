// working on a program that will keep track of a company's employees
// start with just employee name and street address

const employee = {
  name: '',
  streetAddress: ''
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value
  }
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}

function deleteFromEmployeeByKey(empObj, key) {
  // we want to return a new object that doesn't include the identified key-value pair
  // use the spread operator
  const newObj = {
    ...empObj,
  }
  delete newObj[key];
  return newObj;
};

function destructivelyDeleteFromEmployeeByKey(empObj, key) {
  delete empObj[key];
  return empObj;
}
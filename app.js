// ? Task: Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого  и низкооплачиваемого сотрудника.
// - Если объект salaries пустой, то нужно вернуть "Nobody".
// - Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// - Если несколько низкооплачиваемого сотрудников, можно вернуть любого из них.

// Solution

const salariesObject = {
 "Liza": 1000,
 "Diana": 3000,
 "Criss": 2500,
 "Alis": 2300,
 "Jack": 1400
};

const salariesObjectEmpty = {};

const minMaxSalary = salaries => {

  

  let minName = Object.keys(salaries)[0] || "Nobody";
  let min = Object.values(salaries)[0] ;
  
  let max = 0;
  let maxName = "Nobody";

  for (const [name, salary] of Object.entries(salaries)) {
   if (min > salary) {
   min = salary;
   minName = name;
    }
    
    if (max < salary) {
   max = salary;
   maxName = name;
    }
    
 }
  return  [minName,maxName];
}




console.log(`${minMaxSalary(salariesObject)[0]} has the maximum salary`);
console.log(`${minMaxSalary(salariesObject)[1]} has the minimum salary`) ;
console.log(`${minMaxSalary(salariesObjectEmpty)[1]} has the minimum salary`);
console.log(`${minMaxSalary(salariesObjectEmpty)[0]} has the maximum salary`);

// ! Explanation:

// ** Через Object.entries(salaries) получаем массив [key,value] , где key - имя, а value - зарплата, сравниваем её с текущей максимальной - если она больше, записываем в maxName значение key.
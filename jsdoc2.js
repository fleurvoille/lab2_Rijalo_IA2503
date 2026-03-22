/**
 * Выводит элементы массива в формате:
 * Element index: value element
 * @param {Array} array - массив для вывода
 * @returns {void}
 */
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('Element ' + i + ': value ' + array[i]);
    }
}
/**
 * Выводит элементы массива в формате:
 * index: element
 * @param {Array} array - массив для вывода
 * @returns {void}
 */
function printArray1(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i + ': ' + array[i]);
    }
}
/**
 * Выполняет callback для каждого элемента массива
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция обратного вызова
 * @returns {void}
 */
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
/**
 * Создает новый массив, применяя callback к каждому элементу
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция преобразования
 * @returns {Array} новый массив
 */
function map(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}
/**
 * Возвращает новый массив с элементами, прошедшими условие
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {Array} отфильтрованный массив
 */
function filter(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}
/**
 * Возвращает первый элемент, удовлетворяющий условию
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {*} найденный элемент или undefined
 */
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}
/**
 * Проверяет, есть ли хотя бы один элемент, удовлетворяющий условию
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {boolean}
 */
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }

    return false;
}
/**
 * Проверяет, удовлетворяют ли все элементы условию
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {boolean}
 */
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }

    return true;
}
/**
 * Последовательно обрабатывает массив и возвращает одно значение
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция обработки
 * @param {*} initialValue - начальное значение аккумулятора
 * @returns {*} итоговое значение
 */
function reduce(array, callback, initialValue) {
    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        if (array.length === 0) return undefined;
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}


// printArray
console.log("printArray");
printArray([1, 2, 3]);
// Element 0: value 1
// Element 1: value 2
// Element 2: value 3

// printArray1
console.log("printArray1");
printArray1([1, 2, 3]);
// 0: 1
// 1: 2
// 2: 3


// forEach 
console.log("forEach");
forEach([1, 2, 3], function(element, index, array) {
    console.log('Element: ' + element + ', Index: ' + index);
});
// Element: 1, Index: 0
// Element: 2, Index: 1
// Element: 3, Index: 2


// map 
console.log("map");
const numbers = [1, 2, 3];
const squared = map(numbers, function(element) {
    return element * element;
});
console.log(squared);
//[1, 4, 9]


// filter (пример с четными числами)
console.log("filter");
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers2, function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers);
// [2, 4]


// find (первое четное)
console.log("find");
const numbers3 = [1, 2, 3, 4, 5];
const firstEven = find(numbers3, function(element) {
    return element % 2 === 0;
});
console.log(firstEven);
// 2


// some (есть ли четное)
console.log("some");
const numbers4 = [1, 3, 5];
const hasEven = some(numbers4, function(element) {
    return element % 2 === 0;
});
console.log(hasEven);
// false


// every (все ли четные)
console.log("every");
const numbers5 = [2, 4, 6];
const allEven = every(numbers5, function(element) {
    return element % 2 === 0;
});
console.log(allEven);
// true


// reduce (сумма)
console.log("reduce");
const numbers6 = [1, 2, 3, 4, 5];
const sum = reduce(numbers6, function(accumulator, element) {
    return accumulator + element;
}, 0);
console.log(sum);
// 15
console.log(resReduce); // 10

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



console.log("=== printArray ===");
printArray([1, 2, 3]);

console.log("=== printArray1 ===");
printArray1([1, 2, 3]);

console.log("=== forEach ===");
forEach([1, 2, 3], function(el, i) {
    console.log(i + ": " + el);
});

console.log("=== map ===");
const resMap = map([1, 2, 3], function(el) {
    return el * 2;
});
console.log(resMap); // [2, 4, 6]

console.log("=== filter ===");
const resFilter = filter([1, 2, 3, 4], function(el) {
    return el % 2 === 0;
});
console.log(resFilter); // [2, 4]

console.log("=== find ===");
const resFind = find([1, 2, 3, 4], function(el) {
    return el > 2;
});
console.log(resFind); // 3

console.log("=== some ===");
const resSome = some([1, 3, 5], function(el) {
    return el % 2 === 0;
});
console.log(resSome); // false

console.log("=== every ===");
const resEvery = every([2, 4, 6], function(el) {
    return el % 2 === 0;
});
console.log(resEvery); // true

console.log("=== reduce ===");
const resReduce = reduce([1, 2, 3, 4], function(acc, el) {
    return acc + el;
}, 0);
console.log(resReduce); // 10
/*=============================
=            РЕЛИЗ            =
=============================*/

/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
    const regExp = /[+-]?\d+(\.\d+)?/g;
    const numbers = string.match(regExp);
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    }
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
    if (x <= 0) return 0;
    if (x === 1) return 1;
    return fibonacciSimple(x - 2) + fibonacciSimple(x - 1);
}

/* ============================================= */

const cache = [0, 1]; // глобальная переменная, которая выполняет роль кэша.

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
    if (x <= 0) return 0;
    if (!cache[x]) {
        cache[x] = fibonacciWithCache(x - 2) + fibonacciWithCache(x - 1);
    }
    return cache[x];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
    const rows = Math.ceil((max + 1) / cols);
    let result = '';
    for (let row_i = 0; row_i < rows; row_i++) {
        for (let col_i = 0; col_i < cols; col_i++) {
            const number = col_i * rows + row_i;

            // Вставляем число в строку только если оно не превышает максимальное.
            // Пустые ячейки пробелами не заполняем.
            if (number <= max) {
                if (col_i !== 0) result += ' ';
                result += (number < 10) ? ` ${number}` : `${number}`;
                if (col_i === cols - 1 && number !== max) result += '\n';
            } else if (row_i + 1 < rows) {
                result += '\n';
            }
        }
    }
    return result;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};

/*=====  End of РЕЛИЗ  ======*/

/*========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
========================================*/

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
function guessNumberA() {}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
function guessNumberB() {}

/*=====  End of НЕ ВОШЛО В РЕЛИЗ  ======*/

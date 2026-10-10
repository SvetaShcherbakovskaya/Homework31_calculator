import { add, subtract, multiply, divide } from "./math.js";

import {
    getCircleArea,
    getRectangleArea,
    getCircleLength
} from "./geometry.js";

console.log("Сложение:", add(10, 5));
console.log("Вычитание:", subtract(10, 5));
console.log("Умножение:", multiply(10, 5));
console.log("Деление:", divide(10, 5));

console.log("Площадь круга:", getCircleArea(5));
console.log("Площадь прямоугольника:", getRectangleArea(4, 6));
console.log("Длина окружности:", getCircleLength(5));


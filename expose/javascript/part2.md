1. Logs `3`, which is the last value assigned to variable `i` before the loop terminates.
2. Logs `150`, which is the value assigned to the `discountedPrice` variable in the last iteration of the loop (the result of `300 * (1 - 0.5)`).
3. Logs `150`, which is the value assigned to the `finalPrice` variable in the last iteration of the loop (the result of `(150 * 100) / 100`).
4. The function returns `[50, 100, 150]`, which is the value assigned to the array after the 3 iterations of the for loop.
5. Error, since the code is trying to access the variable `i` outside of the scope it was declared in.
6. Error, since the code is trying to access the variable `discountedPrice` outside of the scope it was declared in.
7. Logs `150`, which is the value assigned to the `finalPrice` variable in the last iteration of the loop (the result of `(150 * 100) / 100`).
8. The function returns `[50, 100, 150]`, which is the value assigned to the array after the 3 iterations of the for loop.
9. Error, since the code is trying to access the variable `i` outside of the scope it was declared in.
10. Logs `3`, which is the value assigned to the variable `length` (the variable assigned with the length of the array).
11. The function returns `[50, 100, 150]`, which is the value assigned to the array after the 3 iterations of the for loop.
12. Answers
    - A. `student.name`
    - B. `student['Grad Year']`
    - C. `student.greeting()`
    - D. `student['Favorite Teacher'].name`
    - E. `student.courseLoad[0]`
13. Answers
    - A. `'32'` since `2` maps to its string representation, `'2'`.
    - B. `1` since `'3'` maps to its integer form and it becomes an arithmetic operation.
    - C. `3` since `null` maps to its integer representation, which is `0`.
    - D. `'3'` since `null` maps to its string representation `'null'`.
    - E. `4` since `true` maps to its integer representation `1`.
    - F. `0` since `false` and `null` both map to their integer representations, which are both `0`.
    - G. `'3undefined'` since `undefined` maps to its string representation `'undefined'`.
    - H. `NaN` since `undefined` maps to its integer representation `NaN` and the arithmetic operation does not yield a number.
14. Answers
    - A. `true` since `'2'` maps to its integer representation `2` and the values are compared as integers.
    - B. `true` since `'2'` is later in the lexographical order compared to `'12'`.
    - C. `true` since `'2'` maps to its integer representation `2` and the integer values are equal.
    - D. `false` since there is no type conversion with this operator and the two have different data types.
    - E. `false` since `true` maps to its integer representation `1` and it is not equal to `2`.
    - F. `true` since `Boolean(2)` is converted into `true` due to the rules of Boolean conversion.
15. The `==` is the operator that tests equality, which means that it allow for the comparison of two values and returns `true` if they are equal to each other, and returns `false` otherwise. The operator allows for the conversion between data types when the comparison takes place. The main difference with `===`, which is the strict equality operator, is that `===` checks equality without type conversion. Therefore, when values of two different data types are compared it will always yield `false`.
16. See `part2-question16.js`
17. The function returns `[2, 4, 6]` since the `doSomething` function is passed in as a callback to the `modifyArray` function. That function applies the callback function to each of the elements in the array using a for loop, and returns the modified array.
18. See `part2-questions18.js`
19. The code outputs the following since the commands on line 2 and line 5 are executed first, followed by line 4 and eventually line 5 after a 1 second delay.
```
1
4
3
2
```
 
// object
// const user = {
//     name:'Bob',
//     surname :'Aliev',
//     age:19,
//     address:{
//         region : 'Chui',
//         street:'Ahunbaeva'
//     },
// "my email adress":'askar8800@gmail.com'
// // }
// console.log("my email adress")
// Oject.freeze(user)
// console.log(user.address.street)
// user.name='Askar'
// console.table(user)

// const day = {
//   1:'monday',
//   2:'tuesday',
//   3:'wednesday',
//   4:'thursday',
//   5:'friday',
//   6:'saturday',
//   7:'sunday'
// }
// console.log(day['5'])
// console.log(Object.keys(day))
// console.log(Object.values(day))


// var  a = "code";
// var b = "wa.rs";
// var name = a + b;
// const years = {



//     1:'Декабрь',
//     2:'Январь',
//     3:'Февраль',
//     4:'Март',
//     5:'Апрель',
//     6:'Май',
//     7:'Июнь',
//     8:'Июль',
//     9:'Август',
//     10:'Сентябрь',
//     11:'Октябрь',
//     12:'Ноябрь',
// }
// console.log(years['3'])


// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.

// let obj    = {a: 1, b: 2, c: 3}




// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

// let obj = {a: 1, b: 2, c: 3}
// console.log(obj['c'])

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
//
// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'}
// console.log(obj.Ширин,obj.Атай)


// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
//
// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'}
//
// console.log(obj.Атай['500'])



// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.



// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.




// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.
// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

//
// let name ='Igor'
// if (name %2 ===0){
//     console.log('1')
// }else if (name % 2 ===0){
//     console.log('0')
// }


// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.
// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.
// 15. Вам дан объект product = { name: "headphones",price: 100 discount: 0 .  Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.


// for (let i=0;i<1000000;i++){
//     console.log(i)
// }




// for (let i=1 ; i < 51 ; i++ ){
//     console.log(i)
// }


// 1. Выведите столбец чисел от 1 до 50.


// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.




// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.

//
// let arr = [5, 3, 1, 2, 7]
// for (let i = 0;i<arr;i++){
//     arr.map(el =>{
//         return el
//     })
// }



// 4. Вам дан массив с элементами [5, 2, 1, 2].
// С помощью цикла for найдите произведение элементов этого массива.
//
// let arr = [5, 2, 1, 2]
// for (let i = 0;i<arr.length;i++){
//     arr.map(el =>{
//         return el * el
//     })
// }


// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.




// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// let res = 0
// for (let i = 0; i <=100; i ++){
//     res = res + i
// //     res += i
// }
// console.log(res)


// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.






// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let i =[2, 4, 6, 12, 3, 5]
// for (let i = 0;i <i ; i ++){
// if (i>3 || i<10){
// console.log(i)
//     }
// }
// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.


// let arr = [-1, 2 ,3 ]
// let res = 0
// for (let i = 0 ;i <arr.length;i ++ ) {
//     if (arr [i]>0){
//         res += i
//     }
// }
// console.log(i)
// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.


// let i = [5, 1, 3, 7, 6, 15, 3, 20]
// for (let i = 0 ; i < i .length; i ++){
//     if (i [i] > 4 ){
//         console.log('Есть')
//     }
// }



// for (let i = 0 ; i <= 15 ; i ++){
//     if (i ===4){
//         continue;
//     }
//     console.log(i)
// }


//
// let i = 0
// while (i <51){
//     console.log(i)
//     i++
// }



// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while (i<100000);l

// function addlength (str){
// return str.split(' ').map(el =>{
//     return el  + '' + el.length
// })
// }
//
// console.log(addlength('apple ban'))
//  let arr = 6.74
// console.log(arr * 15 )

// function createArray(number ){
//     var newArray = [];
//
//     for(var counter =  1;  counter <= number; counter++){
//         newArray.push(counter);
//     }
//
//     return newArray;
// }


// const reverseSeq = n => {
//     return [];
// }

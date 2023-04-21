/**
 * Hàm tính tổng các đối số truyền vào 
 * @param param ...param : tham số truyền vào được tổng hợp thành một mảng, mảng được xác định kiểu number
 * @returns tổng các đối số truyền vào 
 */
function totalNumber(...param: (number)[]): number {

    let a = arguments;                      // nhận tất cả các đối số truyền vào

    let total = 0

    for (let i = 0; i < a.length; i++) {
        total += a[i];
    }

    return total;
}


/**
 * Hàm thực hiện chức năng hàm tính tổng
 */
function main(): void {

    console.log(totalNumber(2, 3)); 

    console.log(totalNumber(7, 2, 3));

}

main();
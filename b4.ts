/**
 * Hàm thực hiện chức năng hàm tính tổng với lời gọi hàm không đủ đối số 
 */
function main(): void {

    console.log(sum(7));

    console.log(sum(3,5));
}

main();



/**
 * Hàm tính tổng 3 số từ tham số truyền vào
 * @param a số a 
 * @param b số b
 * @param c số c
 * @returns tổng 3 số 
 */
function sum(a: number, b: number = 5, c: number = 4): number {
    return a + b + c;
}
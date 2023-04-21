/**
 * Hàm thực hiện chức năng hàm tính trung bình cộng
 * @returns trung bình cộng
 */
function cncalculateAverage(): (n: number) => number {

  let sum: number = 0;    // biến tính tổng 
  let count: number = 0;  // biến đếm đối số truyền vào


  /**
   * Hàm tính trung bình cộng 
   * @param number một số từ người dùng
   * @returns trung bình cộng
   */
  function calculateAverage(number: number): number {

    sum += number;

    count++;

    return sum / count;

  }

  return calculateAverage;
}



const average: (n: number) => number = cncalculateAverage();

console.log(average(3)); // 3
console.log(average(5)); // 4
console.log(average(4)); // 4

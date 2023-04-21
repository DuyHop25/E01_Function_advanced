/**
 * Khai báo kiểu dữ liệu Point 
 */
type Point = {
    x: number;
    y: number;
}


/**
 * Hàm tính khoảng cách 2 tọa độ
 * @param point1 tọa độ 1 
 * @param point2 tọa độ 2
 * @returns Khoảng cách 2 tọa độ
 */
const getDistance = (point1: Point, point2: Point): number =>
    Math.floor(Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2));


/**
 * Hàm khai báo đối tượng Tọa độ 2 điểm a và b 
 * Thực hiện chức năng hàm tính khoảng cách giữa 2 tọa độ
 */
function main() {

    const a: any = {
        x: 2,
        y: 5,
    };

    const b: any = {
        x: 1,
        y: 9,
    };

    const distance = getDistance(a,b);

    console.log(distance);
}

main();






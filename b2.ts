/**
 * Khai báo kiểu dữ liệu Point 
 * Có 2 thuộc tính là kiểu number
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
 * Hàm tính tổng độ dài 3 cạnh tam giác 
 * @param a cạnh a
 * @param b cạnh b 
 * @param c cạnh c
 * @returns Độ dài 3 cạnh
 */
const totalLength = function (a: Point, b: Point, c: Point): number {

    const canh_ab = getDistance(a, b);

    const canh_ac = getDistance(a, c);

    const canh_bc = getDistance(b, c);

    return canh_ab + canh_ac + canh_bc;
};


/**
 * Khai báo tọa độ 3 cạnh tam giác
 * Thực hiện chức năng hàm tính tổng độ dài 3 cạnh tam giác
 */
function main(): void {

    const a: Point = {
        x: 2,
        y: 4,
    };

    const b: Point = {
        x: 1,
        y: 5,
    };

    const c: Point = {
        x: -2,
        y: 8,
    };

    const Total = totalLength(a, b, c);

    console.log(Total);
}

main();

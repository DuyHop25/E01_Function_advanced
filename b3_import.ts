import { a, b, c, Point } from "./b3_export"; // nhận 4 biến từ file b3_import

/**
 * Hàm tính khoảng cách 2 tọa độ
 * @param point1 tọa độ 1 
 * @param point2 tọa độ 2
 * @returns Khoảng cách 2 tọa độ
 */
const getDistance = (point1: Point, point2: Point): number =>
    Math.floor(Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2));


/**
 * Hàm tính tổng độ dài tọa độ 3 cạnh của tam giác
 * @param a tọa độ cạnh a
 * @param b tọa độ cạnh b
 * @param c tọa độ cạnh c
 * @returns độ dài tam giác
 */
const totalLength_triangle = (a: Point, b: Point, c: Point) => {
    // độ dài cạnh ab
    const canh_ab = getDistance(a, b);
    // độ dài cạnh ac
    const canh_ac = getDistance(a, c);
    // độ dài cạnh bc
    const canh_bc = getDistance(b, c);

    return canh_ab + canh_ac + canh_bc; // độ dài 3 cạnh 
}

/**
 * In ra độ dài tọa độ 3 cạnh 
 * Thực hiện chức năng hàm tính tổng độ dài 3 cạnh
 */
function main(){

    console.log("cạnh a: ",a); 
    console.log("cạnh b: ",a); 
    console.log("cạnh c: ",a); 

    const Length_triangle = totalLength_triangle(a, b, c);

    console.log("Tổng độ dài 3 cạnh tam giác abc:",Length_triangle);
}
main();
var arr=[1,2,3,4];

let num=+prompt("nhap môt gia tri bat ky");

let found=0;

for(let index in arr){
    if(num==arr[index]){
        console.log(index);
        found=1;
        break;
    }
}
if(!found){
    console.log("giá trị không tồn tại");
}
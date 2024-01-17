var arr=[1,2,2,3,4,5];

let num=+prompt("nhap so nguyen bat ki");

let found=0;count=0;

for(let index in arr){
    if(num==arr[index]){
        count++;
        found=1;
    }

}
console.log(count);
if(!found){
    console.log("không tồn tại giá trị");
}
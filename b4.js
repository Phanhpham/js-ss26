let a=+prompt("nhap so a");

let b=+prompt("nhap so b");

var arr1=[];

var arr2=[];

for(let i=1;i<=b;i++){
    if(i%a==0){
        arr1.push(i);
    }

}
console.log(arr1);


for(let j=1;j<=a;j++){
    if(j%b==0){
        arr2.push(j);
    }
}
console.log(arr2);
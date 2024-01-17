var array=[0,"ab","hung",3];

var found=false;
for (var item of array){
    if(Number.isInteger (item)){
        console.log(item);
        found=true;
    }
    
} 
if (!found){
    console.log("không tìm thấy");
}

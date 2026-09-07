function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hii!");
            resolve();
        }, 4000); 
    });
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("abes college");
            resolve();
        }, 2000); 
    });
}
 
async function test (){
    try{
        f1();
        f2();
    }
    catch(err){
        console.log("error",err)
    }
}
test();
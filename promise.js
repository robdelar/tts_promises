
function getRandomNumber() {
        return new Promise((resolve) => {
     setTimeout(() => resolve(Math.floor(Math.random()*100)), 500)
     });
 }
    

async function f(){
	let result = await getRandomNumber();
  
  console.log(result);
}

f();

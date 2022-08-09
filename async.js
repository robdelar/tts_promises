
async function f(cityName){
		
	let response = await fetch(`https://geocode.xyz/${cityName}?json=1`);
  
  let user = await response.json();
  
  console.log(user.latt);
  console.log(user.longt);
}

f("dallas");

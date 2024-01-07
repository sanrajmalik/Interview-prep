let promise = new Promise((res,rej)=>{
	setTimeout(()=>{
  	console.log("res")
    res();
  },1000)
})



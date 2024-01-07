const functionHello = async ()=>{
    setTimeout(() => {
        return ("hh")
    }, 5000);
}

const myAsyncFunction = async () => {
    const a = await functionHello();
    console.log(a);
    console.log("Hello not await");
};

// Call the async function
myAsyncFunction();
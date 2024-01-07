function findRepeatingWords(string1, string2) {
    // Convert strings to arrays of unique words
    let arr=[]
    const words1 = [...new Set(string1.split(' '))];
    const words2 = [...new Set(string2.split(' '))];
	
  	for(var i=0; i<words1.length; i++) {
        if(!words2.find(e=>e==words1[i])){
            arr.push("sda")
        }
    }
    console.log(arr)
		
}

// Example usage:
const string1 = "turning is great";
const string2 = "turning is awesome";
const output1 = findRepeatingWords(string1, string2);
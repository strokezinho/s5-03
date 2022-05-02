function snapCrackle(maxValue){

    let arr = []
    
        for (let i = 1; i <= maxValue; i++){
            if (i % 2 === 1){
                arr[i] = "Snap"
            }if (i % 5 === 0){
                arr[i] = "Crackle"  
            }if (i % 2 === 1 && i % 5 === 0){
                arr[i] = "SnapCrackle"
            }else if (i % 2 == 0 ){
                arr[i] = `${i}`
            }
        }
    arr.shift()    
return arr.join(", ")
}



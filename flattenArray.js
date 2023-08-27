// Flatten Array

let arr1 = [1, 2, [3, [4, 5, [6, 12]], 7], 8];

const flattenArray = (arr) => {
    let n = arr.length
    let res = []
    for(let i=0; i<n; i++){
        if(Array.isArray(arr[i])){
            res = [...res, ...flattenArray(arr[i])]
        }else{
            res.push(arr[i])
        }
    }
    
    return res
}

console.log(flattenArray(arr1))

// Output

// [ 1,  2, 3, 4, 5, 6, 12, 7, 8 ]
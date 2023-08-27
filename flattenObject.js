// Flatten Object

const data = {
    name: "Mayank",
    age: 23,
    college: {
        name: "LPU",
        address: {
            state: "punjab",
            city: "phagwara"
        }
    }
}

const flattenObject = (obj) => {
    let res = {}

    for(const i in obj){
        if(typeof obj[i]==='object' && !Array.isArray(obj[i])){
            let temp = flattenObject(obj[i])
            for(const j in temp){
                res[i+'.'+j] = temp[j]
            }
        }else{
            res[i] = obj[i]
        }
    }

    return res
}

console.log(flattenObject(data))

//Output

// {
//     name: 'Mayank',
//     age: 23,
//     'college.name': 'LPU',
//     'college.address.state': 'punjab',
//     'college.address.city': 'phagwara'
// }
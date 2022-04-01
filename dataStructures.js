// level {1/2/3}
//level 1

//First Question
var arr=[1,2,3]
var result=arr.map(num=>{
    return num+1
})

console.log(result)

//Second Question

console.log(arr.reduce((num,sum)=>{
    return sum+=num
}))

//Third Question

var object={name: 'Elie', rank: 'Pro'}
for(var key in object){
    console.log(key," ",object[key])
}

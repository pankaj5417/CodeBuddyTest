// level {1/2/3}
// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
function generatePattern(numOfRows){
    for(let i=1;i<=numOfRows;i++ ){
        
        for(let j=1;j<=i;j++){
            var output=""
            output+=j
            console.log(output)
            for(let k=i-1;k>=1;k--){
               var output2=""
                output2+=k
                console.log(output2)
                console.log("\n")
            }
            
        }
       
    }

}
generatePattern(5)
//console.log(output)
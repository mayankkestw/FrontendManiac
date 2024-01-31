// calc(10).add(5).multiply(2).val() 
// O/p: 30

function calc(num){
  let res = num;
  
  return {
    add: function(addNum){
      res = addNum+res
      return this
    },
    multiply: function(addMulti){
      res = addMulti*res
      return this
    },
    val: function(){
      return res
    }
  }
}

console.log(calc(10).add(5).multiply(2).val())

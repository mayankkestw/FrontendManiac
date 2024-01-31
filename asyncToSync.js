// make below code run synchronously

(function(){

setTimeout(()=> console.log(1),2000)
console.log(2)
setTimeout(()=> console.log(3),1000);
console.log(4)

})();


// synchronous code

(async function() {
  await new Promise(resolve => setTimeout(() => {
    console.log(1);
    resolve();
  }, 2000));

  console.log(2);

  await new Promise(resolve => setTimeout(() => {
    console.log(3);
    resolve();
  }, 1000));

  console.log(4);
})();



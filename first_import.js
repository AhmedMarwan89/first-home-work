console.log('hello , it\s me ')
arr = [1 ,2 ,3 ,23 , 7 , 'hello' , 'hi' , 'ahmed' , 'khalid' , 'hello' , 'm' , '3' ] 
console.log(arr.filter(word => word =='hello'))
console.log(arr.filter(word=>typeof(word) =='string'))
console.log(arr.filter(arr=>arr.length==1))
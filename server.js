console.log('before');
const user = getUser(1);

console.log('after');

function getUser(id){
 setTimeout(()=>{
   console.log('reading a user from a database');
   return {id:id, githubUsername:'alok'}

 },2000)

 return 1;

}
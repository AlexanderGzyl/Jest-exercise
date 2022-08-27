const { default: axios } = require("axios");
//run code befre and after tests
beforeEach(()=>initDatabase);
afterEach(()=>closeDatabase);
const initDatabase = () => console.log('database initialized...')
const closeDatabase = () => console.log('database closed...')
const functions ={
    add: (num1,num2)=> num1 + num2,
    isNull:()=> null,
    checkValue: x=>x,
    createUser: ()=>{
        const user = {firstName:'Alex'};
        user['lastName'] ="Gzyl";
        return user
    },
    fetchUser: ()=>
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>res.data)
        .catch(err=>"error")
    
}


module.exports=functions;
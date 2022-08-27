const functions = require('./functions');

test('Adds 2 + 2 to equal 4',()=>{
    //where you put your function and a matcher "toBe" finds a specific primitive
    expect(functions.add(2,2)).toBe(4);
});

test('should be null',()=>{
    //where you put your function and a matcher "toBe" finds a specific primitive
    expect(functions.isNull()).toBeNull();
});

test('should be falsy',()=>{
    //where you put your function and a matcher "toBe" finds a specific primitive
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Alex Gzyl object',()=>{
    //where you put your function and a matcher "toEqual" tests arrays or objects reference types
    expect(functions.createUser()).toEqual({
        firstName:'Alex',
        lastName:'Gzyl'
    });
});

//Regex
test('there is no I in team', ()=>{
    expect('team').not.toMatch(/I/)
})

//arrays
//does the array contain a particular value
test('Admin should be in usernames', ()=>{
    usernames = ['john','doe','admin']
    expect(usernames).toContain('admin');
})

// working with async data
//promise
test('User fetched name should be Leanne Graham',()=>{
    expect.assertions(1);
    // return the promise first
    return functions.fetchUser()
    .then(data=>{
        expect(data.name).toEqual('Leanne Graham');
    })
})

//async await
// test('User fetched name should be Leanne Graham',async ()=>{
//     expect.assertions(1);
//     // return the promise first
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
    
// })
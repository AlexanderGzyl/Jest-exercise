const reverseString = require('./reversestring')
test('reversetring function exists',()=>{
    expect(reverseString).toBeDefined();
})

test('String reverses', ()=>{
    expect(reverseString('hello')).toEqual('olleh');
})
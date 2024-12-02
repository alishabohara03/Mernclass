localStorage.setItem('name','jhon')
localStorage.getItem('token','1234fvvvvvf')
localStorage.setItem('user',JSON.stringify({name:'jhon'}))
localStorage.setItem('token',JSON.stringify({token: 'token'}))

let token= localStorage.getItem('token')
let token1= JSON.parse(localStorage.getItem('token'))
let name= localStorage.getItem('name')





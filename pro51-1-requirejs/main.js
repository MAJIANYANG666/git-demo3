require(['./hello'],function(x){
  console.log(x)
  document.body.append(x.person.name)
  
})

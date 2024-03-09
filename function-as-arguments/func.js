// a practice for function-as-arguments
console.log('hi')

// a simple function
function fun(echo){
    console.log(echo)
}

fun('hello')

// another function that takes a function as argument
function boo(afunction){
    afunction('boo')
}

boo(fun)

console.log(fun)

fun(boo)

more = fun;
more('again something')

///////////////// with timeout

function aa(doneMessage){alert(doneMessage);}
function timer(doneMessage,n){
    setTimeout(aa,n,doneMessage)
}
timer('cookies are done',1000)
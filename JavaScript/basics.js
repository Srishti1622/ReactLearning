// Example 1:

function sum(a,b){
    return
    a+b
}

// we will get "undefined" as return is a complete statment hence the function sum is returning nothing
console.log(sum(3,3))

// Example 2:

function sum1(a,b){
    return
    {
        sum:a+b
    }
}

// we will get "undefined" as return is a complete statment hence the function sum is returning nothing
console.log(sum1(3,3))
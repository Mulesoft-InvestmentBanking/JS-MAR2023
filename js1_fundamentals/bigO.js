const minMax1 = (arr)=>{ // array has n elements
    const min = Number.MAX_VALUE;
    const max = Number.MIN_VALUE;
    for(let i of arr){ // run n times
        if(i < min) min = x; 
        if(i > max) max = x;
    }
}
// time complexity :  O(N)


const minMax2 = (arr)=>{
    const min = Number.MAX_VALUE;
    const max = Number.MIN_VALUE;
    for(let i of arr){ // run n times
        if(i < min) min = x;
    }
    for(let i of arr){ // run n times
        if(i < max) max = x;
    }
}
// time complexity :  O(N)


const runtime1 = (arrA, arrB)=>{ // a : arrA elements; b: arrB elements
    for(let a of arrA){ // run a times
        console.log(a)
    }
    for(let b of arrB){ // run b times
        console.log(b)
    }
}
// time complexity :  O(a+b)


const runtime2 = (arrA, arrB)=>{
    for(let a of arrA){ // run a times
        for(let b of arrB){ // run b times
            console.log(a+ ", " +b)
        }
    }
}
// time complexity :  O(ab)




const ex1 = (arr)=>{ // arr length : N
    let sum =0;
    let product = 1;
    for(let i=0; i<arr.length;i++){ // run N times
        sum+= arr[i];
    }
    for(let i=0; i<arr.length;i++){ // run N times
        product *= arr[i];
    }
    console.log(sum+ " , " + product)
}
// time complexity :  O(N)




const ex2 = (arr) =>{
    for(let i=0; i< arr.length; i++){ // [1,2,3,4,5]
        for(let j=0; j< arr.length; j++){ //  
            console.log(arr[i] + " , " + arr[j])
        }
    }
}
// time complexity :  O(N^2)


const ex3 = (arr) =>{
    for(let i=0; i< arr.length; i++){ // n
        for(let j=i +1; j< arr.length; j++){ // n-1, n-2, n-3
            console.log(arr[i] + " , " + arr[j])
        }
    }
}
// time complexity : O(N^2)



const ex4 = (arrA, arrB)=>{ // a, b
    for(let i=0; i< arrA.length; i++){ // a
        for(let j=0; j< arrB.length; j++){ // b
            console.log(arrA[i] + " , " + arrB[j])
        }
    }    
}
// time complexity :  O(a*b)


const ex5 = (arr1, arr2)=>{
    for(let i=0; i< arr1.length; i++){ // N
        for(let j=0; j< arr2.length; j++){ // N
            for(let k=0; k< 1000000; k++){ // 1000000
                console.log(arr1[i] + " , " + arr2[j])
            }
        }
    }    
}
// time complexity : O(N^2)

const ex6 = (arr) =>{
    for(let i=0; i<arr.length/2 ; i++){
        let j = arr.length -i -1;
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
    }
}
// time complexity :  O(N)

// to find the power of 2:
const ex7 = (n) =>{  
    if(n<1){
        return 0;
    }else if(n==1){
        console.log(1);
        return 1;
    }else{
        let prev = ex7(n/2) 
        let curr = prev *2;
        console.log(curr)
        return curr
    }
}
// time complexity :  O(log N)






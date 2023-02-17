//let item1 = 10
//et item2 = 20
//let item3 = 30
//let item4 = 40
//let item5 = 50

let array = [10,20,30,40,50]

//First elememnt of athe array
console.log(array[0])


//Last element of the  array/Best practise
console.log(array[array.length-1])


//Add element onto end of array
array.push(60)
    console.log(array)
//------------------------------------------------------------------------


// Array Filter
let arr = [11, 22, 33, 44, 55]

let newarr = arr.filter((element) => {
    console.log(element)
    if (element < 35) {
        return true
    }
})

console.log(arr)
console.log(newarr)


//Simplar filteration
let newarra = arr.filter(element =>  element< 50)

console.log(newarra)

//----------------------------------------------------------------------------

//Method 1 ------------------------------------------------------------
let grades = ['A+','A', 'Fail']

let goodgrades = grades.filter((element) => {
console.log(element)
if (element !== 'Fail'){
    return true;
}
})

console.log(goodgrades)


//Method 2 -------------------------------------------------------------------

let grade = ['A+','B', 'Fail', 'C']

let midgrades = grade.filter(element => element !== 'Fail')
console.log(midgrades)

//==========================================================================
let gra = ['Fail', 'Fail']

let midgra = gra.filter(element => element !== 'Fail')
console.log(midgra)


//----------------------------------------------------------------------------------
let graded = ['A+','A', 'Fail']

for (let i = 0; i < graded.length; i = i+ 1){
    console.log(graded[i]);
}

let narray = [1,3,6,9]
let newarray = narray.map((element) => {
    console.log(element)
    return 1;
})
console.log(newarray)


let narrays = [1,3,6,9]
let newarrays = narray.map(element => element = 'undefined')
console.log(newarrays)


let dollars = [2,4,6,8,10]

let ele = dollars.map((dollar) => {
console.log(dollar*100)
})


//Without map method
let dollar = [2,3,4,7,10,11]
let cent = []
for(let i =0; i< dollar.length; ++i) {
    cent.push(dollar[i]*100)
}
console.log(cent)
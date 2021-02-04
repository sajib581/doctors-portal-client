const array = [
    {
        id:1,
        name: 'sajib',
        class: 5,
        roll:10,
        section: 'a'
    },
    {
        id:2,
        name: 'rajib',
        class: 6,
        roll:10,
        section: 'a'
    },{
        id:3,
        name: 'suvo',
        class: 5,
        roll:10,
        section: 'c'
    },{
        id:4,
        name: 'amit',
        class: 7,
        roll:10,
        section: 'a'
    },{
        id:5,
        name: 'manik',
        class: 8,
        roll:10,
        section: 'b'
    },{
        id:6,
        name: 'roton',
        class: 9,
        roll:10,
        section: 'd'
    },{
        id:7,
        name: 'dipok',
        class: 10,
        roll:10,
        section: 'a'
    },
]
let myMap = new Map()
array.forEach(item =>{
    if(!myMap.has(item.section)){        
        myMap.set(item.section, {...item})
    }    
})
console.log(myMap);
console.log(myMap.size);

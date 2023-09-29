// interface objtype{
//     name:string,
//     age:number,
// }

// var obj ={
//     name:"ZEESHAn",
//     age:44,

// }
interface friendstype{
    name:string,
    age:number,
    trustLevel:boolean,
    capible:number,
    func:()=>void,
    hobies:string[]
}

var friends:friendstype={
    name:"zaheer",
    age:44,
    trustLevel:true,
    capible:22,
    func:()=>{
        console.log("hello");        
    },
    hobies:["watch Match","footabal"]

}

console.log(friends);

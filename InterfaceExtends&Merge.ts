interface friendstype{
    name:string,
    age:number,
    trustLevel:boolean,
    capible:number,
    func:()=>void,
    hobies:string[],
    email?:string,
}
// interface classFelowtype extends friendstype {
//     email:string
// }



var friends:friendstype={
    name:"zaheer",
    age:44,
    trustLevel:true,
    capible:22,
    func:()=>{
        console.log("hello");        
    },
  hobies:["reeding","cards","criket"]
}

var classFellow:friendstype={
    name:"zaheer",
    age:44,
    trustLevel:true,
    capible:22,
    func:()=>{
        console.log("hello");        
    },
  hobies:["reeding","cards","criket"],
  email:"mzeeshanghani@gmail.com"

}

export{};

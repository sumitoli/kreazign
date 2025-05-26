const UserData=[
    {id:1, name:"abdul", gender:"male", age:20, occupation:"editor"},
    {id:2, name:"sardar", gender:"male", age:16, occupation:undefined},
    {id:3, name:"rohit", gender:"male", age:28, occupation:"teacher"},
    {id:4, name:"suwana", gender:"female", age:22, occupation:undefined},
    {id:5, name:"roshan", gender:"male", age:19, occupation:undefined},
    {id:6, name:"sumit", gender:"male", age:20, occupation:undefined},
]

const response={
    status:200,
    message:"userdata fetched successfully",
    data: UserData
}

const fetchUserNames=()=>{
    if(response.status === 200){
        const result=response.data
        .filter((user)=>user.occupation!== undefined || user.age>=21)
        .map((user)=>user.name)
        return result
    }else{
        const message="API fetch failed"
        return message
    }
}

console.log(fetchUserNames())
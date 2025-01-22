
const tasks=[]
let updateTime=new Date().toLocaleString()

const addTask=(des)=>{
      let newTask={
        id:tasks.length+1,
        description:des,
        status:"in progress",
        createdAt:new Date().toLocaleString(),
        updatedAt:updateTime
}
      tasks.push(newTask)
}

const updateTask=(Id,des)=>{
      let task=tasks.filter((item)=>item.id==Id)
     tast.description=des
     updateTime=Date.now()
}

const deleteTask=()=>{
     
}

addTask("buy fruits")
console.log(tasks)
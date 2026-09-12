const setEmployee = (x)=>{
    console.log("set employee callled..." +x)
    return x**2
}

const getFullName = (fname,lname)=>{
    return fname + " "+lname
}

module.exports ={
    setEmployee,getFullName
}
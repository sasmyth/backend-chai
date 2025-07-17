// const asynchandler=(fun)=>(req,res,next)=>

//     Promise.resolve(fun(req,res,next)).catch(next)


const asynchandler=(fun)=async (req,res,next)=>{
    try{
        return await fun(req,res,next);
    }
    catch(error){
        //console.log(error)
        res.status(err.code || 500).json({success:false,message:err.message})

    }
}
export {asynchandler}
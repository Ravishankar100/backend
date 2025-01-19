
// first method to use async handler
const asynchandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err));
}
}
export {asynchandler};



// higer order function to handle async functions it takes function as an argument and returns a function   
//step to write higher order function   
// step 1: create a function that takes a function as an argument
// normal function without function as an argument
// const asynchandler = ()=>{};

// function with function as an argument

// const asynchandler=(fn)=>{()=>{}}

//  now remove the outer curlly braces 

/* second method to use async handler

const asynchandler = (fn) => async(req,res,next) => {
    try {
        await fn(req,res,next);
        
    } catch (error) {
        res.status(error.status || 500).json({
            sucuess:false,
            message:error.message || "Internal server error"
        })
        
    }
}
export {asynchandler};
*/

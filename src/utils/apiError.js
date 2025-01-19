class ApiError extends Error{
    constructor(
        statusCode,
        message= "Internal server error",   
        errors=[],
        statck=""
    )
    {
        super(message);
        this.statusCode=statusCode;
        this.errors=errors;
        this.data=null,
        this.message=message;
        this.success=false;
    }
}
export {ApiError};
export function handleLogin(req,res){
    res.json({
        formName:"login",
        data:req.body
    })
}

export function handleSignup(req,res){
    res.json({
        formName:"signup",
        data:req.body
    })
}

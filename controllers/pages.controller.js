export function showHomePage(req,res){
    res.render("index.ejs")
}

export function showLoginPage(req,res){
    res.render("login.ejs")
}

export function showSignupPage(req,res){
    res.render("signup.ejs")
}

export function showProfilePage(req,res){
    res.render("profile.ejs")
}

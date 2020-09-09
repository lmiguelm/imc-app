function validateEmail(email) {
    let usuario = email.substr(0, email.indexOf("@"));
    let dominio = email.substr(email.indexOf("@") + 1, email.length);

    return  (usuario.length >=1) && 
            (dominio.length >=3) && 
            (usuario.search("@")==-1) && 
            (dominio.search("@")==-1) && 
            (usuario.search(" ")==-1) && 
            (dominio.search(" ")==-1) && 
            (dominio.search(".")!=-1) && 
            (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1);

}

export {
    validateEmail,
}
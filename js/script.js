//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo( {
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
   
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
        if(usuario == ""){
            alert("Campo usuario está vazio")
        }
            if(senha == ""){
                alert("Campo senha está vazio")
            }
                else if(usuario != "admin" || senha != "123456"){
                    alert("Usuário ou senha incorreto")
                }
}        
  
//Ativar alert no botão cadastrar
function cadastro() {
    var cadastrar = 0
    var usuario1 = document.getElementsByName('usuario1')[0].value;
    usuario1 = usuario1.toLowerCase();
    var email = document.getElementsByName('email')[0].value;
    email = email.toLowerCase();
    var senha1 = document.getElementById('senha1').value;
    senha1 = senha1.toLowerCase();
    if (usuario1 == ""){
        alert("Preencha o campo nome");  
    }    
        if(email == ""){
            alert("Preencha o campo email");
        }
            if(senha1 == ""){
                alert("Preencha o campo senha")
    }else{
    alert("Usuário cadastrado com sucesso!");
    window.location = "login.html";
    cadastrar = 1;
    }
}





    


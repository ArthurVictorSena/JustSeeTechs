const btn = document.getElementById("submit")   

btn.addEventListener('click' , async (event)=>{
    event.preventDefault()

    const name =  document.getElementById("nome")
    const email = document.getElementById("email")
    const servico = document.getElementById("servico")
    const descr = document.getElementById("descricao")  
    

   if(msgvazia(name,email,servico,descr)){
    return
   }
   alert("Processando")
   try {
       const response =  await fetch("http://localhost:8080/email",{
            method: 'POST',
            headers: {'Content-type': 'application/json'    } ,
            body: JSON.stringify({nome: name.value,
                                destinatario: email.value,
                                desc: descr.value,
                                assunto: servico.value})      
        })
        
        name.value = ""
        email.value = ""
        descr.value = ""
        servico.value= ""
        
        if(response.ok){
           
            alert("Olá!\n\nRecebemos seu pedido com sucesso.\nNossa equipe da Just See Tech's já está analisando as informações, e em breve você receberá uma resposta no e-mail informado.\n\nAgradecemos pelo contato!\n\nAtenciosamente,\nEquipe Just See Tech's")
        }else{
            alert("|EROOORORORORO")
        }

    
   } catch (error) {
    alert("ERRO INESPERADO")
   }
})

function msgvazia(nome,email,servico,descr){
  

    if(  (nome=="") || (email =="") ||     (servico =="")  ||  (descr =="")){
    alert("Você deve preencher todos os campos")
    return true


    }else{
    return false
}
}


package senastech.emailSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    private String remetente = "testemaximo45@gmail.com";
    private String mensagem ;
    private String t = "perdeu play boy";
    public String enviarEmail(DTOEmail dados){

        try{

            mensagem = "Obrigado pelo seu contato," + dados.getNome()+" retornaremos o seu pedido de " + dados.getAssunto()  + " o mais breve possível \n" +
            "- equipe just see tech's";
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setFrom(remetente);
            simpleMailMessage.setTo(dados.getDestinatario());
            simpleMailMessage.setSubject(dados.getAssunto());
            simpleMailMessage.setText(t);
            javaMailSender.send(simpleMailMessage);
            return "Enviado com sucesso";
        }catch (Exception e){
            return "erro ao enviar";
        }

    }


}

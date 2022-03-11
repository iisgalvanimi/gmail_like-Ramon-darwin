
export class Email {
    destinatario: string;
    oggetto: string;
    messaggio: string;
  
    constructor(destinatario: string, oggetto: string, messaggio : string) {
      this.destinatario = destinatario;
      this.oggetto = oggetto;
      this.messaggio = messaggio;
 
    }
}    
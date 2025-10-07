import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact{
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_8kzdqdk',     
      'template_mlc1ltq',    
      e.target as HTMLFormElement,
      'PiKji7jn_ATnb1rOm'      
    ).then(
      () => {
        alert('✅ Message sent successfully!');
        (e.target as HTMLFormElement).reset(); 
      },
      (error) => {
        alert('❌ Failed to send message: ' + error.text);
      }
    );
  }
}

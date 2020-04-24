import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  //messages = [];
 
  constructor(public messageService : MessageService) {
   
  }

  ngOnInit(): void {
    // this.messageService.subscribeToMsg(this, function(ref, message, variant, duration){
    //   duration = duration || 5000;
    //   variant  = variant || 'info';
    //   let toastItem = {
    //     message: message,
    //     variant: variant,
    //     duration: duration,
    //     showToast: true
    //   };
    //   ref.messages.push(toastItem);
    // });
  }
  get messages(){
    return this.messageService.getMessage();
  }
}

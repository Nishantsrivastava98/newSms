import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = [];
  // messageHelper;
  // ref;
  constructor() {
  }

  showToast(message : string, variant = 'info', duration = 5000){
      let toastItem = {
        message: message,
        variant: variant,
        duration: duration,
        showToast: true
      };
      this.messages.push(toastItem);

    // if(this.messageHelper){
    //   this.messageHelper(this.ref, message, variant, duration)
    // }
    
  }

  // subscribeToMsg(ref, cb){
  //   this.ref = ref;
  //   this.messageHelper = cb;
  // }
  getMessage(){
    return this.messages;
  }
}

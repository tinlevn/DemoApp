import { Directive } from '@angular/core';

@Directive({
  selector: 'input[appLogDirective]',
  host: { '(input)': 'logmessage($event.target.value)' }
})
export class LogDirectiveDirective {

  constructor() { }

  logmessage(message: any) {
    console.log(message);
  }

}

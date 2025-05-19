import { Component } from "@angular/core";

@Component({
  selector:'inline-comp',
  template:`
    <h1>This is an inline Component</h1>
  `,
  styles:[
    `h1{
      color:red;
    }`
  ]
})
export class InlineComponent{
  message:string = 'Message from inline component'
}

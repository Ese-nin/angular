import { Component } from '@angular/core'

@Component({
  selector: 'inst-test6',
  template: `
    <h1 class="title1">Test 6</h1>
    <h1 class="title2">Test 6.6</h1>
  `,
  styles: [
    `
      .title1 {
        color: orangered;
      }

      .title2 {
        color: darkblue;
      }
    `,
  ],
})
export class Test6Component {}

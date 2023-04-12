import { Component } from '@angular/core'

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  title = 'Qwerty qwerty qwerty'
  url = 'https://angular.com/qwerty/qwerty666/SlicePipe'
  date = new Date()
}

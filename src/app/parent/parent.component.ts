import { Component } from '@angular/core'

interface Fruit {
  id: string
  name: string
  price: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  fruits: Fruit[] = [
    { id: '1', name: 'apple', price: 10 },
    { id: '2', name: 'orange', price: 18 },
    { id: '3', name: 'banana', price: 30 },
    { id: '4', name: 'watermelon', price: 40 },
    { id: '5', name: 'pears', price: 3 },
    { id: '6', name: 'avocados', price: 12 },
    { id: '7', name: 'kiwi', price: 7 },
    { id: '8', name: 'mango', price: 1 },
    { id: '9', name: 'coconut', price: 4 },
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-men',
  standalone: false,
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  data: any;


ngOnInit()
{
  fetch(`https://fakestoreapi.com/products/category/men's clothing`)
 .then(response=>response.json())
 .then((result)=>{ 
 this.data = result;
})
}
}

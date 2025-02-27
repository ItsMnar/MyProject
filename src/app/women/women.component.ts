import { Component } from '@angular/core';

@Component({
  selector: 'app-women',
  standalone: false,
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  data: any;


  ngOnInit()
  {
    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
   .then(response=>response.json())
   .then((result)=>{ 
   this.data = result;
  })
  }
}

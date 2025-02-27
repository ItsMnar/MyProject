import { Component } from '@angular/core';

@Component({
  selector: 'app-jewelery',
  standalone: false,
  templateUrl: './jewelery.component.html',
  styleUrl: './jewelery.component.css'
})
export class JeweleryComponent {
  data: any;


ngOnInit()
{
  fetch(`https://fakestoreapi.com/products/category/jewelery`)
 .then(response=>response.json())
 .then((result)=>{ 
 this.data = result;
})
}
}

import { Routes } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increament } from '../state/counter/counter.actions';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  data: any;
  id:any;
  count$?:Observable<number>
  private store=inject(Store)
  counter:number=1;

  increment(){
    this.store.dispatch(increament())
  }


  constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.count$=this.store.select('counter')
  }

  ngOnInit()
  {
  
    fetch(`https://fakestoreapi.com/products/` + this.id)
   .then(response=>response.json())
   .then((result)=>{ 
   this.data = result;
  })
  }
}

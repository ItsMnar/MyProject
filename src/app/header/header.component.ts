import { Component,Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
private store=inject(Store)
count$?:Observable<number>
constructor()
{
  this.count$=this.store.select('counter')
}
  @Input() counter:string="";
count:number=0;

}
 
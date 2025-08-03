import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { EVENTS, EventItem } from '../../data/events';
import { EventComponent } from '../event/event.component';
import { CartService } from '../../core/cart.service';
import { Product } from '../../data/product';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { EventService } from '../../core/event.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductListComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  noResults = false;

  ngOnInit(): void {
    this.eventService.searchResults$.subscribe(results => {
      this.events = results.map(event => ({
        ...event,
        loaded: false
      }));
    });
  
    this.eventService.noResults$.subscribe(flag => {
      this.noResults = flag;
    });
  
    this.eventService.resetSearch();
  }
  
  
 
  constructor(private router: Router,
     private eventService: EventService) {}
  
  events: EventItem[] = [];
  
  goToEvent(id: number) {
    const selectedEvent = this.events.find(e => e.id === id);
    if (selectedEvent) {
      this.eventService.setEventId(selectedEvent.id.toString()); 
      this.eventService.setEventName(selectedEvent.name);        
      this.router.navigate(['/event', id]);
    }
  }
  

}

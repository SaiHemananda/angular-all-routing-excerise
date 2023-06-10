import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActorListService } from './actor-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-actor-list-view',
  templateUrl: './actor-list.component.html',
  styles: [],
})
export class ActorListComponent {
  actors;
  showDetails= false;

  constructor(
    private actorListService: ActorListService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.queryParamMap.subscribe((qp) => {
      if (qp.has('showDetails')) {
        this.showDetails = !this.showDetails;
      } else { 
        this.showDetails = false;
      }
    });
    this.actorListService.getActorList().subscribe((actors) => {
      this.actors = actors;
    });
  }
}

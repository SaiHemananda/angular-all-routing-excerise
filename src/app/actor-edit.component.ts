import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActorListService } from './actor-list/actor-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: `
<h4>{{actor.name}}</h4>

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">DOB</label>
    <input type="text" class="form-control" 
    [value]="actor.born"
    id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Appearances</label>
    <input type="text" class="form-control" 
    [value]="actor.credits"
    id="exampleInputPassword1">
  </div>

  <button type="submit" class="btn mr-2 btn-primary" (click)="onClick()">Save</button>

  <a [routerLink]="['/actor']" >Cancel</a>

  
</form>
  `,
  styles: [],
})
export class ActorEditComponent {
  actor;

  constructor(
    private actorListService: ActorListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = 0;

    this.route.paramMap
    .subscribe(params=>{
      this.actorListService.getActor(+params.get('id'))
      .subscribe(actor=> {
        this.actor = actor;
      });
    })
  }

  onClick() {
    this.router.navigateByUrl['/404'];
  }
}

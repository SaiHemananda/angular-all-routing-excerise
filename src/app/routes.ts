import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorEditComponent } from './actor-edit.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component'

export const routingTable = [
  { path:'',redirectTo:'actor', pathMatch:'full' },
  { path:'actor',component: ActorListComponent},
  { path:'actor/:id/edit',component:ActorEditComponent},
  { path:'404', component:FourOhFourComponent},
  { path:'**',redirectTo:'404'}
]
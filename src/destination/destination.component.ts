import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { TabsComponent } from './destination-ui/tabs/tabs.component';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NavigationComponent, TabsComponent],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {

}

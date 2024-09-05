import { Routes } from "@angular/router";
import { HomepageComponent } from "../homepage/homepage.component";
import { DesignSystemComponent } from "../design-system/design-system.component";
import { DestinationComponent } from "../destination/destination.component";

export const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "design", component: DesignSystemComponent },
  { path: "destination", component: DestinationComponent },
];

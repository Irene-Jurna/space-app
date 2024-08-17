import { Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { DesignSystemComponent } from '../design-system/design-system.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'design', component: DesignSystemComponent},
];

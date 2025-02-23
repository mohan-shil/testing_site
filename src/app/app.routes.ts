import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './components/elements/elements.component';
import { NgModule } from '@angular/core';
import { FormsComponent } from './components/forms/forms.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { InteractionsComponent } from './components/interactions/interactions.component';

export const routes: Routes = [
  { path: 'elements', component: ElementsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'interactions', component: InteractionsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
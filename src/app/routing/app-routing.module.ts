import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ListComponent } from '../list/list.component';
import { DemoComponent } from '../demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomeComponent' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutComponent' }
  },
  {
    path: 'demo',
    component: DemoComponent,
    data: { animation: 'DemoComponent' }
  },
  {
    path: 'list',
    component: ListComponent,
    data: { animation: 'ListComponent' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

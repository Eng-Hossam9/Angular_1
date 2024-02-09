import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

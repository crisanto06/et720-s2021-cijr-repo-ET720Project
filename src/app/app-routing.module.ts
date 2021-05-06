import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    
    { path: 'aboutus', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'menu', component: MenuComponent},
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    
    MainpageComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent
  
  
  
  ]
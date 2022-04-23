import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [HomeComponent, SideMenuComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

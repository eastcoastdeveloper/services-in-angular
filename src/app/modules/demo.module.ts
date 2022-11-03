import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../components/contact/contact.component';
import { DemoRoutingModule, routingComponents } from './demo-routing.module';

@NgModule({
  declarations: [ContactComponent, routingComponents],
  imports: [CommonModule, DemoRoutingModule],
  exports: [ContactComponent],
})
export class DemoModule {}

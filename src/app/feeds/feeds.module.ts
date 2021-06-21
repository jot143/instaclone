import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedsPage } from './feeds.page';
import { InfinityScrollDirective } from 'src/utility/infinity-scroll.directive';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FeedsPage }])
  ],
  declarations: [FeedsPage, InfinityScrollDirective]
})
export class FeedsModule {}

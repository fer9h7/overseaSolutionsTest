import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDetailComponent } from './date-detail.component';
import { DateDetailRoutingModule } from './date-detail-routing-module';

@NgModule({
    imports: [
        CommonModule,
        DateDetailRoutingModule
    ],
    declarations: [
        DateDetailComponent
    ]
})
export class DateDetailModule {}

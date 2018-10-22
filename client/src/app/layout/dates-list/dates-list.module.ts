import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesListComponent } from './dates-list.component';
import { DatesListRoutingModule } from './dates-list-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DatesListRoutingModule
    ],
    declarations: [
        DatesListComponent
    ]
})
export class DatesListModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateDetailComponent } from './date-detail.component';

const routes: Routes = [
    {
        path: '', component: DateDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DateDetailRoutingModule {
}

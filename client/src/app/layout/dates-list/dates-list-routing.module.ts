import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatesListComponent } from './dates-list.component';

const routes: Routes = [
    {
        path: '', component: DatesListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatesListRoutingModule {
}

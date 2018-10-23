import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dates-list', pathMatch: 'prefix' },
            { path: 'dates-list', loadChildren: './dates-list/dates-list.module#DatesListModule', }            
        ],     
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule, 
    ]
})
export class LayoutRoutingModule {}
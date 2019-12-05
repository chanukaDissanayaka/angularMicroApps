import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: 'testApp',
        loadChildren: () =>
            import('../../projects/testApp/src/app/app.module').then(m => m.AppModule),
        data: {},
    },
    {
        path: 'testApp2',
        loadChildren: () =>
            import('../../projects/testApp2/src/app/app.module').then(m => m.AppModule),
    },
    {
        path: '**',
        component: AppComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { CustomersCheckGuard } from './customers-check.guard';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  { path: '', redirectTo: 'leads', pathMatch: 'full'},
  { path: 'leads', component: LeadsGridComponent, canActivate: [AuthGuard]},
  { path: 'admin', 
    canActivate:[SuperAdminGuard],
    children:[
      {
        path:'',
        component:AdminComponent
      },
      {
        path:'',
        canActivateChild: [AdminAccessGuard],
        children:[
          { path: 'manage', component: AdminManageComponent},
          { path: 'edit', component: AdminEditComponent},
          { path: 'delete', component: AdminDeleteComponent},
        ]
      }
    ]
  },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'product/:productId/photos/:photoId', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'loans', component: LoansComponent },
  { path: 'add-loan', component: AddLoansComponent, outlet: 'add' },
  { path: 'loan-types', component: LoanTypesComponent, outlet: 'types' },
  { path: 'search', canDeactivate:[UnsavedGuard] ,component: SearchComponent},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'customers',
    canLoad:[CustomersCheckGuard], 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

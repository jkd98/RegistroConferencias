import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


// Componentes de Pantallas
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';
import { HomeComponent } from './components/home/home.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { TestBackComponent } from './components/test-back/test-back.component';
import { TstHeaderComponent } from './components/tst-header/tst-header.component';
import { CrmConfersComponent } from './components/crm-confers/crm-confers.component';
import { ConferencesComponent } from './components/conferences/conferences.component';
import { DetailConfComponent } from './components/detail-conf/detail-conf.component';
import { MyConfsComponent } from './components/my-confs/my-confs.component';
import { OneConferComponent } from './components/one-confer/one-confer.component';
import { UserComponent } from './layouts/user/user.component';
import { AuthComponent } from './layouts/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    AdministradoresComponent,
    HomeComponent,
    CreditosComponent,
    TestBackComponent,
    CrmConfersComponent,
    TstHeaderComponent,
    ConferencesComponent,
    DetailConfComponent,
    MyConfsComponent,
    OneConferComponent,
    UserComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

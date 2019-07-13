import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { AppComponent } from './app.component';
import {AppInterceptor} from './app.interceptor'
// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TeacherComponent } from './views/teacher/teacher.component';
import { ContactComponent } from './views/contact/contact.component';
import { CatalogComponent } from './views/catalog/catalog.component';


import { AcademicYearComponent } from './views/academic-year/academic-year.component';
import { TempComponent } from './views/temp/temp.component';
// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { MajorComponent } from './views/major/major.component';
import { DocumentStudentComponent } from './views/document-student/document-student.component';
import { IntakesComponent } from './views/intakes/intakes.component';
import { IntakesListComponent } from './views/intakes/intakes-list/intakes-list.component';
import { IntakeComponent } from './views/intakes/intake/intake.component';
import { IntakeChangeComponent } from './views/intakes/intake-change/intake-change.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { CategoryComponent } from './views/categories/category/category.component';
import { CategoryListComponent } from './views/categories/category-list/category-list.component';
import { CategoryChangedComponent } from './views/categories/category-changed/category-changed.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CatalogsComponent } from './views/catalogs/catalogs.component';
import { NgComponent } from './ng/ng.component';
import { CatalogListComponent } from './views/catalogs/catalog-list/catalog-list.component';
import { YearComponent } from './views/years/year/year.component';
import { YearListComponent } from './views/years/year-list/year-list.component';
import { YearChangeComponent } from './views/years/year-change/year-change.component';
import { YearsComponent } from './views/years/years.component';
import { SemestersComponent } from './views/semesters/semesters.component';
import { SemesterListComponent } from './views/semesters/semester-list/semester-list.component';
import { SemesterChangeComponent } from './views/semesters/semester-change/semester-change.component';
import { SemesterComponent } from './views/semesters/semester/semester.component';
import { StudentsComponent } from './views/students/students.component';
import { StudentListComponent } from './views/students/student-list/student-list.component';
import { StudentChangeComponent } from './views/students/student-change/student-change.component';
import { StudentComponent } from './views/students/student/student.component';
import { PnotifyService } from './shared/pnotify.service';
import { TypeStudentComponent } from './views/type-students/type-student/type-student.component';
import { TypeStudentsComponent } from './views/type-students/type-students.component';
import { TypeStudentListComponent } from './views/type-students/type-student-list/type-student-list.component';
import { TypeStudentChangeComponent } from './views/type-students/type-student-change/type-student-change.component';
import { ProgramComponent } from './views/programs/program/program.component';
import { ProgramChangedComponent } from './views/programs/program-changed/program-changed.component';
import { ProgramsComponent } from './views/programs/programs.component';
import { ProgramListComponent } from './views/programs/program-list/program-list.component';
import { UsersComponent } from './views/users/users.component';
import { UserComponent } from './views/users/user/user.component';
import { UserListComponent } from './views/users/user-list/user-list.component';
import { UserChangeComponent } from './views/users/user-change/user-change.component';
import { StatisticComponent } from './views/statistic/statistic.component';
import { LessonsComponent } from './views/lessons/lessons.component';
import { LessonComponent } from './views/lessons/lesson/lesson.component';
import { LessonChangeComponent } from './views/lessons/lesson-change/lesson-change.component';
import { LessonListComponent } from './views/lessons/lesson-list/lesson-list.component';
import { LessconsComponent } from './views/lesscons/lesscons.component';
import { LessconChangeComponent } from './views/lesscons/lesscon-change/lesscon-change.component';
import { LessconComponent } from './views/lesscons/lesscon/lesscon.component';
import { LessconListComponent } from './views/lesscons/lesscon-list/lesscon-list.component';



@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    TeacherComponent,
    ContactComponent,
    CatalogComponent,


    AcademicYearComponent,
    TempComponent,
    MajorComponent,
    DocumentStudentComponent,
    IntakesComponent,
    IntakesListComponent,
    IntakeComponent,
    IntakeChangeComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryChangedComponent,
    CatalogsComponent,
    NgComponent,
    CatalogListComponent,
    YearComponent,
    YearListComponent,
    YearChangeComponent,
    YearsComponent,
    SemestersComponent,
    SemesterListComponent,
    SemesterChangeComponent,
    SemesterComponent,
    StudentComponent,
     StudentsComponent,
    StudentListComponent,
    StudentChangeComponent,
    TypeStudentComponent,
    TypeStudentsComponent,
    TypeStudentListComponent,
    TypeStudentChangeComponent,
    ProgramComponent,
    ProgramChangedComponent,
    ProgramsComponent,
    ProgramListComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    UserChangeComponent,
    StatisticComponent,
    LessonsComponent,
    LessonComponent,
    LessonChangeComponent,
    LessonListComponent,
    LessconsComponent,
    LessconChangeComponent,
    LessconListComponent,
    LessconComponent


  ],
  providers: [ CookieService,PnotifyService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


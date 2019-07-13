import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TeacherComponent } from './views/teacher/teacher.component';
import { ContactComponent } from './views/contact/contact.component';
import { CatalogComponent } from './views/catalog/catalog.component';

import { IntakesComponent } from './views/intakes/intakes.component';

import { AcademicYearComponent } from './views/academic-year/academic-year.component';
// import { ContactComponent } from './views/contact/contact.component';
import { TempComponent } from './views/temp/temp.component';
import { MajorComponent } from './views/major/major.component';
import { DocumentStudentComponent } from './views/document-student/document-student.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { YearsComponent } from './views/years/years.component';
import { SemestersComponent } from './views/semesters/semesters.component';
import { StudentsComponent } from './views/students/students.component';
import { ProgramsComponent } from './views/programs/programs.component';
import { TypeStudentsComponent } from './views/type-students/type-students.component';
import { UsersComponent } from './views/users/users.component';
import { StatisticComponent } from './views/statistic/statistic.component';
import { LessonsComponent } from './views/lessons/lessons.component';
import { LessconsComponent } from './views/lesscons/lesscons.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'document-student',
        component: DocumentStudentComponent
      },
      {
        path: 'major',
        component: MajorComponent
      },
      {
        path: 'temp',
        component: TempComponent
      },
      {
        path: 'academic-year',
        component: AcademicYearComponent
      },
      {
        path: 'years',
        component: YearsComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'programs',
        component: ProgramsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'typestudents',
        component: TypeStudentsComponent
      },
      {
        path: 'intakes',
        component: IntakesComponent
      },
      {
        path: 'semesters',
        component: SemestersComponent
      },
      {
        path: 'catalog',
        component: CatalogComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'teacher',
        component: TeacherComponent
      },
      {
        path: 'lesscons',
        component: LessconsComponent
      },
       {
        path: 'statistic',
        component: StatisticComponent
      },
      {
        path: 'lessons',
        component: LessonsComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
       {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      // {
      //   path: 'dashboard',
      //   loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      // },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
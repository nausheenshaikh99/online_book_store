import { Component } from '@angular/core';
import { NavigationStart,Router } from '@angular/router';
import { filter } from 'rxjs';
import { AngularOnlinebookstoreService } from './angular-onlinebookstore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-onlinebookstore';
  isLoggedIn: boolean=false;
  isAdminLoggedIn: boolean=false;

  clicked = false;
  constructor(
    private router:Router,
    private service:AngularOnlinebookstoreService)
    {
      this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
      ).subscribe((event: any) => {
        if (this.service.getCustomerAuthorization() !== null) {
          setTimeout(() => {
            this.isLoggedIn = true;
            this.isAdminLoggedIn = false;
          }, 100);
        } else {
          if (this.service.getAdminAuthorization() !== null) {
            setTimeout(() => {
              this.isAdminLoggedIn = true;
              this.isLoggedIn = false;
            }, 100);
  
          } {
            setTimeout(() => {
              this.isLoggedIn = false;
              this.isAdminLoggedIn = false;
            }, 1);
          }
        }
      });
    }
    //line 20 to 41-->check when routing(url) change it will check authorization
  openPage(str:string):void{
    this.router.navigate(['/'+str]);
  }
}


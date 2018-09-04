import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ArticleService } from './services/articles/article.service';
import { UserService } from './services/users/user.service'

@Component({
  // tslint:disable-next-line
  moduleId: module.id,
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [ArticleService, UserService]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/providers/general.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username = 'user';
  isLoggedIn = false;

  constructor(private genService: GeneralService,
              private router: Router) { }

  ngOnInit() {
    this.genService.isLoggedIn().then(res => {
      this.isLoggedIn = res;
    });
    this.genService.getUser().then(user => {
      this.username = user.username;
    })
  }

  logout() {
    this.genService.logout();
    this.router.navigate(['home']);
  }

  navigate(url) {
    this.router.navigate([url]);
  }

}

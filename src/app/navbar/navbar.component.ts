import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  currentUser: any = null;

  constructor(private titleService: Title, private _DataService: DataService) {
    _DataService.currentUser.subscribe(() => {
      if (_DataService.currentUser.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }
  shortname(){
    if(this.currentUser){
      return this.currentUser?.first_name.substring(0,5) + ' .' + this.currentUser?.last_name.substring(0,3);
    }else{
      return '';
    }
  }

display(){
  this. _DataService.getCurrentUser().subscribe(
    data => {
      if(data){
        this.currentUser = data;
      }
    },
    error => {
      console.log(error);
    }
  ); 
}

  isLogout() {
    this._DataService.logout();
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.titleService.setTitle('Navbar');
    setTimeout(() =>{ 
      this.display();
    }, 2000);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-sidebar-menu',
  templateUrl: './nav-sidebar-menu.component.html',
  styleUrls: ['./nav-sidebar-menu.component.css']
})
export class NavSidebarMenuComponent implements OnInit {
  toggle:boolean = true;
  isActive: boolean;
  constructor() { }
  /* Set the width of the side navigation to 250px */
  openNav() {
    // document.getElementById("mySidenav").style.width = "250px";
    this.toggle=!this.toggle;
    
    
  }
  selected(){
    this.isActive=true;
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    this.toggle=true;
  }
  ngOnInit(): void {
  
   
    
  }

}

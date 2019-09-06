import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  teachers = [
    { name: 'Teachers Information', link: '/teachers/teacherinfo' },
    { name: 'Assign New Teachers', link: '/teachers/assignteacher' },
    { name: 'Assign Incharge', link: '/teachers/assignincharge' }
  ];
  constructor() {}

  ngOnInit() {}
}

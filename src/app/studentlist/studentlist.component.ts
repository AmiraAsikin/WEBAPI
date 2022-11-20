// import { Component, OnInit } from '@angular/core';
// import { StudentService } from 'src/app/student.service';

// @Component({
//   selector: 'app-studentlist',
//   templateUrl: './studentlist.component.html',
//   styleUrls: ['./studentlist.component.css']
// })
// export class StudentlistComponent implements OnInit {

//   listData: any = [];
//   title = "Test";
//   message: boolean = false;

//   constructor(private service: StudentService) { }

//   ngOnInit() {
//     this.refreshProList();
//   }

//   refreshProList() {
//     this.service.getAllStudents().subscribe((res) => {
//       console.log(res, "res==");
//       this.listData = res.data;
//     });
//   }


// }
// function id(id: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function student(id: (id: any, any: any) => void, student: any) {
//   throw new Error('Function not implemented.');
// }

// function club(club: any) {
//   throw new Error('Function not implemented.');
// }   

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  listData: any = [];
  constructor(private service: StudentService) { }
  
  ngOnInit(): void {
    this.listData(); 
  }
  
  getAllStudents()
  {
    this.service.getAllStudents().subscribe((res)=>{
      console.log(res,"res==")
      this.listData = res.data;
    });
  }
  

}
  




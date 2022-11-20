import { Component, OnInit } from '@angular/core';
import { Student } from 'src/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // listData: any = [];
  constructor(private service: StudentService) { }
   listData: any;
   successmsg:any;
   message: boolean = false;

  ngOnInit(): void {
    this.getAllStudent();
  }
  
  getAllStudent()
  {
    this.service.getAllStudents().subscribe((res)=>{
      console.log(res,"res==")
      this.listData = res.data;
    });
  }
  
//delete id
// deleteId(id:any){
//   console.log(id,'deleteid==>');
//   this.service.deleteStudent(id).subscribe((res)=>{
//     console.log(res,'deleteres==>');
//     this.successmsg = res.message;
//     this.getAllStudent();

//   });

// }

deleteStudent(id: any) {
  console.log(id, 'deleteStudent==>');
  this.service.deleteStudent(id).subscribe((result) =>{
    console.log(result, 'deleteresult==>');
    this.successmsg = result.message;
    this.getAllStudent();
    
  });
}

updateStudentData(student:any, id: any) {
  this.service.updateStudentData(student, id).subscribe((result) =>{

  });
}
getAllStudents(){
this.service.getAllStudents().subscribe((result)=>{
console.log(result,"result==>");
this.listData=result.data;
});
}

removeMessage() {
  this.message = false;
}
}
  

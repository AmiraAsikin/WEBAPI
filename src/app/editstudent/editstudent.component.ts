import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  editStudent = new FormGroup({
    'id':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'course':new FormControl('',Validators.required),
    'semester':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'clubId':new FormControl('',Validators.required)

  });
  constructor(private service:StudentService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getStudentById(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.editStudent.patchValue({
          id:res.data[0].id,
          name:res.data[0].name,
          course:res.data[0].course,
          semester:res.data[0].semester,
          email:res.data[0].email,
          clubId:res.data[0].clubId
        });
      });
    }

    //to update a student
updateStudentData()
{
  console.log(this.editStudent.value);
    this.service.updateStudentData(this.router.snapshot.params['id'], this.editStudent.value).subscribe((result:any)=>{

    this.editStudent.reset();
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}
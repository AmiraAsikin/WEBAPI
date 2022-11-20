
import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private service:StudentService) { }
  // constructor(private service:StudentService,  private router:ActivatedRoute) { }
  // errormsg:any;
  // successmsg:any;
  // getparamid:any;
  // message:boolean=false;

  addStudent = new FormGroup({
    // id: new FormControl(''),
    name: new FormControl(''),
    course: new FormControl(''),
    semester: new FormControl(''),
    email: new FormControl(''),
    clubId: new FormControl(''),
  });

  message: boolean = false;
  ngOnInit(): void {

  }


    createStudent() {
      console.log(this.addStudent.value);
      this.service.saveStudentsData(this.addStudent.value).subscribe((result) => {
        console.log(result);
        this.message = true;
        this.addStudent.reset({});
      });
    }
  

  // saveStudentsData() {
  //   console.log(this.studentForm.value);

  //   this.service.saveStudentsData(this.studentForm.value).subscribe((result) => {
  //     console.log(result);
  //     this.message=true;
  //     this.studentForm.reset({});
  //   });
  // }

  removeMessage(){
    this.message = false;
  }
}


// import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {StudentService} from '../student.service';
// import { ActivatedRoute} from '@angular/router';

// @Component({
//     selector: 'app-addstudent',
//     templateUrl: './addstudent.component.html',
//     styleUrls: ['./addstudent.component.css']
//   })
// export class AddstudentComponent implements OnInit {

//   constructor(private service:StudentService,  private router:ActivatedRoute) { }

//   errormsg:any;
//   successmsg:any;
//   getparamid:any;
//   message:boolean=false;

//   ngOnInit(): void {
//     //id for update satu je
//     this.getparamid = this.router.snapshot.paramMap.get('id');
//     if (this.getparamid){
//     this.service.getStudent(this.getparamid).subscribe((res)=>{

//       console.log(res,'res==>');
//       this.studentForm.patchValue({
//           name:res.data[0].name,
//           course:res.data[0].course,
//           semester:res.data[0].semester,
//           email:res.data[0].email,
//           clubId:res.data[0].clubId,
        

//       });
//     });
//   }
//   }

//   studentForm = new FormGroup({
//     'name':new FormControl('',Validators.required),
//     'course':new FormControl('',Validators.required),
//     'semester':new FormControl('',Validators.required),
//     'email':new FormControl('',Validators.required),
//     'clubId':new FormControl('',Validators.required)
    


//   });

//   //to create a new class
//   studentSubmit(){
//     if(this.studentForm.valid){
//       console.log(this.studentForm.value);
//       this.service.saveStudentsData( this.studentForm.value ).subscribe((res)=>{
//         console.log(res,'res==>');
//         this.studentForm.reset({});
//         this.successmsg = res.message;
//       });

//     }
//     else{
//       this.errormsg = 'all field is required';
//     }

//   }
// //to update a class
// studentUpdate()
// {
//   console.log(this.studentForm.value,'updatedform');

//   if(this.studentForm.valid)
//   {
//     this.service.updateStudentData(this.studentForm.value,this.getparamid).subscribe((res)=>{
//       console.log(res,'resupdated');
//       this.successmsg = res.message;

//     })
//   }
//   else
//   {
//     this.errormsg = 'all field is required';
//   }
//   }

// }


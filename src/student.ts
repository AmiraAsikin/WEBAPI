export class Student
{
    public studId: number;
    public name: string;
    public course: string;
    public semester: string;
    public email: string;
    public clubId: string;
    // public comp_ssm: number;
    // public comp_size: string;
    // public comp_type: string;
    
    constructor(studId:number, name: string, course:string, semester:string, email:string, clubId:string)
    {
        this.studId = studId;
        this.name = name;
        this.course= course;
        this.semester = semester;
        this.email = email;
        this.clubId= clubId;
       
    }
}
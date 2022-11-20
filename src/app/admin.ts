export class admin
{
    // public id: number;
    public username: string;
    // public staff_email: string;
    public password: string;
    // public staff_phonenum: string;
    // public comp_name: string;
    // public comp_ssm: number;
    // public comp_size: string;
    // public comp_type: string;
    
    // constructor(id:number, staff_name: string, staff_email:string, staff_password:string, staff_phonenum:string, comp_name:string, comp_ssm:number, comp_size:string, comp_type:string)
    constructor(username: string, password: string)
    {
        // this.id = id;
        this.username = username;
        // this.staff_email = staff_email;
        this.password = password;
        // this.staff_phonenum = staff_phonenum;
        // this.comp_name = comp_name;
        // this.comp_ssm = comp_ssm;
        // this.comp_size = comp_size;
        // this.comp_type = comp_type;
    }
}
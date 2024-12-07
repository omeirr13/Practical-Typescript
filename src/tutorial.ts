type Employee = { id: number, name: string, department: string };
type Manager = { id: number, name: string, employees: Employee[] };

type Staff = Employee | Manager;


const printStaffDetails = (staff: Staff) => {
    if('employees' in staff){
        console.log(`You are a manger, you manage ${staff.employees.length} employees.`);
    }
    else{
        console.log(`You are an employee, your name is ${staff.name} you work in department ${staff.department}`);
    }
}

let omeir : Employee = {id: 1, name: "omeir", department: "IT"};
let omar : Employee = {id: 2, name: "omar", department: "IT"};

let belawal : Manager = {id: 3, name: "belawal", employees: [omeir, omar]};


const employees : Staff[] = [omeir, omar, belawal];

employees.forEach((employee)=>{
    printStaffDetails(employee);
})



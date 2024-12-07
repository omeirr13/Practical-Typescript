function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
    return { id: 1, isActive: id % 2 == 0 };
};

const obj: { id: number, isActive: boolean } = createEmployee({ id: 1 });


function createStudent(student: {id: number; name: string}): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const student = {
    id: 1,
    name: "omeir"
}
createStudent({id: 1, name: "omeir"});//inline matches exactly
createStudent(student);//this will go ..it just wants the ones to match, extra can come..

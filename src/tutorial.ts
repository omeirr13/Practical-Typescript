type User = {id: number, name: string, isActive: boolean};

const john : User ={
    id: 1,
    name: "john",
    isActive: true
}

const susan : User ={
    id: 1,
    name: "susan",
    isActive: true
}

function createUser(...users: User[]): User[]{
    users.forEach((user)=>{
        console.log(`Hello there ${user.name.toUpperCase()} !!!`);
    })
    return users;
}

createUser(susan, john);

type Theme = 'light' | 'dark';
let theme:Theme = 'dark';

function setTheme(t: Theme){
    theme = t;
}

setTheme(theme);

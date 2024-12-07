const names: string[] = ["omeir", "omar", "ali", "abdullah", "ahmed"];

const exists = (key: string): boolean => names.includes(key);

console.log(exists("omaa"));
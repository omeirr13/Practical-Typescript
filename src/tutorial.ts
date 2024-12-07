//intersections are a way to combine multiple types into one.

type Person = { name: string; age: number };
type Address = { street: string; city: string };

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "John",
  age: 30,
  street: "123 Main St",
  city: "New York"
};

const persons = [
	{
		pid: 1,
		name: "Kenneth",
		age: 18,
		hobbies: ["Hiking", "Drawing", "Swimming"],
	},
	{
		pid: 2,
		name: "Heathcliff",
		age: 20,
		hobbies: ["Gaming", "Teaching"],
	},
	{
		pid: 3,
		name: "Benben",
		age: 17,
		hobbies: ["Skibiding", "Bathing", "Climbing"],
	},
];

const App = () => {
	const people = persons.map((p) => (
		<Person key={p.pid} name={p.name} age={p.age} hobbies={p.hobbies} />
	));
	return people;
};

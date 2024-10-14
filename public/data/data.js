let data = [
	{
		id: 1,
		name: 'John Doe',
		hobbies: [
			{
				id: 1,
				name: 'playing games',
			},
		],
		age: 30,
		address: '123 Main St',
		city: 'New York',
		phone: '555-1234',
	},
	{
		id: 2,
		name: 'Jane Smith', 
		age: 25,
		address: '456 Oak Ave',
		city: 'Los Angeles',
		phone: '555-5678',
	},
	{
		id: 3,
		name: 'Michael Johnson',
		age: 40,
		address: '789 Pine Rd',
		city: 'Chicago',
		phone: '555-8765',
	},
	{
		id: 4,
		name: 'Emily Davis',
		age: 35,
		address: '321 Cedar St',
		city: 'New York',
		phone: '555-4321',
	},
];

// TODO 1: Dapatkan semua data
function getAllData() {
	return data;
}

// TODO 2: Dapatkan data dengan nama tertentu
function getDataByName(name) {
	return data.filter((person) => person.name === name);
}

// TODO 3: Dapatkan data dengan alamat di New York
function getDataByCity(city) {
	return data.filter((person) => person.city === city);
}

// TODO 4: Dapatkan data dengan umur >= 30
function getDataByAge(age) {
	return data.filter((person) => person.age >= age);
}

// Contoh penggunaan ^_^
console.log("All data:", JSON.stringify(getAllData(), null, 2));
console.log("Data by name 'John Doe':", JSON.stringify(getDataByName('John Doe'), null, 2));
console.log("Data by city 'New York':", JSON.stringify(getDataByCity('New York'), null, 2));
console.log("Data with age >= 30:", JSON.stringify(getDataByAge(30), null, 2));

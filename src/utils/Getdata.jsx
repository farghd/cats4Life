import faker from 'faker';

const GetData = () => {
	const arr = [];

	for (let i = 0; i < 14; i++) {
		const genders = ['Male', 'Female'];
		const gender = faker.random.arrayElement(genders);
		const name = faker.name.firstName(gender);
		const city = faker.address.city();
		const breed = faker.animal.cat();
		const age = faker.datatype.number(24);
		const price = faker.commerce.price(50, 350);
		const pedigrees = ['Yes', 'No', 'Unknown'];
		const pedigree = faker.random.arrayElement(pedigrees);

		arr.push({ name, gender, city, breed, age, price, pedigree });
		console.log(arr);
	}

	return arr;
};

export default GetData;

const { Employee, Task } = require('../models');

// Create dummy models to use for tasks

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstName: "Haley",
		lastName: "Leung",
		department: "Computer Science"
	});

	const dummyEmployee2 = await Employee.create({
		firstName: "James",
		lastName: "Nguyen",
		department: "Computer Science"
	});

	/*const dummyTask = await Task.create({
		description: "Clean the floor",
    priorityLevel: 1,
    status: false
	});

	await dummyTask.setEmployee(dummyEmployee);*/

}

module.exports = seedDB;

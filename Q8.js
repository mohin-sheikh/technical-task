
//  -------- I Used Javascript To solve this problems -----------

const numberArray = [
    { name: 'Ganesh', join_date: '2021-06-11', salary_per_day: 100 },
    { name: 'Ram', join_date: '2021-06-13', salary_per_day: 200 },
    { name: 'Sneha', join_date: '2021-06-15', salary_per_day: 140 },
    { name: 'Vishu', join_date: '2021-06-17', salary_per_day: 90 },
    { name: 'Suraj', join_date: '2021-06-19', salary_per_day: 110 },
    { name: 'Pranjal', join_date: '2021-06-21', salary_per_day: 300 },
    { name: 'Pranita', join_date: '2021-06-23', salary_per_day: 50 },
    { name: 'Pratik', join_date: '2021-06-25', salary_per_day: 100 },
    { name: 'Himesh', join_date: '2021-06-12', salary_per_day: 180 },
    { name: 'Vishal', join_date: '2021-06-14', salary_per_day: 100 },
    { name: 'Raj', join_date: '2021-06-16', salary_per_day: 100 },
    { name: 'Sumit', join_date: '2021-06-18', salary_per_day: 77 },
    { name: 'Rudra', join_date: '2021-06-20', salary_per_day: 190 },
    { name: 'Ankita', join_date: '2021-06-22', salary_per_day: 150 },
    { name: 'Tushar', join_date: '2021-06-24', salary_per_day: 250 }
];

const workingDaysArray = numberArray.map(employee => {
    // Calculate the total number of working days for the employee in June 2021
    const startDate = new Date(employee.join_date);
    const endDate = new Date(2021, 5, 30);  // June 30, 2021
    const workingDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

    return {
        name: employee.name,
        workingDays: workingDays
    };
});

const salaryArray = numberArray.map(employee => {
    // Calculate the total salary for the employee for June 2021
    const startDate = new Date(employee.join_date);
    const endDate = new Date(2021, 5, 30);  // June 30, 2021
    const workingDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
    const salary = workingDays * employee.salary_per_day;

    return {
        name: employee.name,
        salary: salary
    };
});

const sortedSalaryArray = salaryArray.sort((a, b) => b.salary - a.salary);

console.log(sortedSalaryArray);
/* 
    Output: [
        { name: 'Ram', salary: 3554.1666666666665 },
        { name: 'Himesh', salary: 3378.75 },
        { name: 'Pranjal', salary: 2931.25 },
        { name: 'Sneha', salary: 2207.916666666667 },
        { name: 'Rudra', salary: 2046.4583333333335 },
        { name: 'Ganesh', salary: 1977.0833333333333 },
        { name: 'Tushar', salary: 1692.7083333333333 },
        { name: 'Vishal', salary: 1677.0833333333335 },
        { name: 'Raj', salary: 1477.0833333333335 },
        { name: 'Ankita', salary: 1315.6249999999998 },
        { name: 'Suraj', salary: 1294.7916666666667 },
        { name: 'Vishu', salary: 1239.375 },
        { name: 'Sumit', salary: 983.3541666666667 },
        { name: 'Pratik', salary: 577.0833333333333 },
        { name: 'Pranita', salary: 388.54166666666663 }
    ] 
*/
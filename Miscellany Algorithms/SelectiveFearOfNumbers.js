//*Description
// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

//*My solution
var AmIAfraid = function (day, num) {
	let conMonday = num === 12;
	let conTuesday = num > 95;
	let conWednesday = num === 34;
	let conThursday = num === 0;
	let conFriday = num % 2 === 0;
	let conSaturday = num === 56;
	let conSunday = num === 666 || num === -666;

	let conditions = [
		conMonday,
		conTuesday,
		conWednesday,
		conThursday,
		conFriday,
		conSaturday,
		conSunday,
	];
	let days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	let actualDay = days.indexOf(day);

	return conditions[actualDay];
};

//*Others solutions
var AmIAfraid = function (day, num) {
	var preds = {
		Sunday: (d) => d == 666 || d == -666,
		Monday: (d) => d == 12,
		Tuesday: (d) => d > 95,
		Wednesday: (d) => d == 34,
		Thursday: (d) => d === 0,
		Friday: (d) => d % 2 === 0,
		Saturday: (d) => d == 56,
	};
	return preds[day](num);
};

var AmIAfraid = function (day, num) {
	switch (day.slice(0, 2)) {
		case "Mo":
			return num === 12;
		case "Tu":
			return num > 95;
		case "We":
			return num === 34;
		case "Th":
			return num === 0;
		case "Fr":
			return !(num % 2);
		case "Sa":
			return num === 56;
		case "Su":
			return Math.abs(num) === 666;
	}
};

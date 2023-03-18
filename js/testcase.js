const testCasesData = [
	{
		id:"test101",
		"testcaseTitle":`Find the duplicate entries in the array`,
		testCasefun:"primeNum",
		testCaseParams:['a'],
		testCaseList:[
			{
				"inputs":{
					'a':[5, 8, 6, 7, 6, 6],
				},
				"expected-output":1,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[4, 6, 7, 9, 1, 10],
				},
				"expected-output":0,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[1, 1, 6, 7, 3, 4],
				},
				"expected-output":1,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[-1, 1, 6, -7, 5, 6],
				},
				"expected-output":1,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[54, 87, 6, 47, 47, 8, 9],
				},
				"expected-output":1,
				"actual-output":null

			},
			{
				"inputs":{
					'a':["1", 1, 5, 95, -95, 1, "1"],
				},
				"expected-output":2,
				"actual-output":null

			}
		],
		"testCaseDetails":`Write a function that gets an array as argument, finds the duplicate entries in the array and return the duplicate entry count.`

	},
	{
		id:"test102",
		"testcaseTitle":`Find common entries in both arrays`,
		testCasefun:"findArray",
		testCaseParams:['a','b'],
		testCaseList:[
			{
				"inputs":{
					'a':[5, 8, 6, 7],
					'b':[10, 5, 9, 7, 11]
				},
				"expected-output":[5,7],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[10, 7, 5, 14, 32],
					'b':[5, 7, 10, 6, 9] 
				},
				"expected-output":[10, 7, 5],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[4, 9, 7, 20, 45, 16],
					'b':[14, 62, 9, 7, 20]
				},
				"expected-output": [9, 7, 20],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[5, 7, 3, 1, 5, 8, 9], 
					'b':[4, 6, 7, 8, 9, 2] 
				},
				"expected-output":[7, 8, 9],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[45, 95, 75 , 65, 12, 74],
					"b":[95, 35, 65, 45, 17, 16, 95] 
				},
				"expected-output":[45, 95, 65],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[5, 7, 4, 6, 7],
					'b':[4, 7, 6, 2, 4, 8, 9]
				},
				"expected-output":[7, 4, 6],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[5, 7, 4, 6, 4, 7],
					'b':[4, 7, 6, 2, 4, 8, 9] 
				},
				"expected-output":[7, 4, 6],
				"actual-output":null

			}

		],
		"testCaseDetails":`Write a function that gets two arrays as arguments, finds common entries in both arrays, forms a new array with the common entries and returns that new array.`

	},
	{
		id:"test103",
		"testcaseTitle":`Find prime numbers in that array`,
		testCasefun:"findArray",
		testCaseParams:['a'],
		testCaseList:[
			{
				"inputs":{
					'a':[5, 7, 4, 6, 4, 7],
				},
				"expected-output":[5, 7],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[4, 6, 7, 9, 1, 10],
				},
				"expected-output":[7, 1],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[6, 4, 7, 3, 4, 1],
				},
				"expected-output":[7, 3, 1],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[1, 6, 7, 5, 6, 11],
				},
				"expected-output":[1, 7, 5, 11],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[53, 87, 73, 47, 47, 8, 9],
				},
				"expected-output":[53, 73, 47],
				"actual-output":null

			},
			{
				"inputs":{
					'a':[4, 9, 7, 20, 47, 16],
				},
				"expected-output":[7, 47],
				"actual-output":null

			}

		],
		"testCaseDetails":`Write a function that gets an array as argument, finds prime numbers in that array, inserts those prime numbers inside a new array and returns that new array.`

	},
	{
		id:"test104",
		"testcaseTitle":`Find the least missing +ve number in that array`,
		testCasefun:"findArray",
		testCaseParams:['a'],
		testCaseList:[
			{
				"inputs":{
					'a':[5, 7, 4, 6, 4, 8],
				},
				"expected-output":0,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[4, 6, 7, 9, 1, 10],
				},
				"expected-output":2,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[6, 4, 7, 3, 4],
				},
				"expected-output":5,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[6, 7, 5, 6, 11],
				},
				"expected-output":8,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[53, 87, 73, 47, 47, 8, 9],
				},
				"expected-output":10,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[4, 8, 7, 5, 6, 16],
				},
				"expected-output":9,
				"actual-output":null

			}

		],
		"testCaseDetails":`Write a function that takes an array of numbers as argument. Find the least missing +ve number in that array and return that missing number. If there is no such numbers found, return 0.`

	},
	{
		id:"test105",
		"testcaseTitle":`Loop through the array from 0th index`,
		testCasefun:"findArrayIndex",
		testCaseParams:['a'],
		testCaseList:[
			{
				"inputs":{
					'a':[1, 3, 4, 6, 2, 5, 7],
				},
				"expected-output":true,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[3, 5, 2, 4, 1, 2, 5],
				},
				"expected-output":false,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[2, 7, 1, 3, 4, 2, 6, 5],
				},
				"expected-output":false,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[4, 5, 7, 9, 2, 3, 1, 6],
				},
				"expected-output":true,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[1, 6, 7, 5, 6, 11],
				},
				"expected-output":false,
				"actual-output":null

			},
			{
				"inputs":{
					'a':[4, 8, 7, 5, 1, 16],
				},
				"expected-output":true,
				"actual-output":null

			}

		],
		"testCaseDetails":`Write a function that takes an array of numbers as argument. Loop through the array from 0th index. The loop will jump as high as the number stored in that index. If the loop ends exactly at the end of array return true or return false.`

	}
]
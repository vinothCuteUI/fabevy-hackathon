//Get all DOM's
let javascripttestcaselist = document.getElementById("javascript-testcase-list");
let maincodewrap = document.getElementById("main-code-wrap");
let testcasecontentwrap = document.getElementById("testcase-content-wrap");
let headernav = document.getElementById("header-nav");


//load test case items
let testcaseItems = testCasesData.map((items)=> {
	// console.log(items.id)
	return `<div class="list-cart">
				<div class="list-cart-body">
					<h2>${items.testcaseTitle}</h2>
					<p><span>Test Case:</span> Javascript</p>
				</div>
				<button class="btns solvebtn" onclick="solveChallenge('${items.id}')">Solve Challenge</button>
			</div>`
}).join("");
javascripttestcaselist.innerHTML = testcaseItems;

//Go to solve challenge field
let solveChallenge = function(id){
	sessionStorage.setItem("isTestCase", 1);
	sessionStorage.setItem("jsTestCaseId", id);
	maincodewrap.classList.toggle("active-wrap");
	testcasecontentwrap.classList.toggle("active-wrap");
	const setTestId = sessionStorage.getItem("jsTestCaseId");
	loadHeaderNav();
	setTestCase(setTestId);
}

let testCaseFun = function(){
	// e.preventDefault();
	headernav.innerHTML = "";
	sessionStorage.removeItem("isTestCase");
	sessionStorage.removeItem("jsTestCaseId");
	maincodewrap.classList.toggle("active-wrap");
	testcasecontentwrap.classList.toggle("active-wrap");
}

let useOnLoad = function () {
 const getIsTestCase = sessionStorage.getItem("isTestCase");
 let setTestId = sessionStorage.getItem("jsTestCaseId");

	if(getIsTestCase == 1){
		
		maincodewrap.classList.toggle("active-wrap");
		testcasecontentwrap.classList.toggle("active-wrap");
		loadHeaderNav();
		setTestCase(setTestId);
	}
};

let loadHeaderNav = function(){
	headernav.innerHTML = "";
	headernav.innerHTML += `<nav class="top-navbar" aria-label="breadcrumb" style="--bs-breadcrumb-divider: '|';">
							  <ol class="breadcrumb">
							    <li class="breadcrumb-item"><a href="#" onclick="testCaseFun()">Test Cases</a></li>
							    <li class="breadcrumb-item active" aria-current="page">Solve challenge</li>
							  </ol>
							</nav>`
}
window.onload = useOnLoad();


// sessionStorage.removeItem("key");

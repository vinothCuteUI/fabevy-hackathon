
let testCase = [];
let codeLogicNode = {}; 
let _taskTable = document.getElementById("taskTable");
// let _addParamsBtn = document.getElementsByClassName("addParamBtn")[0];
let _addTestBtn = document.getElementById("addTestbtn");
let _validateBtn = document.getElementById("validate");
let _funName = document.getElementById("funName");
let _funArg = document.getElementById("funArg");
let _codelogics = document.getElementById("codelogics");
let _testlisttable = document.getElementById("testlisttable");
let _testTitle = document.getElementById("testTitle");
let _validateCodetest = document.getElementById("validateCodetest");
let testcaseDetailsWrap = document.getElementById("testcase-details-wrap");
let getTestCase;

	function setTestCase(id){
		let _instanceData = [];
		testcaseDetailsWrap.innerHTML = "";
		getTestCase = null;
		getTestCase = testCasesData.find(item => item.id === id);
		// console.log(getTestCase)
		_funName.innerText = getTestCase.testCasefun;
		_funArg.innerText = getTestCase.testCaseParams.join(", ");
		testCase = [...getTestCase.testCaseList];
		let setTestCaseDetails = `
			<h2>${getTestCase.testcaseTitle}</h2>
			<p>${getTestCase.testCaseDetails}</p>

		`;
		for(let i = 0; i < 2; i++){
			_instanceData.push({...getTestCase.testCaseList[i]});
		}
		testcaseDetailsWrap.innerHTML += `${setTestCaseDetails} ${testCaseInstance(_instanceData)}`;
	}
	
	function testCaseInstance(testCaseIns){
		
		_testlisttable = "";
		let _testTitle = "";
		let _titleOfTh1 = "", _titleOftbl = "", _titleOftr = "", _dv = "";

		for(let key in testCaseIns[0]){
			if(key === 'inputs'){
				let paramTh = testCaseIns[0][key];
				_dv = `<div>${key}</div>`;
				let _td = "";
				for(let p in paramTh){
		 			_td += `<td class='testparamstitle'>${p}</td>`;
				}
				_titleOftbl += `<table width="100%"><tr>${_td}</tr></table>`;
		 		_titleOfTh1 += `<th class='params-th'>${_dv} ${_titleOftbl}</th>`;
			}else if(key !== "actual-output"){
				_titleOfTh1 += `<th>${key.split("-").join(" ")}</th>`;

			}
		}
		_testTitle = `<tr>${_titleOfTh1}</tr>`;
		
		let _listRow = testCaseIns.map((item, inx)=>{
			
			let _td1 = "",_td3 = "", _tbl = "", statusIcon = "";
		 	for(let key in testCaseIns[inx]){
		 		if(key === "inputs"){
		 			let parmsObj = testCaseIns[inx][key];
		 			for(let p in parmsObj){
		 				_td3 += `<td class='testparams'>${JSON.stringify(parmsObj[p])}</td>`;
		 			}
		 			_tbl += `<table width="100%"><tr>${_td3}</tr></table>`;
		 			_td1 += `<td class='params-td'>${_tbl}</td>`;	
		 		}else if(key !== "actual-output"){
		 			_td1 += `<td class='testcasetd'>${JSON.stringify(testCaseIns[inx][key])}</td>`;
		 		}
			}

			return `<tr>${_td1}</tr>`;

		}).join("");
		return _testlisttable = `<table id="testlisttable"><caption>Testcase Instance: </caption> ${_testTitle} ${_listRow}</table>`;
	}
	
	function loadJs(){
		
		if(_codelogics.value.trim() !== "" ){
			let convertFunName = getTestCase.testCasefun;
			let getArgument = getTestCase.testCaseParams.join(",");

			//set logical objects
			codeLogicNode.funName = convertFunName;
			codeLogicNode.argumentsVal = getArgument;
			codeLogicNode.getCode = `${_codelogics.value}`;
			validateCode(codeLogicNode);
			
		}else{
			alert("Code input should not be empty...!")
		}

	}
	

	function loadListTestCase(testDatalist){
		_testlisttable.innerHTML = "";
		let _testTitle = "";
		let _titleOfTh1 = "", _titleOfTh2 = "", _titleOftbl = "", _titleOftr = "", _dv = "";

		_titleOfTh1 = `<th>Test Case</th>`;
		for(let key in testDatalist[0]){
			if(key === 'inputs'){
				let paramTh = testDatalist[0][key];
				_dv = `<div>${key}</div>`;
				let _td = "";
				for(let p in paramTh){
		 			_td += `<td class='testparamstitle'>${p}</td>`;
				}
				_titleOftbl += `<table width="100%"><tr>${_td}</tr></table>`;
		 		_titleOfTh2 += `<th class='params-th'>${_dv} ${_titleOftbl}</th>`;
			}else{
				
				_titleOfTh2 += `<th>${key.split("-").join(" ")}</th>`;

			}
		}
		_testTitle = `<tr>${_titleOfTh1} ${_titleOfTh2}</tr>`;
		
		let _listRow = testDatalist.map((item, inx)=>{
			let _td1 = "";
			_td1 += `<td class='testcasetd'>Test Case ${inx+1}</td>`;

			let _td2 = "",_td3 = "", _tbl = "", statusIcon = "";
		 	for(let key in testDatalist[inx]){
		 		if(key === "inputs"){
		 			let parmsObj = testDatalist[inx][key];
		 			for(let p in parmsObj){
		 				_td3 += `<td class='testparams'>${JSON.stringify(parmsObj[p])}</td>`;
		 			}
		 			_tbl += `<table width="100%"><tr>${_td3}</tr></table>`;
		 			_td2 += `<td class='params-td'>${_tbl}</td>`;	
		 		}else{
		 			if(JSON.stringify(item["expected-output"]).trim().replace(/\s/g,"") === JSON.stringify(item["actual-output"]).trim().replace(/\s/g,"")){
		 				statusIcon = `<i class="fa fa-check successIcon" aria-hidden="true"></i>`;
		 			}else {
		 				statusIcon = `<i class="fa fa-times unsuccessIcon" aria-hidden="true"></i>`;
		 			}
		 			if(key !== "actual-output"){
		 				_td2 += `<td class='testcasetd'>${JSON.stringify(testDatalist[inx][key])}</td>`;
		 			}else{
		 				_td2 += `<td class='actualSatustd'>${JSON.stringify(testDatalist[inx][key])} ${statusIcon}</td>`;
		 			}
		 			
		 		}
			}

			return `<tr>${_td1} ${_td2}</tr>`;

		}).join("");
		_testlisttable.innerHTML = `${_testTitle} ${_listRow}`;
	}

	//Validate logical code data
	function validateCode(testCodeObj){
		let isScriptLoad = document.getElementById("runScript");
		if(isScriptLoad){
			isScriptLoad.remove();
		}
		const script = document.createElement("script");
		script.setAttribute("id", "runScript");
		script.textContent = `
			
			var ${testCodeObj.funName}= function(${testCodeObj.argumentsVal}){
				${testCodeObj.getCode}
			}

			var runStatus = testCase.map((item, indx)=>{
				let setArr = [];
				let status = null;
				let setInputs = testCase[indx]['inputs']; 
				for(let key in setInputs){
					setArr.push(setInputs[key])
				}
				
				status = ${testCodeObj.funName}(...setArr);
				item["actual-output"] = status;
				
				return item;
			}) 

			var getCodeSatus = loadListTestCase(runStatus);
		`;
		document.body.appendChild(script);
		document.getElementsByClassName("testCaseList")[0].style.display = "block";
	}

	_validateBtn.addEventListener("click", loadJs);
	// _addTestBtn.addEventListener("click", addtestcase);
	// _validateCodetest.addEventListener("click", validateCode.bind(null, codeLogicNode))


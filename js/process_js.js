// This is to process the javascript into HTML provided in javascript_advert.js.

// Configuration settings, to enable certain functionaility.
var config = {
				"icons": true, // If icons should be displayed.
				"note_colors": true, // If the notes should have colors (default = yellow).
				"random_note_colors": false, // If the note colors should be random.
				"random_note_spin": {
										"enabled": false, // If random note rotation should be enabled.
										"min": -5, // The minimum rotation.
										"max": 5, // The maximum rotation.
									},
				"clock_12hour": true, // If the clock format should be 12 hour AM/PM or 24 hour.
				"thousand_seperator": "," // This is the seperator for thosands, different per region.
			 };

// Single word strings into better looking.
// This is a long like, however its only function is to make the words look better.
var stringToPretty = {
					  'mobilephone': 'Mobile Phone',
					  'teamevents': 'Team Events',
					  'freestuff': 'Free Stuff',
					  'oneof': 'One Of',
					  'p2p': 'P2P',
					  'startdate': 'Start Date',
					  'companysize': 'Company Size',
					  'teamsize': 'Team Size',
					  'relocationpackage': 'Relocation Package',
					  'newfeatures': 'New Features',
					  'clientsupport': 'Client Support',
					  'codereviews': 'Code Reviews',
					  'operatingsystem': 'Operating System',
					  'gametheory': 'Game Theory',
					  'boardgames': 'Boardgames',
					  'fossphilosophy': 'Foss Philosophy',
					  'codingretreats': 'Coding Retreats',
					  'pairprogramming': 'Pair Programming',
					  'workweek': 'Work Week',
					  'workload': 'Work Load',
					  'corehours': 'Core Hours',
					  'failfast': 'Fail-fast',
					  'buildserver': 'Build Server',
					  'unittests': 'Unit Tests',
					  'integrationtests': 'Integration Tests',
					  'staticcodeanalysis': 'Static Code Analysis',
					  'versioncontrol': 'Version Control',
					  'issuetracker': 'Issue Tracker',
					  'knowledgerepo': 'Knowledge Repository',
					  'qaprotocol': 'QA Protocol',
					  'agilemanagement': 'Agile Management',
					  'freedomovertools': 'Freedom Over Tools',
					  'onecommandbuild': 'One Command Build',
					  'quickstart': 'Quick Start',
					  'commitondayone': 'Commit On Day One',
					  'TenToTwenty': '10 to 20',
					  'LessThanTen': 'Less than 10',
					  'TwentyToFifty': '20 to 50',
					  'FiftyToTwoHundred': '50 to 200',
					  'MoreThanTwoHundred': 'More than 200',
					  'html5': 'HTML5',
					  'javascript': 'Java Script',
					  'css3': 'CSS3',
					  'jsonrpc': 'JSON-RPC',
					  'uiux': 'UI / UX',
					  'macosx': 'Mac Os X',
					 };

// These icons are displayed if config.icons is enabled, the icons are stored in the icons directory.
var lIcons = ['github', 'git', 'notyetchosen', 'travis', 'githubwiki', 'macosx', 'ubuntu', 'laptop', 'monitors', 'negotiable', 'plentiful', 'good', 'expert', 'kanban', 'permanent', 'blockchain', 'familiar', 
			  'coffee', 'beverages', 'snacks', 'bikeparking', 'playroom', 'speaking', 'attending', 'alwaysopen', 'informal'];					  

// Just a variable to hold the boxes so that we can place them.					  
var boxes = [];

// This is the function which is ran to begin, it is using body.onload.
function processJs() {
	// This is for testing a single box to include all of the values.
	// It is useful to see if the handleType function is working correctly.
	/*var test = newBox('testbox', 'Test single box.');
	handleType(test, job);
	test.addTo(document.body);*/
	getJobDetails();
	placeNotes();
}

// During development, it was decided that the information would be displayed using pinned notes.
// This places them with custom details, it also allows the random options like colors and rotation.
function placeNotes() {
	var colors = ["yellow", "blue", "green", "pink", "orange"];
	for(var i in boxes) {
		var box = boxes[i];
		var myColor = "";
		switch (box.id) {
			
			case "headline":
				myColor = "orange";
				box.style.top = "2%";
				box.style.left = "22.5%";
				box.style.width = "1000px";
				box.style.textAlign = "center";
				box.style.zIndex = 0;
				box.style.transform = "rotate(1deg)";
			break;
				
				case "misc":
					myColor = "green";
					box.style.top = "5%";
					box.style.left = "72%";
					box.style.width = "150px";
					box.style.zIndex = 2;
					box.style.transform = "rotate(-1.6deg)";
				break;
				
				case "technologies":
					myColor = "blue";
					box.style.top = "0.12%";
					box.style.left = "62%";
					box.style.width = "140px";
					box.style.zIndex = 3;
				break;
				
				case "equipment":
					myColor = "green";
					box.style.top = "55%";
					box.style.left = "39%";
					box.style.zIndex = 1;
					box.style.transform = "rotate(4deg)";
				break;
				
				case "profile":
					myColor = "blue";
					box.style.top = "26%";
					box.style.left = "19%";
					box.style.zIndex = 1;
					box.style.transform = "rotate(-1.3deg)";
				break;
				
				case "methodology":
					myColor = "yellow";
					box.style.top = "5%";
					box.style.left = "27%";
					box.style.width = "190px";
					box.style.zIndex = 1;
				break;
				
				case "essentials":
					myColor = "yellow";
					box.style.top = "29%";
					box.style.left = "52%";
					box.style.zIndex = 2;
					box.style.transform = "rotate(4deg)";
				break;
				
				case "specs":
					myColor = "pink";
					box.style.top = "13%";
					box.style.left = "40.6%";
					box.style.zIndex = 1;
				break;
				
				case "other":
					myColor = "pink";
					box.style.top = "3%";
					box.style.left = "15%";
					box.style.zIndex = 1;
					box.style.transform = "rotate(-4deg)";
				break;
			
			default:
				console.log("Unhandled box: "+box.id);
				break;
		}
		// Random colors.
		if (config.random_note_colors) {
			myColor = colors[Math.floor(Math.random() * colors.length)];
		}
		// Random rotation.
		if (config.random_note_spin.enabled) {
			var min = config.random_note_spin.min;
			var max = config.random_note_spin.max;
			// These are all checks to support negitive to positive rotations.
			max = min < 0 ? max*2 : min > 0 ? max-min : max;
			var rotation = Math.floor(Math.random()*(max+1)) + min;
			box.style.transform = "rotate("+rotation+"deg)";
		}
		// If note colors are enabled.
		if (config.note_colors) {
			box.className += " " + myColor;
			box.style.borderColor = myColor;
		}
	}
}

// This function goes over creates the notes and handles all of the json.
// This is required to make seperate boxes, otherwise just calling handleType will make one big box.
function getJobDetails() {
	for(var i in job) {
		var details = job[i];
		var myBox = newBox(i, '');
		addToBody(myBox);
		
		boxes.push(myBox);
		
		if (typeof details == "string") {
			handleString(myBox, details);
			continue;
		}
	
		for(var c in details) {
			if (isNaN(c))
				newHeader('h'+c, 4, c.makePretty()).addTo(myBox);
			handleType(myBox, details[c]);

		}
	}
}

// Handle what data we have, then use a format to suit it.
// We lookup the type, and then handle it using that type, also we use Extra for dates and other special formats.
function handleType(element, item) {
	switch (typeof item) {
		case "boolean":
			return handleBoolean(element, item);
			
		case "string":
			return handleString(element, item);
				
		case "number":
			return handleNumberExtra(element, item);
			
		case "object":
			return handleListExtra(element, item);
			
		default:
			return handleUnknown(element, item);
	}
}

// Handle extra numbers, such as date.
// Otherwise just output the raw number.
function handleNumberExtra(element, item) {
	if (item > 1400000000000 && item < 2100000000000) {
		handleDate(element, item);
	} else if (item > 0 && item % 3600 == 0) {
		handleHours(element, item);
	} else {
		handleNumber(element, item);
	}
}

// This supports more than just a ul or ol.
// If nothing is found just use handleList.
function handleListExtra(element, item) {
	// Check for a salary.
	if ("currency" in item && "amount" in item && "interval" in item) {
		handleSalary(element, item);
	} else if ("min" in item && "max" in item) {
		handleMinMax(element, item);
	} else if ("from" in item && "to" in item) {
		handleFromTo(element, item);
	} else {
		handleList(element, item);
	}
}

// Boolean, it becomes either a tick or cross.
function handleBoolean(element, item) {
	newTickBox('b'+element.id, item===true ? true : false).addTo(element);
}

// String, we apply the makePretty function to find a better string and put spaces between capitals.
function handleString(element, item) {
	newElement('div', '', '', getIcon(item) + item.makePretty().replace(/([A-Z])/g, ' $1').trim()).addTo(element);
}

// Number, should a number be at least 1000 it will have commas added.
function handleNumber(element, item) {
	newElement('div', '', '', item >= 1000 ? addCommas(item) : item).addTo(element);
}

// Handle a list, which then handles those in another context.
// It will swap itself to make it a parent of the new child to allow lists to be formed.
function handleList(element, item) {
	var list = newList('', false);
	list.addTo(element);
	var curContext = list;
	for (var i in item) {
		// If it is a mapped list, then also print out the name tag.
		if (isNaN(i)) {
			var newDiv = newElement('div', '', '', '');
			newHeader('', 4, i.makePretty()).addTo(curContext);
			newDiv.addTo(element);
			curContext = newList('', false);
			curContext.addTo(newDiv);
		} else if (curContext != list) {
			curContext = list;
		}
		handleType(curContext, item[i]);
	}
}

// If there is nothing to handle it.
// There should be nothing which is unhandled with this json, but is useful for debugging new json files.
function handleUnknown(element, item) {
	console.log("Unhandled type: "+(typeof item)+" value: "+item);
}

// Handle the Salary part, used within list to handle it.
function handleSalary(element, item) {
	item.amount = addCommas(item.amount);
	item.symbol = addCurrencySymbol(item.currency);
	newElement('div', '', '', '%symbol%%amount% %currency% %interval%ly'.sprintf(item)).addTo(element);
}

// Handle the min max data part.
function handleMinMax(element, item) {
	newElement('div', '', '', '%min% to %max%'.sprintf(item)).addTo(element);
}

// Handle the from to data part.
function handleFromTo(element, item) {
	item.from = prettyHour(item.from, config.clock_12hour);
	item.to = prettyHour(item.to, config.clock_12hour);
	newElement('div', '', '', 'From %from% To %to%'.sprintf(item)).addTo(element);
}

// If there it is a multiple of 3600 (hour in seconds), then we will make it into hours.
function handleHours(element, item) {
	newElement('div', '', '', (item/3600) + ' hours').addTo(element);
}

// This outputs the date should a suitable number be found.
function handleDate(element, item) {
	var date = new Date(item);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	newElement('div', '', '', date.getDate()+' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' ' + prettyHour(date.getHours().toString()+date.getMinutes().toString(), config.clock_12hour)).addTo(element);
}

// This function simply gets an icon if avaliable, makes it look better.
function getIcon(name) {
	name = name.toLowerCase();
	return config.icons && lIcons.indexOf(name) >= 0 ? '<span class="iconholder" style="background-image:url(\'images/icons/'+name+'.png\');background-repeat: no-repeat;"></span>' : '';
}

function newTickBox(id, ticked) {
	return newElement('div', id, 'tickbox ' + (ticked ? 'checked' : 'crossed'), ticked ? "&#x2713;" : "&#x2717;");
}

function newHeader(id, size, content) {
	size = size < 1 ? 1 : size > 6 ? 6 : size;
	return newElement('h'+size, id, '', content);
}

function newList(id, ordered) {
	return newElement(ordered ? 'ol' : 'ul', id, '', '');
}

function newListItem(id, content) {
	return newElement('li', id, '', content);
}

function newBox(id, content) {
	var box = newElement('div', id, 'databox', '');
	newHeader('', 3, id.capitalizeFirstLetter()).addTo(box);
	newElement('div', id+'content', '', content).addTo(box);
	return box;
}

// This creates a new element and is used by all functions which create a new element.
function newElement(elementType, id, className, content) {
	var boxElement = document.createElement(elementType);
	if (id !== undefined && id.length > 0)
		boxElement.id = id;
	if (className !== undefined && className.length > 0)
		boxElement.className = className;
	boxElement.innerHTML = content;
	return boxElement;
}

// An easy function to add element to body.
function addToBody(element) {
	addChild(document.body, element);
}

// This is used to add an element to another.
function addChild(elementParent, elementChild) {
	// If our parent is a list (ol or ul), then put this in a li.
	// This is required to add to a list, otherwise it wouldn't be part of the list.
	if (elementChild.tagName != 'LI' && (elementParent.tagName == 'OL' || elementParent.tagName == 'UL')) {
		var list = newListItem('', '');
		elementChild.addTo(list);
		elementChild = list;
	}
	elementParent.appendChild(elementChild);
}

// This changes the number into a String and adds commas or whatever is defined in config. Example: 1000 becomes 1,000.
function addCommas(obj) {
	return obj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, config.thousand_seperator);
}

// Support for additional currencies is easy, put the main three that would likely be used.
function addCurrencySymbol(cur) {
	var currency_symbol = {
		'USD': '$',
		'EUR': '&euro;',
		'GBP': '&pound;',
	};
	return cur in currency_symbol ? currency_symbol[cur] : cur;
}

// This function supports both 12 and 24 hour time formats.
function prettyHour(text, hour12) {
	text = text.toString();
	// If it is a single hour use that instead.
	var hh = text.slice(0, text.length < 4 ? 1 : 2);
	var mm = text.slice(-2);
	// Prevent 00 becoming 0, due to either the hour / minute being 1 long instead of 2.
	while (hh.length < 2)
		hh = '0' + hh;
	while (mm.length < 2)
		mm = '0' + mm;
	console.log('raw: '+text+' pretty: '+hh+':'+mm);
	if (hour12 !== undefined && hour12) {
		var hours = parseInt(hh);
		if (hours > 12) {
			hours -= 12;
			hh = hours;
			mm += ' PM';
		} else {
			mm += ' AM';
		}
	}
	return hh + ':' + mm;
}

// This is an alternative to appendChild / addChild.
Element.prototype.addTo = function(parentElement) {
	addChild(parentElement, this);
	//parentElement.appendChild(this);
}

// This allows the name to be used instead of the element.
Element.prototype.addToName = function(parentName) {
	document.getElementById(parentName).appendChild(this);
}

// This makes the first letter capital, used for making the data look nicer.
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// This function uses the above function if it is not included in the map.
String.prototype.makePretty = function() {
	if (this in stringToPretty) {
		return stringToPretty[this];
	}
	return this.capitalizeFirstLetter();
}

// This function basically replaces part of the string with map.
// It works differently than most, it does not use values like %d for number or %s for string.
// For example, "this string %should% be good." would be replaced if should is in map.
String.prototype.sprintf = function(map) {
	var me = this;
	for(var key in map) {
		me = me.replace('%'+key+'%', map[key]);
	}
	return me;
}
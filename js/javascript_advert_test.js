// To apply as a JS wiz/full stack guy or gal, give us some code (info@ethcore.io) that processes this into a lovely-looking web (HTML/CSS/JS) document
var job = {
	"headline": "Javascript wizard with good sense of design",
	"essentials": {
		"locations": ["berlin", "london", "paris"],
		"employment": EmploymentType().Temporary,
		"startdate": (new Date()).getTime()+5392250000,
		"salary": {
			"status": TaxStatus().Net,
			"interval": Interval().Month,
			"currency": "USD",
			"amount": 32141,
			"stockoptions": true,
		},
		"industry": "Blockchain",
		"companysize": CompanySize().MoreThanTwoHundred,
		"teamsize": { "min": 10, "max": 50 },
	},
	"methodology": {
		"codereviews": true,
		"prototyping": true,
		"pairprogramming": true,
		"failfast": true,
		"unittests": true,
		"integrationtests": true,
		"buildserver": BuildServers().Jenkins,
		"staticcodeanalysis": CodeAnalysisTools().NotYetChosen,
		"versioncontrol": VersionControlSystem().NotYetChosen,
		"issuetracker": IssueTrackers().NotYetChosen,
		"knowledgerepo": KnowledgeRepos().NotYetChosen,
		"standups": true,
		"qaprotocol": false,
		"agilemanagement": AgileManagementSystems().NotYetChosen,
		"freedomovertools": false,
		"onecommandbuild": true,
		"quickstart": false,
		"commitondayone": false,
	},
	"specs": {
		"workload": 2,
		"workweek": 40 * 60 * 60 * 3600,
		"holidays": 201,
		"corehours": { from: 925, to: 2354 },
		"travel": TravelOptions().Possible,
		"remote": RemoteWorking().No,
		"relocationpackage": RelocationPackages().Nonealse,
	},
	"profile": {
		"newfeatures": 12,
		"clientsupport": 5,
		"documentation": 18,
		"maintenance": 3,
		"meetings": 8,
	},
	"equipment": {
		"operatingsystem": [OperationSystems().Windows, OperationSystems().Ubuntu],
		"computer": MachineType().Workstation,
		"monitors": Monitors().Negotiable,
	},
	"technologies": {
		"css3": Level().Familiar,
		"html5": Level().Familiar,
		"javascript": Level().Good,
		"node": Level().Expert,
		"rest": Level().Expert,
		"jsonrpc": Level().Expert,
		"uiux": Level().Expert,
		"design": Level().Expert,
		"oneof": {
			"junit": Level().Expert,
			"mocha": Level().Good,
			"jasmine": Level().Expert,
			"selenium": Level().Good,
		},
		"oneof": {
			"react": Level().Familiar,
			"meteor": Level().Expert,
			"angular": Level().Familiar,
		},
		"p2p": Level().Good,
		"ethereum": Level().Expert,
		"blockchain": Level().Familiar,
		"oneof": {
			"rust": Level().Familiar,
			"haskell": Level().Good,
			"ruby": Level().Expert,
			"python": Level().Good,
			"cpp": Level().Expert,
		},
		"gametheory": Level().Good,
		"cryptography": Level().Expert,
		"boardgames": Level().Expert,
	},
	"other": [
		"we do retreats",
		"we change the world",
		"best team around",
		"hardcore",
	],
	"misc": {
		"training": TrainingType().Formal,
		"fossphilosophy": FOSS().SometimesOpen,
		"codingretreats": false,
		"conferences": [ConferencePotential().Attending],
		"teamevents": false,
		"healthcare": false,
		"mobilephone": true,
		"kitchen": false,
		"canteen": true,
		"spaceship": true,
		"aregood": true,
		"rewards": 100,
		"freestuff": ["coffee", "beverages", "toothbrush", "spaceroom"],
	}
}

function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
function TaxStatus() { return enumerate("Gross", "Net"); }
function Interval() { return enumerate("Week", "Month", "Year"); }
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
function VersionControlSystem() { return enumerate("NotYetChosen", "Git"); }
function IssueTrackers() { return enumerate("NotYetChosen", "GitHub"); }
function BuildServers() { return enumerate("NotYetChosen", "Jenkins", "Travis"); }
function CodeAnalysisTools() { return enumerate("NotYetChosen"); }
function KnowledgeRepos() { return enumerate("NotYetChosen", "GitHubWiki"); }
function AgileManagementSystems() { return enumerate("NotYetChosen", "Kanban"); }
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); }
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); }
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); }
function OperationSystems() { return enumerate("MacOSX", "Ubuntu", "Windows"); }
function MachineType() { return enumerate("Workstation", "Laptop"); }
function Monitors() { return enumerate("Negotiable"); }
function Level() { return enumerate("Familiar", "Good", "Expert"); }
function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); }
function ConferencePotential() { return enumerate("Attending", "Speaking"); }
function FOSS() { return enumerate("Closed", "SometimesOpen", "AlwaysOpen"); }

//https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v=arguments;s={all:[],keys:v};for(i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };
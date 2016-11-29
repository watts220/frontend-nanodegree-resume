/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name": "Alexander Tsybulia",
	"role": "Web Developer",
	"contacts":{
		"mobile":"380-631-34-74 ",
		"email":"watts220@gmail.com",
		"github":"https://github.com/watts220",
		"twitter":"https://twitter.com/?lang=ru",
		"location":"Nikolaev, Ukraine",
	},
	"welcomeMessage":"lore ipsum sit amet etc etc etc",
	"skills": [
		"awasomeness", "delivering", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
		{
			"name": "Petro Mogila Black Sea University",
			"location": "Nikolaev, Ukraine",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2013,	
			"url": "https://blacksea-example.com/"
		},
		{
			"name": "School",
			"location": "Novy Bug, Ukraine",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2005,	
			"url": "https://school-example.com/"	
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Crash Cource",
			"school": "Udacity",
			"dates": 2016,
			"url": "https://classroom.udacity.com/courses/ud804/"
		}
	]
};
var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"dates": "1998 - 1999",
			"location":"Kiev, Ukraine",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"employer": "Mamma Pizza",
			"title": "Delivery Boy",
			"dates": "1999 - 2001",
			"location":"Odessa, Ukraine",
			"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"	
		}
	]
};
var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "2014",
			"description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
			"images": [
				"https://shapebootstrap.net/media/com_product/products/thumb/1524965/thumbnail.png"

			]
		},
		{
			"title": "Project 2",
			"dates": "2016",
			"description": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
			"images": [
				"https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0708887.png?v=1.0"

			]	
		}
	]
};
projects.display = function(){
	for (var i = 0; i < this.projects.length; i++){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		for(var j = 0; j < this.projects[i].images.length; j++){
			var formattedImage = HTMLprojectImage.replace("%data%", this.projects[i].images[j]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}
projects.display();

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedbioMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedbioPic);
$("#header").append(formattedbioMsg);

for(var BioKey in bio.contacts){
	var formattedContactName = HTMLcontactGeneric.replace("%contact%", BioKey);
	var formattedContact = formattedContactName.replace("%data%", bio.contacts[BioKey])
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);
}


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}
function displayWork(){
	for (var i = 0; i < work.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);


	}
}

displayWork();

function displayEducation(){
	for (var i = 0; i < education.schools.length; i++){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName  = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree= HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;

		$(".education-entry:last").append(formattedSchoolTitle);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (var i = 0; i < education.onlineCourses.length; i++){
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle  = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedOnlineSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedOnlineTitle = formattedOnlineTitle + formattedOnlineSchool;

		$(".education-entry:last").append(formattedOnlineTitle);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

displayEducation();

function logClicks(x,y){
	console.log("location x: " + x + "; location y: " + y);
}
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function inName(fname, lname){
	var capt_fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
	var capt_lname = lname.toUpperCase();

	return capt_fname + " " + capt_lname;
}

$("button").click(function(){
	var names_str = $("#name").text();
	var names_arr = names_str.split(" ");
	var fin_names = inName(names_arr[0], names_arr[1]);

	$("#name").text(fin_names);
});




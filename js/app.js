    var model = {
    	bio : {
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
        },
        education : {
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
        },
        work : {
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
        },
        projects : {
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
        }
    };

    var octopus = {
        init: function() {
            BioView.init();
            EducationView.init();
            ProjectsView.init();
            WorkView.init();
            MapView.init();
        },
        getBio: function() {
            return model.bio;
        },
        getEducation: function() {
            return model.education;
        },
        getWork: function() {
            return model.work;
        },
        getProjects: function() {
            return model.projects;
        },
        locationFinder: function() {
            var bio = octopus.getBio();
            var work = octopus.getWork();
            var education = octopus.getEducation();


            // initializes an empty array
            var locations = [];

            // adds the single location property from bio to the locations array
            locations.push(bio.contacts.location);

            // iterates through school locations and appends each location to
            // the locations array. Note that forEach is used for array iteration
            // as described in the Udacity FEND Style Guide:
            // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
            education.schools.forEach(function(school){
              locations.push(school.location);
            });

            // iterates through work locations and appends each location to
            // the locations array. Note that forEach is used for array iteration
            // as described in the Udacity FEND Style Guide:
            // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
            work.jobs.forEach(function(job){
              locations.push(job.location);
            });

            return locations;
        },
        createMapMarker: function(placeData) {

            // The next lines save location data from the search result object to local variables
            var lat = placeData.geometry.location.lat();  // latitude from the place service
            var lon = placeData.geometry.location.lng();  // longitude from the place service
            var name = placeData.formatted_address;   // name of the place from the place service
            var bounds = window.mapBounds;            // current boundaries of the map window

            // marker is an object with additional data about the pin for a single location
            var marker = new google.maps.Marker({
              map: map,
              position: placeData.geometry.location,
              title: name
            });

            // infoWindows are the little helper windows that open when you click
            // or hover over a pin on a map. They usually contain more information
            // about a location.
            var infoWindow = new google.maps.InfoWindow({
              content: name
            });

            // hmmmm, I wonder what this is about...
            google.maps.event.addListener(marker, 'click', function() {
              infoWindow.open(map, marker);
            });

            // this is where the pin actually gets added to the map.
            // bounds.extend() takes in a map location object
            bounds.extend(new google.maps.LatLng(lat, lon));
            // fit the map to the new marker
            map.fitBounds(bounds);
            // center the map
            map.setCenter(bounds.getCenter());
        },
        callback: function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                octopus.createMapMarker(results[0]);
            }
        },

        pinPoster: function(locations) {
            // creates a Google place search service object. PlacesService does the work of
            // actually searching for location data.
            var service = new google.maps.places.PlacesService(map);

            // Iterates through the array of locations, creates a search object for each location
            locations.forEach(function(place){
                // the search request object
                var request = {
                  query: place
                };

                // Actually searches the Google Maps API for location data and runs the callback
                // function with the search results after each search.
                service.textSearch(request, octopus.callback);
            });
        }
    };

    var BioView = {
        init: function() {
            this.header = $("#header");
            this.topContacts = $("#topContacts");
            this.footerContacts = $("#footerContacts");

            this.HTMLheaderName = '<h1 id="name">%data%</h1>';
            this.HTMLheaderRole = '<span>%data%</span><hr>';

            this.HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
            this.HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
            this.HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
            this.HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
            this.HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
            this.HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
            this.HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

            this.HTMLbioPic = '<img src="%data%" class="biopic">';
            this.HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

            this.HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
            this.HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

            this.render();
        },
        render: function(){
            var bio = octopus.getBio();

            var formattedName = this.HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = this.HTMLheaderRole.replace("%data%", bio.role);


            this.header.prepend(formattedRole);
            this.header.prepend(formattedName);

            var formattedbioPic = this.HTMLbioPic.replace("%data%", bio.bioPic);
            var formattedbioMsg = this.HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

            this.header.append(formattedbioPic);
            this.header.append(formattedbioMsg);

            for(var BioKey in bio.contacts){
                var formattedContactName = this.HTMLcontactGeneric.replace("%contact%", BioKey);
                var formattedContact = formattedContactName.replace("%data%", bio.contacts[BioKey])
                BioView.topContacts.append(formattedContact);
                BioView.footerContacts.append(formattedContact);
            }


            if(bio.skills.length > 0){
                this.header.append(this.HTMLskillsStart);
                for(var i = 0; i < bio.skills.length; i++){
                    var formattedSkill = this.HTMLskills.replace("%data%", bio.skills[i]);
                    $("#skills").append(formattedSkill);
                }
            }
        }
    };

    var EducationView = {
        init: function() {
            this.educationOuter = $("#education");
            this.HTMLschoolStart = '<div class="education-entry"></div>';
            this.HTMLschoolName = '<a href="#">%data%';
            this.HTMLschoolDegree = ' -- %data%</a>';
            this.HTMLschoolDates = '<div class="date-text">%data%</div>';
            this.HTMLschoolLocation = '<div class="location-text">%data%</div>';
            this.HTMLschoolMajor = '<em><br>Major: %data%</em>';

            this.HTMLonlineClasses = '<h3>Online Classes</h3>';
            this.HTMLonlineTitle = '<a href="#">%data%';
            this.HTMLonlineSchool = ' - %data%</a>';
            this.HTMLonlineDates = '<div class="date-text">%data%</div>';
            this.HTMLonlineURL = '<br><a href="#">%data%</a>';

            this.render();
        },
        render: function(){
            var education = octopus.getEducation();

            for (var i = 0; i < education.schools.length; i++){
                this.educationOuter.append(this.HTMLschoolStart);
                var educationEntry = $(".education-entry:last");

                var formattedSchoolName  = this.HTMLschoolName.replace("%data%", education.schools[i].name);
                var formattedSchoolDegree= this.HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;

                educationEntry.append(formattedSchoolTitle);

                var formattedSchoolDates = this.HTMLschoolDates.replace("%data%", education.schools[i].dates);
                educationEntry.append(formattedSchoolDates);

                var formattedSchoolLocation = this.HTMLschoolLocation.replace("%data%", education.schools[i].location);
                educationEntry.append(formattedSchoolLocation);

                var formattedSchoolMajor = this.HTMLschoolMajor.replace("%data%", education.schools[i].majors);
                educationEntry.append(formattedSchoolMajor);
            }

            this.educationOuter.append(this.HTMLonlineClasses);

            for (var i = 0; i < education.onlineCourses.length; i++){
                this.educationOuter.append(this.HTMLschoolStart);
                var educationEntry = $(".education-entry:last");

                var formattedOnlineTitle  = this.HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                var formattedOnlineSchool= this.HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineTitle = formattedOnlineTitle + formattedOnlineSchool;

                educationEntry.append(formattedOnlineTitle);

                var formattedOnlineDates = this.HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                educationEntry.append(formattedOnlineDates);

                var formattedOnlineURL = this.HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                educationEntry.append(formattedOnlineURL);
            }
        }
    };

    var WorkView = {
        init: function() {
            this.workOuter = $("#workExperience");
            this.HTMLworkStart = '<div class="work-entry"></div>';
            this.HTMLworkEmployer = '<a href="#">%data%';
            this.HTMLworkTitle = ' - %data%</a>';
            this.HTMLworkDates = '<div class="date-text">%data%</div>';
            this.HTMLworkLocation = '<div class="location-text">%data%</div>';
            this.HTMLworkDescription = '<p><br>%data%</p>';

            this.render();
        },
        render: function(){
            var work = octopus.getWork();

            for (var i = 0; i < work.jobs.length; i++){
                this.workOuter.append(this.HTMLworkStart);
                var workEntry = $(".work-entry:last");

                var formattedEmployer = this.HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                var formattedTitle = this.HTMLworkTitle.replace("%data%", work.jobs[i].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;

                workEntry.append(formattedEmployerTitle);

                var formattedDates = this.HTMLworkDates.replace("%data%", work.jobs[i].dates);
                workEntry.append(formattedDates);

                var formattedLocation = this.HTMLworkLocation.replace("%data%", work.jobs[i].location);
                workEntry.append(formattedLocation);

                var formattedDescription = this.HTMLworkDescription.replace("%data%", work.jobs[i].description);
                workEntry.append(formattedDescription);
            }
        }
    };

    var ProjectsView = {
        init: function() {
            this.projectsOuter = $("#projects");

            this.HTMLprojectStart = '<div class="project-entry"></div>';
            this.HTMLprojectTitle = '<a href="#">%data%</a>';
            this.HTMLprojectDates = '<div class="date-text">%data%</div>';
            this.HTMLprojectDescription = '<p><br>%data%</p>';
            this.HTMLprojectImage = '<img src="%data%">';

            this.render();
        },
        render: function(){
            var projects = octopus.getProjects();

            for (var i = 0; i < projects.projects.length; i++){
                this.projectsOuter.append(this.HTMLprojectStart);

                var formattedTitle = this.HTMLprojectTitle.replace("%data%", projects.projects[i].title);
                var formattedDates = this.HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                var formattedDescription = this.HTMLprojectDescription.replace("%data%", projects.projects[i].description);

                $(".project-entry:last").append(formattedTitle);
                $(".project-entry:last").append(formattedDates);
                $(".project-entry:last").append(formattedDescription);

                for(var j = 0; j < projects.projects[i].images.length; j++){
                    var formattedImage = this.HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    };

    var MapView = {
        init: function() {
            this.googleMap = '<div id="map"></div>';
            this.mapDiv = $("#mapDiv");

            this.mapOptions = {
                disableDefaultUI: false
            };

            this.render();
        },
        render: function(){
            var locations;
            this.mapDiv.append(this.googleMap);
            /*
            For the map to be displayed, the googleMap var must be
            appended to #mapDiv in resumeBuilder.js.
            */
            map = new google.maps.Map(document.querySelector('#map'), this.mapOptions);

            // Sets the boundaries of the map based on pin locations
            window.mapBounds = new google.maps.LatLngBounds();

            // locations is an array of location strings returned from locationFinder()
            locations = octopus.locationFinder();

            // pinPoster(locations) creates pins on the map for each location in
            // the locations array
            octopus.pinPoster(locations);
        }
    };

    octopus.init();

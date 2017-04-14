var work = {
    jobs: [
        {
            employer: "Naphta Informática",
            title: "Software Developer",
            location: "Novo Hamburgo, RS, Brazil",
            dates: "2014 to 2016",
            description: "Desenvolvimento de sistemas ERPs personalizados"
        },
        {
            employer: "Har Tecnologia",
            title: "Web Developer",
            location: "Florianópolis, SC, Brazil",
            dates: 'in progress',
            description: 'Desenvolvimento de soluções de software para wifi de hoteis'
        }
    ],
    display: function () {
        work.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last")
                .append(formattedEmployerTitle)
                .append(formattedWorkDates)
                .append(formattedWorkLocation)
                .append(formattedWorkDescription);
        });
    }
}

var projects = {
    projects: [
        {
            title: "HBook Mobile App",
            dates: "2017",
            description:
            "Desenvolvimento de um aplicativo para reservas de hoteis, visualização de ofertas e recebimento " +
            "de notificações de novas ofertas",
            images: []
        }
    ],
    display: function () {
        projects.projects.forEach(function (project) {
            var images;

            project.images.forEach(function (image) {
                images += HTMLprojectImage.replace("%data%", image);
            });

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last")
                .append(HTMLprojectTitle.replace("%data%", project.title))
                .append(HTMLprojectDates.replace("%data%", project.dates))
                .append(HTMLprojectDescription.replace("%data%", project.description))
                .append(images);
        });
    }
}

var bio = {
    name: "Matheus Eugênio dos Santos",
    role: "Full Stack Developer",
    contacts: {
        mobile: "55 48 988395454",
        email: "teteusantosgd@gmail.com",
        github: "https://github.com/teteusantosgd",
        twitter: "",
        location: "Florianópolis, SC, Brazil"
    },
    welcomeMessage: "Welcome to my online resume",
    skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Asp.Net Mvc",
        "TypeScript",
        "AngularJS",
        "Ionic 2"
    ],
    biopic: "images/me.jpg",
    display: function () {
        $("#header")
            .prepend(HTMLheaderRole.replace("%data%", bio.role))
            .prepend(HTMLheaderName.replace("%data%", bio.name))
            .append(HTMLbioPic.replace("%data%", bio.biopic))
            .append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        $("#topContacts, #footerContacts")
            .append(HTMLmobile.replace("%data%", bio.contacts.mobile))
            .append(HTMLemail.replace("%data%", bio.contacts.email))
            .append(HTMLgithub.split("%data%").join(bio.contacts.github))
            .append(HTMLlocation.replace("%data%", bio.contacts.location));

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function (skill) {
                $("#skills").append(HTMLskills.replace('%data%', skill));
            });
        }
    }
}

var education = {
    schools: [
        {
            name: "Unicesumar",
            location: "Florianópolis, SC, Brazil",
            degree: "Sistemas para Internet",
            majors: [

            ],
            dates: "01/2016 to 07/2016",
            url: ""
        }
    ],
    onlineCourses: [
        {
            title: "Front End Nanodegree",
            school: "Udacity",
            dates: "2017",
            url: "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        }
    ],
    display: function () {
        education.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);

            var HTMLschoolNameAndDegree = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);

            $(".education-entry:last")
                .append(HTMLschoolNameAndDegree)
                .append(HTMLschoolDates.replace("%data%", school.dates))
                .append(HTMLschoolLocation.replace("%data%", school.location));
        });

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function (onlineCourse) {
            $("#education").append(HTMLschoolStart);

            var HTMLschoolTitleAndSchool = HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school);
            $(".education-entry:last")
                .append(HTMLschoolTitleAndSchool)
                .append(HTMLonlineDates.replace("%data%", onlineCourse.dates))
                .append(HTMLonlineURL.replace("%data%", onlineCourse.url));
        });
    }
}

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function (e) {
    logClicks(e.pageX, e.pageY);
});

// $("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

function inName(fullName) {
    var names = fullName.split(' ');
    names[names.length - 1] = names[names.length - 1].toUpperCase();
    return names.join(' ');
}
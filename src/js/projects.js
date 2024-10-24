document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
});

function mapProjectsData() {
    let projects = [
       
        // {
        //     "title": "Devfolio",
        //     "image": "images/projects/devfolio.png",
        //     "type": "Open Source",
        //     "labels": [
        //         {
        //             "title": "Play",
        //             "link": "https://play.google.com/store/apps/details?id=com.hmz.folio"
        //         },
        //         {
        //             "title": "Web",
        //             "link": "http://mhmzdev.github.io/devfolio"
        //         },
        //         {
        //             "title": "GitHub",
        //             "link": "https://github.com/mhmzdev/devfolio"
        //         }
        //     ]
        // },
        {
            "title": "Clock Tower Food Delivery",
            "image": "images/projects/clock_tower_with_tower.jpg",
            "type": "Product",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/CodeWithDrac"
                },
                // {
                //     "title": "Package",
                //     "link": "https://pub.dev/packages/awesome_snackbar_content"
                // }
            ]
        },
        {
            "title": "Ecommerce App",
            "image": "images/projects/foodDelivey.png",
            "type": "Product",
            "labels": [
                // {
                //     "title": "Web",
                //     "link": "https://ejaapp.com/en"
                // },
                // {
                //     "title": "App",
                //     "link": "https://ejaapp.com/en"
                // },
                // {
                //     "title": "Play",
                //     "link": "https://ejaapp.com/en"
                // },

            ]
        },
        {
            "title": "Kimbweta Online",
            "image": "images/projects/kimbweta-online.png",
            "type": "Product",
            "labels": [
                // {
                //     "title": "App",
                //     "link": "https://apps.apple.com/us/app/id1666697736"
                // },
                // {
                //     "title": "Play",
                //     "link": "https://play.google.com/store/apps/details?id=com.ejaapp.rider"
                // },
                // {
                //     "title": "Web",
                //     "link": "https://storiusapp.com/"
                // }
            ]
        },
        // {
        //     "title": "Sastaticket.pk",
        //     "image": "images/projects/sastaticket.png",
        //     "type": "Product",
        //     "labels": [
        //         {
        //             "title": "App",
        //             "link": "https://apps.apple.com/in/app/sastaticket-flight-hotels/id1564441908"
        //         },
        //         {
        //             "title": "Play",
        //             "link": "https://play.google.com/store/apps/details?id=com.pk.sastaticket&hl=en&gl=US"
        //         },
        //         {
        //             "title": "Web",
        //             "link": "https://www.sastaticket.pk/"
        //         }
        //     ]
        // }
    ];

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "16px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects");
        projectsDiv.appendChild(card);
    }
}
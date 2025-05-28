document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
});

function mapProjectsData() {
    let projects = [
       
        // {
        //     "title": "HIV monitor",
        //     "image": "images/projects/devfolio.png",
        //     "type": "Open Source",
        //     "labels": [
        //         // {
        //         //     "title": "Play",
        //         //     "link": "https://play.google.com/store/apps/details?id=com.hmz.folio"
        //         // },
        //         {
        //             "title": "Hardware Project",
        //             "link": ""
        //         },
        //         {
        //             "title": "Mobile App",
        //             "link": "https://github.com/Kimbweta-Online"
        //         }
        //     ]
        // },
        {
            "title": "Clock Tower",
            "image": "images/projects/clock_tower_with_tower.jpg",
            "type": "Product",
            "labels": [
                {
                    "title": "Testing Stage",
                    "link": "https://github.com/Kimbweta-Online"
                },
                // {
                //     "title": "Package",
                //     "link": "https://pub.dev/packages/awesome_snackbar_content"
                // }
            ]
        },
        {
            "title": "Food Delivery App",
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
            "title": "FarmerRiser",
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
        
  {
    "title": "AgriSense",
    "image": "images/projects/agrisense.png",
    "type": "Product",
    "labels": [
      // {
      //   "title": "App",
      //   "link": "https://apps.apple.com/…"
      // },
      // {
      //   "title": "Play",
      //   "link": "https://play.google.com/…"
      // },
      // {
      //   "title": "Web",
      //   "link": "https://agrisense.example.com"
      // }
    ]
  },
  {
    "title": "HIV Patient Monitoring App",
    "image": "images/projects/devfolio.png",
    "type": "Product",
    "labels": [
      // {
      //   "title": "App",
      //   "link": "https://apps.apple.com/…"
      // },
      // {
      //   "title": "Play",
      //   "link": "https://play.google.com/…"
      // }
    ]
  },
  // {
  //   "title": "FarmerRiser",
  //   "image": "images/projects/farmerriser.png",
  //   "type": "Product",
  //   "labels": [
  //     // {
  //     //   "title": "App",
  //     //   "link": "https://apps.apple.com/…"
  //     // },
  //     // {
  //     //   "title": "Play",
  //     //   "link": "https://play.google.com/…"
  //     // },
  //     // {
  //     //   "title": "Web",
  //     //   "link": "https://farmerriser.example.com"
  //     // }
  //   ]
  // },
  {
    "title": "My Therapist",
    "image": "images/projects/mytherapist.png",
    "type": "Product",
    "labels": [
      // {
      //   "title": "App",
      //   "link": "https://apps.apple.com/…"
      // },
      // {
      //   "title": "Play",
      //   "link": "https://play.google.com/…"
      // },
      // {
      //   "title": "Web",
      //   "link": "https://mytherapist.example.com"
      // }
    ]
  },
  // {
  //   "title": "Food Delivery App",
  //   "image": "images/projects/food-delivery.png",
  //   "type": "Product",
  //   "labels": [
  //     // {
  //     //   "title": "Play",
  //     //   "link": "https://play.google.com/…"
  //     // }
  //   ]
  // },
  // {
  //   "title": "Student & Business E-Commerce App",
  //   "image": "images/projects/student-ecommerce.png",
  //   "type": "Product",
  //   "labels": [
  //     // {
  //     //   "title": "App",
  //     //   "link": "https://apps.apple.com/…"
  //     // },
  //     // {
  //     //   "title": "Play",
  //     //   "link": "https://play.google.com/…"
  //     // }
  //   ]
  // },
  // {
  //   "title": "Real-Time Chat App",
  //   "image": "images/projects/chat-app.png",
  //   "type": "Product",
  //   "labels": [
  //     // {
  //     //   "title": "GitHub",
  //     //   "link": "https://github.com/…"
  //     // }
  //   ]
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
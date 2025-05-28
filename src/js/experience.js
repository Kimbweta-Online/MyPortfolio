document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
       
  {
    "org": "FreeLancer | Tanzania",
    "position": "Software Developer",
    "duration": "Jan 2021 - Present",
    "technologies": [
      "Flutter",
      "Dart",
      "flutter_bloc",
      "MVC Architecture",
      "Clean Architecture",
      "YouTube API",
      "HTTP Package",
      "CodeMagic",
      "CI/CD with GitHub Actions",
      "Git & GitHub",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Render",
      "NGINX",
      "RobinHood Trick",
      "Firebase (Auth, Realtime DB, Cloud Functions)",
      "Google Maps SDK",
      "FCM Notification"
    ],
    "details": [
      "Built rich UIs in Flutter to display video content and handle navigation flows.",
      "Leveraged Dart language features—null safety, async/await—for reliable app logic.",
      "Managed app state with flutter_bloc, organizing events and state transitions cleanly.",
      "Structured backend code using MVC Architecture to separate models, views, and controllers.",
      "Applied Clean Architecture principles to isolate business logic in use-case layers.",
      "Integrated YouTube API to fetch and display channels, playlists, and video details.",
      "Used HTTP Package in Flutter for performant, background REST calls to backend services.",
      "Configured CodeMagic pipelines to automate build, test, and Play Store deployments.",
      "Set up CI/CD with GitHub Actions for automatic linting, testing, and release workflows.",
      "Version controlled every feature using Git, collaborating through GitHub pull requests.",
      "Developed Node.js services to handle authentication, data processing, and business logic.",
      "Built Express.js routes and middleware for robust request validation and routing.",
      "Designed and consumed REST APIs for user, media, and analytics endpoints.",
      "Deployed Node.js backends on Render with environment management and autoscaling.",
      "Used NGINX as a reverse proxy and implemented RobinHood Trick to balance load across instances.",
      "Secured user sessions and cloud functions in Firebase for real-time data syncing.",
      "Embedded Google Maps SDK for live location features—geotagging and map overlays.",
      "Implemented FCM Notification to push real-time updates for user activities."
    ]
  },
  {
    "org": "AgriSense | Tanzania",
    "position": "Founder & Lead Developer",
    "duration": "Mar 2023 - Present",
    "technologies": [
      "Flutter/Dart",
      "Node.js",
      "IoT (ESP32)",
      "AI/ML",
      "Firebase",
      "REST APIs",
      "Figma",
      "CodeMagic",
      "CI/CD with GitHub Actions",
      "Git & GitHub",
      "Render",
      "NGINX",
      "RobinHood Trick"
    ],
    "details": [
      "Developed Flutter interface to visualize live soil moisture, humidity, and temperature readings.",
      "Built Node.js backend to ingest, validate, and store sensor data from field devices.",
      "Programmed ESP32 firmware to read multi-parameter sensors and push data via MQTT.",
      "Trained AI/ML models to detect plant diseases from images and embedded them in the pipeline.",
      "Leveraged Firebase Realtime Database and Cloud Functions for event-driven irrigation control.",
      "Designed REST APIs to trigger irrigation events and retrieve historical plant health data.",
      "Prototyped end-to-end workflows and UI mockups in Figma for farmer usability.",
      "Automated mobile builds with CodeMagic and deployed to TestFlight and Play Store.",
      "Implemented CI/CD pipelines using GitHub Actions for both app and server repositories.",
      "Managed version control and branch workflows on GitHub with feature-based PRs.",
      "Deployed server on Render with Docker, NGINX proxy, and environment-based scaling.",
      "Configured NGINX with RobinHood Trick algorithm to distribute requests across nodes.",
      "Conducted user testing sessions and iterated UI based on farmer feedback."
    ]
  },
  {
    "org": "HIV Patient Monitoring App | Tanzania",
    "position": "Lead IoT & Mobile Developer",
    "duration": "Feb 2022 - Present",
    "technologies": [
      "Flutter/Dart",
      "Node.js",
      "IoT (ESP32, sensors)",
      "Firebase",
      "FCM",
      "REST APIs",
      "Figma",
      "CodeMagic",
      "CI/CD with GitHub Actions",
      "Git & GitHub",
      "Render",
      "NGINX",
      "RobinHood Trick"
    ],
    "details": [
      "Built Flutter dashboards to chart blood pressure and temperature trends over time.",
      "Developed ESP32 firmware to sample vital signs and stream data securely over Wi-Fi.",
      "Stored patient readings in Firebase Realtime Database for instant access and alerts.",
      "Integrated FCM to send push notifications when vitals crossed predefined thresholds.",
      "Created Node.js endpoints to process vitals, evaluate risk, and log events.",
      "Designed REST APIs for caregivers to fetch patient history and emergency logs.",
      "Mocked UI flows and health alert interactions in Figma for a patient-friendly experience.",
      "Configured CodeMagic to build and distribute the mobile app to testers.",
      "Automated CI/CD with GitHub Actions, including unit tests and integration workflows.",
      "Maintained code quality with Git and GitHub pull request reviews.",
      "Deployed Node.js service on Render with autoscaling; managed via Docker.",
      "Set NGINX as reverse proxy and applied RobinHood Trick to balance alert jobs.",
      "Coordinated pilot trials with clinics and refined app based on clinical feedback."
    ]
  },
  {
    "org": "FarmerRiser App | Tanzania",
    "position": "Founder & Full Stack Developer",
    "duration": "Jul 2022 - Present",
    "technologies": [
      "Flutter/Dart",
      "Node.js",
      "Firebase",
      "MySQL",
      "REST APIs",
      "Figma",
      "CodeMagic",
      "CI/CD with GitHub Actions",
      "Git & GitHub",
      "Render",
      "NGINX",
      "RobinHood Trick"
    ],
    "details": [
      "Designed Flutter screens for product listings, chat negotiation, and order tracking.",
      "Implemented Firebase Auth and Realtime DB for secure login and live messaging.",
      "Modeled relational data in MySQL for products, orders, users, and pricing history.",
      "Developed Node.js REST endpoints for catalog browsing, checkout, and order status.",
      "Prototyped user flows in Figma prioritizing offline usability and rural performance.",
      "Built and deployed mobile builds with CodeMagic to both Android and iOS stores.",
      "Configured GitHub Actions to automate testing, builds, and staging deployments.",
      "Managed version control with Git and GitHub branching strategies for features.",
      "Hosted backend on Render; used NGINX as a secure gateway and proxy layer.",
      "Applied RobinHood Trick load balancing in NGINX to optimize transaction throughput.",
      "Monitored performance and uptime, achieving 99.5% availability during peak seasons."
    ]
  },
  {
    "org": "My Therapist App | Tanzania",
    "position": "Full Stack Developer",
    "duration": "Jan 2024 - Present",
    "technologies": [
      "Flutter/Dart",
      "Node.js",
      "OpenAI API",
      "Firebase",
      "REST APIs",
      "Figma",
      "CodeMagic",
      "CI/CD with GitHub Actions",
      "Git & GitHub",
      "Render",
      "NGINX",
      "RobinHood Trick"
    ],
    "details": [
      "Crafted Flutter UI for session booking, live chat, and AI-assisted assessments.",
      "Securely managed user identities with Firebase Auth and session persistence.",
      "Built Node.js microservices to handle booking, chat storage, and feedback loops.",
      "Integrated OpenAI API to power conversational AI as a virtual therapist companion.",
      "Designed REST endpoints for availability queries, session logs, and rating submissions.",
      "Created interactive prototypes and user flows in Figma to ensure trust and ease.",
      "Automated mobile and server builds via CodeMagic pipelines for rapid testing.",
      "Configured CI/CD in GitHub Actions for continuous integration and release gating.",
      "Version managed application code through Git with enforced PR reviews.",
      "Deployed services on Render; used NGINX with RobinHood Trick for balanced load.",
      "Conducted user research and iterated features based on therapist and patient feedback."
    ]
  },
  {
    "org": "Clock Tower Delivery App | Tanzania",
    "position": "Full Stack Mobile Developer",
    "duration": "Jul 2024 - Present",
    "technologies": [
      "Flutter/Dart (Bloc & HTTP)",
      "Node.js",
      "Firebase",
      "Google Maps & Mapbox",
      "REST APIs",
      "FCM Notification",
      "MySQL",
      "Figma",
      "CodeMagic",
      "CI/CD with GitHub Actions",
      "Git & GitHub",
      "Render",
      "NGINX",
      "RobinHood Trick"
    ],
    "details": [
      "Developed customer and driver apps in Flutter using Bloc for state control and HTTP client for API calls.",
      "Integrated Google Maps and Mapbox SDKs for real-time route plotting and ETA calculations.",
      "Implemented FCM notifications for order confirmations, driver assignments, and delivery updates.",
      "Modeled trip and order data in MySQL; wrote optimized queries and stored procedures.",
      "Built Node.js backends to manage orders, driver locations, and payment events.",
      "Prototyped UI mockups in Figma for seamless delivery request and tracking workflows.",
      "Automated end-to-end builds and Play Store/TestFlight releases with CodeMagic.",
      "Established CI/CD pipelines in GitHub Actions with automated tests and linting steps.",
      "Managed code versions and collaboration through Git and GitHub pull requests.",
      "Hosted backend services on Render; configured NGINX reverse proxy for SSL termination.",
      "Applied RobinHood Trick in NGINX to evenly distribute driver assignment requests.",
      "Monitored app performance and scaled services dynamically to maintain sub-second response times."
    ]
  },
  {
    "org": "Kimbweta - Online | Tanzania",
    "position": "Full Stack Mobile Developer",
    "duration": "Sep 2022 - Present",
    "technologies": [
      "Flutter/Dart (BLoC & HTTP)",
      "Node.js",
      "Firebase",
      "MySQL",
      "Socket.IO",
      "YouTube API",
      "USSD",
      "Azam Pay API",
      "REST APIs",
      "Figma",
      "CodeMagic",
      "CI/CD with GitHub Actions",
      "Git & GitHub",
      "Render",
      "NGINX",
      "RobinHood Trick",
      "FCM Notification"
    ],
    "details": [
      "Built scalable Flutter UI with BLoC for product catalog, cart, and checkout flows.",
      "Developed server APIs in Node.js for inventory, orders, and user management.",
      "Integrated Firebase for authentication, session storage, and real-time updates.",
      "Designed relational schemas in MySQL and wrote indexing strategies for performance.",
      "Enabled real-time chat and order status via Socket.IO and FCM.",
      "Embedded YouTube API to showcase product demos and merchant tutorials.",
      "Added USSD support for low-connectivity regions, enabling SMS-like interactions.",
      "Integrated Azam Pay API for Tanzanian mobile money and card payment processing.",
      "Documented and consumed REST APIs for frontend-backend communication.",
      "Prototyped UI flows and themes in Figma for both buyer and seller experiences.",
      "Automated builds with CodeMagic and distributed releases to app stores.",
      "Configured CI/CD pipelines in GitHub Actions for quality gates and staged rollouts.",
      "Managed code collaboration via Git & GitHub with feature-branch workflows.",
      "Deployed backend on Render; used NGINX with RobinHood Trick to balance peak loads.",
      "Monitored and optimized push notifications through Firebase Cloud Messaging."
    ]
  },
  {
  "org": "TaifaTek Innovation Hub | Tanzania",
  "position": "Software Developer & Tech Trainer",
  "duration": "May 2022 - Present",
  "technologies": [
    "Flutter/Dart",
    "Node.js",
    "ESP32",
    "Arduino & Raspberry Pi",
    "Firebase",
    "Figma",
    "HTML/CSS/JavaScript (Web Design)",
    "React (Web Applications)"
  ],
  "details": [
    "Led technical training sessions for students and young innovators in mobile app and web development.",
    "Taught Flutter/Dart by building demo IoT-based mobile apps, emphasizing best practices and architecture.",
    "Mentored learners on Node.js backend development by guiding them through hands-on REST API projects.",
    "Instructed workshops on programming ESP32 modules to collect and stream real-time sensor data.",
    "Facilitated beginner to intermediate robotics labs using Arduino and Raspberry Pi, combining hardware and software concepts.",
    "Provided step-by-step tutorials on Firebase integration for real-time data and push notifications.",
    "Advised students on UI/UX design principles using Figma, reviewing and improving their app prototypes.",
    "Delivered interactive classes on responsive web design fundamentals using HTML, CSS, and JavaScript.",
    "Supervised React projects, guiding learners in building dynamic web applications with RESTful API integration."
  ]
}


        // {
        //     "org": "",
        //     "position": "Consultant & Lead Mobile Developer",
        //     "duration": "Sep 2022 - Jan 2023",
        //     "technologies": [
        //         "Flutter",
        //         "Dart",
        //         "GitHub Actions",
        //         "Firebase",
        //         "Fintech - Payments",
        //         "REST APIs",
        //         "GraphQL",
        //     ],
        //     "details": [
        //         "Upgraded the application to complete new UI and UX",
        //         "Uplifted the mobile apps architecture for better performance and better code structure",
        //         "Integrated REST and GraphQL structures of APIs for various purposes",
        //         "Added Monri payment gateway for testing purposes as this was commonly used in Albania and nearest regions",
        //         "Consulted for better UI and UX for new design for both the mobile apps",
        //         "Handled code-sharing concept as there were two mobile apps involved i.e. Driver and Rider app",
        //         "Keen discussion with stakeholders on how to improve the product overall",
        //         "Helped hiring and taking interviews for increasing the team count",
        //     ]
        // },
        // {
        //     "org": "ZOffers | India",
        //     "position": "Consultant mobile app",
        //     "duration": "Jul 2022 - Aug 2022",
        //     "technologies": [
        //         "Flutter",
        //         "Dart",
        //         "Firebase",
        //         "Bit-Bucket",
        //         "Fintech - Payments",
        //         "REST APIs",
        //     ],
        //     "details": [
        //         "Consultation for mobile team and interns for writing better code",
        //         "Better ways of handling complex code base and improve architecture",
        //         "Reviewing PRs of the mobile team",
        //         "Overall consulation for mobile app development",
        //     ]
        // },
        // {
        //     "org": "Sastaticket.pk",
        //     "position": "SWE Intern",
        //     "duration": "Oct 2021 - Jan 2022",
        //     "technologies": [
        //         "Flutter",
        //         "Dart",
        //         "Supabase",
        //         "Firebase"
        //     ],
        //     "details": [
        //         "Learned state management concepts like Bloc, futter bloc and provider",
        //         "Worked with layered architecture",
        //         "Integrated Supabase in flutter app",
        //         "Used external packages for managing form input concepts - flutter_form_builder",
        //         "Learned GitHub (Version Controlling) with a team, concepts like maintaining PRs, branches etc.",
        //         "Improved concepts of reusable components"
        //     ]
        // },
        // {
        //     "org": "Storius",
        //     "position": "Flutter/Dart Intern",
        //     "duration": "Nov 2020 - Jan 2021",
        //     "technologies": [
        //         "Flutter",
        //         "Dart",
        //         "App script",
        //         "Google maps"
        //     ],
        //     "details": [
        //         "Developed first BETA version of storius app",
        //         "Integrated Google sheets with App scripts that act as SQL database",
        //         "Managed two different source of data into the app to overcome the place of Firebase",
        //         "Learned and implemented MVC architecture for production level of application",
        //         "Integrated Google maps, live markers and interaction of users with it",
        //         "Added audio players on Google maps posted by users",
        //         "Enhanced UX of beta version till 3rd revision",
        //         "Helped in expanding team of developers with various resources"
        //     ]
        // },
        // {
        //     "org": "Multi TeleSoft",
        //     "position": "Lead Flutter Developer",
        //     "duration": "Feb 2020 - Apr 2020",
        //     "technologies": [
        //         "Flutter",
        //         "Dart",
        //         "Google maps",
        //         "SMS integration",
        //         "Live locations",
        //         "Firebase auth",
        //         "Firebase real-time"
        //     ],
        //     "details": [
        //         "Learned real-time location alerts using firebase real-time db",
        //         "Integrated Google Maps",
        //         "Firebase authentication via phone number",
        //         "MVC architecture based application",
        //         "Deployment on play store"
        //     ]
        // }
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        technologiesHeading.innerHTML = "Technologies";

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}
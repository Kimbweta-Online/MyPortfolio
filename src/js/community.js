document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {

    let communities = [
        {
            "name": "Flutter Developer Community",
            "role": "Community Lead",
            "session": "April 2021 - Present",
            "logo": "images/community/flutter-isb.png",
            "link": "https://discord.com/channels/goodluck_05575",
            "details": "Flutter Developer Community - First ever flutter community to be officially registered at Flutter Network (Google). Hosted events, sessions, hands- on and workshops and trained hundred and thousands of developers."
        },
        {
            "name": "Google Developer Community",
            "role": "GDC Lead",
            "session": "June 2021 - June 2026",
            "logo": "images/community/dsc.png",
            "link": "https://developers.google.com/profile/u/116987307500118358213?utm_source=developers.google.com",
            "details": "Google Developer Student Clubs - Trained hundreds of students about various technologies like flutter, Firebase, Git and GitHub etc."
        },
        {
            "name": "Microsoft Tech Community Member",
            "role": "Community Member",
            "session": "May 2021 - May 2025",
            "logo": "images/community/mlsa.png",
            "link": "https://techcommunity.microsoft.com/users/goodluck01/3044884",
            "details": "Facilitated student engagement with Microsoft technologies through peer-led workshops, mentoring, and community events focused on Python, Azure, and GitHub. Promoted the adoption of modern tools in academic and real-world projects, while developing leadership, public speaking, and event management skills as part of a collaborative ambassador network."
        }
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var link = com.link;
        var details = com.details;

        var card = document.createElement("a");
        card.className = "community-card";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        card.href = link;
        card.target = "_blank";

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        var point = document.createElement("li");
        point.className = "body2 cw-point";
        point.innerHTML = details;

        var points = document.getElementById("cw-points");
        points.appendChild(point);
    }
}
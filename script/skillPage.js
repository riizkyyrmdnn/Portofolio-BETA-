
const skillList = [
    {
        icon: "img/html-5-svgrepo-com.svg",
        title: "HTML",
        alt: "HTML logo from svgrepo.com",
    },
    {
        icon: "img/css-3-svgrepo-com.svg",
        title: "CSS",
        alt: "HTML logo from svgrepo.com",
    },
    {
        icon: "img/javascript-svgrepo-com.svg",
        title: "Javascript",
        alt: "Javascript logo from svgrepo.com",
    },
    {
        icon: "img/reactjs-svgrepo-com.svg",
        title: "ReactJs",
        alt: "ReactJS logo from svgrepo.com",
    },
    {
        icon: "img/php-svgrepo-com.svg",
        title: "PHP",
        alt: "PHP logo from svgrepo.com",
    },
    {
        icon: "img/mongo-svgrepo-com.svg",
        title: "MongoDB",
        alt: "MongoDB logo from svgrepo.com",
    },
    {
        icon: "img/mysql-logo-svgrepo-com.svg",
        title: "MySQL",
        alt: "MySQL logo from svgrepo.com",
    },
    {
        icon: "img/adobe-photoshop-svgrepo-com.svg",
        title: "Photoshop",
        alt: "Photoshop logo from svgrepo.com",
    },
    {
        icon: "img/adobe-illustrator-svgrepo-com.svg",
        title: "Illustrator",
        alt: "Illustrator logo from svgrepo.com",
    },
    {
        icon: "img/adobe-premiere-svgrepo-com.svg",
        title: "premiere",
        alt: "Premiere logo from svgrepo.com",
    },
];
skillList.forEach((element) => {
    const skillWrapper = document.createElement("div");
    skillWrapper.className = "skill-page-wrapper";
    const logoImage = document.createElement("img");
    logoImage.src = element.icon;
    logoImage.setAttribute("alt", element.alt);
    logoImage.className = "skill-logo";
    const skillTitle = document.createElement("h2");
    skillTitle.innerHTML = element.title;
    skillTitle.className = "title-logo";
    skillWrapper.append(logoImage, skillTitle);
    const skillSectionContainer = document.getElementById("skill-area-container");
    if (skillSectionContainer) {
        skillSectionContainer.append(skillWrapper);
    }
});
const workList = [
    {
        start: 2010,
        end: 2015,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        start: 2010,
        end: 2015,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        start: 2010,
        end: 2015,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        start: 2010,
        end: 2015,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
];
workList.forEach((element) => {
    const workWrapper = document.createElement("div");
    workWrapper.className = "work-page-wrapper";
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-briefcase");
    const year = document.createElement("h1");
    year.className = "work-year-title";
    year.innerHTML = element.start + "-" + element.end;
    const description = document.createElement("p");
    description.className = "work-description";
    description.innerHTML = element.description;
    workWrapper.append(icon, year, description);
    const workSectionContainer = document.getElementById("work-area-container");
    if (workSectionContainer) {
        workSectionContainer.append(workWrapper);
    }
});

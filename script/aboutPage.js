const aboutPageList = {
  image: "../img/Profile512.png",
  title: "hello i'm john",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque labore aliquam assumenda porro facere iure officia neque earum repudiandae illum, voluptas laborum quas recusandae debitis sint odit adipisci doloribus exercitationem.",
  subtitle: "let's be friends!",
  socialmedia: [
    { name: "fa-instagram", url: "https://instagram.com" },
    { name: "fa-x-twitter", url: "https://twitter.com" },
    { name: "fa-facebook-f", url: "https://facebook.com" },
    { name: "fa-youtube", url: "https://youtube.com" },
    { name: "fa-tiktok", url: "https://tiktok.com" },
  ],
};
const containerAbout = document.createElement("div");
containerAbout.className = "about-page-wrapper";
const leftAboutSection = document.createElement("div");
leftAboutSection.className = "about-column-left";
const image = document.createElement("img");
image.className = "user-image";
image.src = aboutPageList.image;
leftAboutSection.append(image);
const rightAboutSection = document.createElement("div");
rightAboutSection.className = "about-column-right";
const title = document.createElement("h1");
title.className = "title-about";
title.innerHTML = aboutPageList.title;
const description = document.createElement("p");
description.className = "description-about";
description.innerHTML = aboutPageList.description;
const subtitle = document.createElement("h2");
subtitle.className = "subtitle-about";
subtitle.innerHTML = aboutPageList.subtitle;
const socialbuttons = document.createElement("div");
socialbuttons.className = "icons-buttons-about";
aboutPageList.socialmedia.forEach((social) => {
  const button = document.createElement("a");
  button.className = "icon-button";
  button.href = social.url;
  const icon = document.createElement("i");
  icon.classList.add("fab", social.name);
  button.append(icon);
  socialbuttons.append(button);
});
rightAboutSection.append(title, description, subtitle, socialbuttons);
containerAbout.append(leftAboutSection, rightAboutSection);
document.getElementById("about-section-container").append(containerAbout);

const educationList = [
  {
    start: 2000,
    end: 2002,
    school: "kindergarten",
    description: "lorem ipsum dolor",
  },
  {
    start: 2002,
    end: 2008,
    school: "primary school",
    description: "lorem ipsum dolor",
  },
  {
    start: 2008,
    end: 2011,
    school: "junior high school",
    description: "lorem ipsum dolor",
  },
  {
    start: 2011,
    end: 2014,
    school: "high school",
    description: "lorem ipsum dolor",
  },
  {
    start: 2014,
    end: 2018,
    school: "university",
    description: "lorem ipsum dolor",
  },
];

educationList.forEach((element) => {
  const wrapper = document.createElement("div");
  wrapper.className = "education-page-wrapper";
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-graduation-cap");
  const year = document.createElement("h3");
  year.className = "education-year";
  year.innerHTML = element.start + " - " + element.end;
  const instut = document.createElement("h4");
  instut.className = "education-name";
  instut.innerHTML = element.school;
  wrapper.append(icon, year, instut);
  document.getElementById("education-section-container").append(wrapper);
});

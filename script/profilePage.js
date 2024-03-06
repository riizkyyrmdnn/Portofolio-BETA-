const profileList = [
  {
    icon: "fa-user",
    name: "about me",
    page: "#about",
  },
  {
    icon: "fa-bolt",
    name: "my service",
    page: "#service",
  },
  {
    icon: "fa-star",
    name: "my skill",
    page: "#skill",
  },
  {
    icon: "fa-file-pen",
    name: "my project",
    page: "#project",
  },
  {
    icon: "fa-pen-clip",
    name: "blog",
    page: "#blog",
  },
  {
    icon: "fa-address-book",
    name: "contact me",
    page: "#contact",
  },
];

profileList.forEach((element) => {
  const navigationButton = document.createElement("button");
  navigationButton.className = "navigation-buttons";
  navigationButton.onclick = () => window.location.href = element.page;
  const navigatioName = document.createElement("p");
  navigatioName.className = "navigation-name";
  navigatioName.innerHTML = element.name;
  const icon = document.createElement("i");
  icon.classList.add("fas", element.icon);
  navigationButton.append(navigatioName, icon);
  document.getElementById("navigation").append(navigationButton);
});

const buttonList = [
  {
    icon: "fa-hands-clapping",
    title: "hire me",
    link: "",
  },
  {
    icon: "fa-store",
    title: "my store",
    link: "",
  },
  {
    icon: "fa-file-arrow-down",
    title: "download cv",
    link: "",
  },
];

buttonList.forEach((element) => {
  const moreButton = document.createElement("button");
  moreButton.className = "moreButton";
  moreButton.onclick = () => {
    if (element.link) {
      window.open(element.link, "_blank");
    } else {
      window.location.href = "page/error.html";
    }
  };
  const icon = document.createElement("i");
  icon.classList.add("fas", element.icon);
  const title = document.createElement("p");
  title.className = "button-title";
  title.innerHTML = element.title;
  moreButton.append(icon, title);
  document.getElementById("profile-buttons").append(moreButton);
});

const hamburger = () =>
  document.getElementById("navigation").classList.toggle("active");

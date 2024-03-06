const projectList = [
    {
        thumbnail: "../img/ProjectImage1.jpg",
        title: "Lorem ipsum dolor sit amet adipisicing elit.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eos natus molestias quam et, placeat sit...",
        link: "",
    },
    {
        thumbnail: "../img/ProjectImage2.jpg",
        title: "Lorem ipsum dolor sit amet adipisicing elit.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eos natus molestias quam et, placeat sit...",
        link: "",
    },
    {
        thumbnail: "../img/ProjectImage3.jpg",
        title: "Lorem ipsum dolor sit amet adipisicing elit.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eos natus molestias quam et, placeat sit...",
        link: "",
    },
    {
        thumbnail: "../img/ProjectImage4.jpg",
        title: "Lorem ipsum dolor sit amet adipisicing elit.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eos natus molestias quam et, placeat sit...",
        link: "",
    },
];
projectList.forEach((element) => {
    const projectContainer = document.createElement("div");
    projectContainer.className = "project-page-wrapper";
    const thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail-container";
    const image = document.createElement("img");
    image.className = "project-thumbnail";
    image.src = element.thumbnail;
    image.alt = "image from unsplash.com";
    thumbnail.appendChild(image);
    const desc = document.createElement("div");
    desc.className = "project-text-area";
    const title = document.createElement("h3");
    title.className = "project-title";
    title.innerHTML = element.title;
    const description = document.createElement("p");
    description.className = "project-desc";
    description.innerHTML = element.description;
    const button = document.createElement("a");
    button.className = "project-readmore-button";
    if (element.link) {
        button.href = element.link;
        button.target = "_blank";
    }
    else {
        button.href = "page/error.html";
    }
    button.innerText = "read more";
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-arrow-right");
    button.append(icon);
    desc.append(title, description, button);
    projectContainer.append(thumbnail, desc);
    const projectSectionContainer = document.getElementById("project-area-container");
    if (projectSectionContainer) {
        projectSectionContainer.append(projectContainer);
    }
});

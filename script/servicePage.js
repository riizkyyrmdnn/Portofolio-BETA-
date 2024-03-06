
const serviceList = [
    { icon: "fa-laptop-code", title: "programming", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: "fa-pencil", title: "writing", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: "fa-image", title: "photography", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: "fa-paintbrush", title: "designing", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];
serviceList.forEach((element) => {
    const serviceWrapper = document.createElement("div");
    serviceWrapper.className = "service-page-wrapper";
    const icon = document.createElement("i");
    icon.classList.add("fas", element.icon);
    const title = document.createElement("h3");
    title.className = "service-title";
    title.innerHTML = element.title;
    const paragraph = document.createElement("p");
    paragraph.className = "service-text";
    const text = document.createTextNode(element.description);
    paragraph.append(text);
    serviceWrapper.append(icon, title, paragraph);
    const serviceSectionContainer = document.getElementById("service-section-container");
    if (serviceSectionContainer) {
        serviceSectionContainer.append(serviceWrapper);
    }
});

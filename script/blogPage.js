const blogList = [
  {
    thumbnail: "../img/BlogImage1.jpg",
    title: "Lorem ipsum dolor sit amet adipisicing elit.",
    link: "",
  },
  {
    thumbnail: "../img/BlogImage2.jpg",
    title: "Lorem ipsum dolor sit amet adipisicing elit.",
    link: "",
  },
  {
    thumbnail: "../img/BlogImage3.jpg",
    title: "Lorem ipsum dolor sit amet adipisicing elit.",
    link: "",
  },
];
blogList.forEach((element) => {
  const blogWrapper = document.createElement("button");
  blogWrapper.className = "blog-page-wrapper";
  blogWrapper.onclick = () => {
    if (element.link) {
      window.open(element.link, "_blank");
    } else {
      window.location.href = "page/error.html";
    }
  };
  const thumbnailWrap = document.createElement("div");
  thumbnailWrap.className = "thumbnail-wrapper";
  const thumbnail = document.createElement("img");
  thumbnail.src = element.thumbnail;
  thumbnail.alt = "Blog thumbnail image from unsplash.com";
  thumbnail.className = "blog-thumbnail";
  const writer = document.createElement("div");
  writer.className = "blog-text-area";
  const title = document.createElement("h1");
  title.innerHTML = element.title;
  title.className = "blog-title";
  const author = document.createElement("i");
  author.classList.add("fas", "fa-pencil");
  const creator = document.createElement("span");
  creator.innerHTML = "creator / 01 Jan 2024";
  creator.className = "blog-creator-name";
  writer.append(title, author, creator);
  thumbnailWrap.append(thumbnail);
  blogWrapper.append(thumbnailWrap, writer);
  const blogSectionContainer = document.getElementById("blog-area-container");
  if (blogSectionContainer) {
    blogSectionContainer.append(blogWrapper);
  }
});

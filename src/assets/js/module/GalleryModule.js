export default function gallery() {
  const gallerys = document.querySelectorAll(".js-gallery");
  if (!gallerys.length) return;
  gallerys.forEach((gallery) => {
    lightGallery(gallery, {
      selector: ".gItem",
      thumbnail: true,
      zoom: true,
    });
  });
}

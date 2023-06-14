async function includeHTML() {
  const elements = document.getElementsByTagName("*");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const file = element.getAttribute("data-include");

    if (file) {
      try {
        const response = await fetch(file);
        if (response.ok) {
          const html = await response.text();
          element.innerHTML = html;
        } else {
          element.innerHTML = "Page not found.";
        }
      } catch (error) {
        element.innerHTML = "Error loading the page.";
        console.error(error);
      }

      element.removeAttribute("data-include");
      includeHTML();
      return;
    }
  }
}

window.addEventListener('DOMContentLoaded', includeHTML);

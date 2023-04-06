//Call the get started button to scroll
function scrollToSection(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: "smooth" });
    }
}
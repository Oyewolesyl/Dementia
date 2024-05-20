function scrollToSection(sectionId) {
    const targetSection = document.querySelector(sectionId);

    if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export const smoothScroll = (section) => {
    const element = document.querySelector(`#${section}`);
    element.scrollIntoView({ behavior: 'smooth' });
}
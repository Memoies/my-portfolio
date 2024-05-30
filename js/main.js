// function updateCirclePositions() {
//     const scrollPosition = window.scrollY;

//     // Calculate the translation values based on the scroll position
//     const translateX1 = -scrollPosition * 0.1 + 'px';
//     const translateY1 = -scrollPosition * 0.05 + 'px';
//     const translateX2 = scrollPosition * 0.05 + 'px';
//     const translateY2 = scrollPosition * 0.1 + 'px';
//     const translateX3 = -scrollPosition * 0.05 + 'px';
//     const translateY3 = scrollPosition * 0.1 + 'px';
//     const translateX4 = scrollPosition * 0.1 + 'px';
//     const translateY4 = -scrollPosition * 0.05 + 'px';

//     // Apply the translation to the circle elements
//     document.querySelector('.grad-circle.c1').style.transform = `translate(${translateX1}, ${translateY1}) rotate(70deg)`;
//     document.querySelector('.grad-circle.c2').style.transform = `translate(${translateX2}, ${translateY2}) rotate(135deg)`;
//     document.querySelector('.grad-circle.c3').style.transform = `translate(${translateX3}, ${translateY3}) rotate(-15deg)`;
//     document.querySelector('.grad-circle.c4').style.transform = `translate(${translateX4}, ${translateY4}) rotate(-145deg)`;
// }

// window.addEventListener('scroll', updateCirclePositions);
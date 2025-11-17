// const handleMouseMove = (
//   e: React.MouseEvent<HTMLDivElement, MouseEvent>
// ): void => {
//   const strength = 90;
//   const magneticDiv = e.target as HTMLDivElement;
//   const bound = magneticDiv.getBoundingClientRect();

//   gsap.to(magneticDiv, {
//     x: ((e.clientX - bound.left) / magneticDiv.offsetWidth - 0.5) * strength,
//     y: ((e.clientY - bound.top) / magneticDiv.offsetHeight - 0.5) * strength,
//     duration: 2,
//     ease: "elastic.easeOut",
//   });
// };

// const handleMouseLeave = (
//   e: React.MouseEvent<HTMLDivElement, MouseEvent>
// ) => {
//   const magneticDiv = e.target as HTMLDivElement;
//   gsap.to(magneticDiv, {
//     x: 0,
//     y: 0,
//     ease: "elastic.easeOut",
//     duration: 0.5,
//   });
// };

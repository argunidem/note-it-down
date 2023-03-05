export const textAreaHeight = (e) => {
  const scrollbarHeight = e.target.scrollHeight;
  // console.log(scrollbarHeight);
  e.target.scrollTo(0, scrollbarHeight);
  // e.target.style.height = `${scrollbarHeight}px`;
};

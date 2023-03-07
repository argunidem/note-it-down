const Card = ({ children, modalOpen, theme, isForm, onSubmit }) => {
  const Element = isForm ? 'form' : 'div';

  return (
    <Element
      className={`${!modalOpen && 'relative'} ${theme} ${
        isForm && 'flex flex-col text-slate-300'
      } w-72 h-60 sm:w-60 md:w-72 lg:w-80 rounded-md`}
      onSubmit={isForm ? onSubmit : null}
    >
      {children}
    </Element>
  );
};
export default Card;

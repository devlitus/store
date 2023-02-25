export function Button({ children, onclick, ...props }: any) {
  return (
    <button onClick={onclick} {...props}>
      {children}
    </button>
  );
}

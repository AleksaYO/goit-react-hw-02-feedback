export function Section({ title, children }) {
  console.log(children);
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

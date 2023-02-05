export default function P({ style, content }) {
  return (
    <p className="pTag" style={style}>
      {content}
    </p>
  );
}

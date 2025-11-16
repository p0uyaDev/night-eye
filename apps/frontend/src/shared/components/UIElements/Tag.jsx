function Tags({ tags }) {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag} className={`badge badge-primary mr-1 mb-1`}>
          {tag}
        </span>
      ))}
    </>
  );
}

export default Tags;

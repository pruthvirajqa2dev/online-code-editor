const listOfRandomText = ["Pranay", "Shobha", "Aarti", "Shourya"];

function Editor() {
  return (
    <>
      <h1>Random Text</h1>
      <ul className="list-group">
        {listOfRandomText.map((item) => (
          <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {item}
              <span className="badge bg-primary rounded-pill">
                {item.lastIndexOf("a" || "A")}
              </span>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default Editor;

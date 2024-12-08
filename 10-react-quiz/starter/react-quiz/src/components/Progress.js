function Progress({ index, numQuestions, points }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / X
      </p>
    </header>
  );
}

export default Progress;

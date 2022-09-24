import "./Create.css";
export default function Create({ appendCard }) {
  function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { question, answer, tag } = Object.fromEntries(formData);
    console.log(question);

    appendCard(question, answer, tag);
    /* event.target.reset(); */
  }
  return (
    <form onSubmit={sendForm}>
      <label htmlFor="question" name="createQuestion" className="form__label">
        Your Question:
      </label>
      <textarea
        id="question"
        name="question"
        cols="30"
        rows="10"
        maxLength="150"
      ></textarea>
      <label htmlFor="answer" name="createAnswer" className="form__label">
        Your Answer:
      </label>
      <textarea
        name="answer"
        id="answer"
        cols="30"
        rows="10"
        maxLength="150"
      ></textarea>
      <label htmlFor="tag" name="createTag" className="form__label">
        Tag:{" "}
      </label>
      <input type="text" name="tag" id="tag" className="form__input" />
      <button type="submit" className="form__btn">
        Submit
      </button>
    </form>
  );
}

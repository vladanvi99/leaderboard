import './css/addNewScore.css';

const addNewScore = () => {
  const addNewScoreElement = `<div class="add-new-score-wrap">
<form class="add-new-score-form">
<h2 class="add-new-score-head">Add new score</h2>
<input type="text" name="name" require placeholder="Your name" />
<input type="number" name="score" require placeholder="Your score" />
<button class="add-new-score-btn" type="button">Submit</button>
</form>
</div>`;
  return addNewScoreElement;
};

export default addNewScore;
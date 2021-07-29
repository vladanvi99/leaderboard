import app from './components/app.js';

document.addEventListener('DOMContentLoaded', () => {
  // GET SCORES
  const getScores = async () => {
    const scoresList = document.querySelector('.recent-scores-list');
    scoresList.innerHTML = '';
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/x0oS8686R51UV3XyawJt/scores/')
      .then((response) => response.json())
      .then((data) => data.result);
    response.forEach((item) => {
      scoresList.innerHTML += `<li class="recent-scores-item"><span class="item-name">${item.user}:</span><span class="item-score">${item.score}</span></li>`;
    });
  };
  getScores();
  // ADD NEW SCORE
  const addNewScoreBtn = document.querySelector('.add-new-score-form .add-new-score-btn');
  const addNewScore = async (e) => {
    e.preventDefault();
    const userInput = document.querySelector('.add-new-score-form input[type="text"]');
    const scoreInput = document.querySelector('.add-new-score-form input[type="number"]');
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/x0oS8686R51UV3XyawJt/scores/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userInput.value, score: scoreInput.value }),
    });
    userInput.value = '';
    scoreInput.value = '';
  };
  addNewScoreBtn.addEventListener('click', (e) => addNewScore(e));
  // REFRESH LIST
  const refreshBtn = document.querySelector('.recent-scores-wrap .recent-scores-header .recent-scores-refresh');
  refreshBtn.addEventListener('click', () => getScores());
});

document.getElementById('root').innerHTML = app();

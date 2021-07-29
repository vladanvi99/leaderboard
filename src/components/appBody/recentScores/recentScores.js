import './css/recentScores.css';

const recentScores = () => {
  const recentScoresElement = `<div class="recent-scores-wrap">
<div class="recent-scores-header">
<h2 class="recent-scores-head">Recent scores</h2>
<button class="recent-scores-refresh" type="button">Refresh</button>
</div>
<ul class="recent-scores-list">

</ul>
</div>`;
  return recentScoresElement;
};

export default recentScores;
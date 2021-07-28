import './css/recentScores.css';

const recentScores = () => {
  const recentScoresElement = `<div class="recent-scores-wrap">
<div class="recent-scores-header">
<h2 class="recent-scores-head">Recent scores</h2>
<button class="recent-scores-refresh" type="button">Refresh</button>
</div>
<ul class="recent-scores-list">
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">100</span></li>
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">20</span></li>
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">30</span></li>
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">26</span></li>
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">17</span></li>
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">18</span></li>
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">62</span></li>
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">57</span></li>
<li class="recent-scores-item"><span class="item-name">Name:</span><span class="item-score">35</span></li>
</ul>
</div>`;
  return recentScoresElement;
};

export default recentScores;
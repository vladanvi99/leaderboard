import recentScores from './recentScores/recentScores.js';
import addNewScore from './addNewScore/addNewScore.js';
import './css/appBody.css';

const appBody = () => {
  const appBodyWrap = `<div class="app-body-wrap">
                          ${recentScores()}
                          ${addNewScore()}
                        </div>`;
  return appBodyWrap;
};

export default appBody;
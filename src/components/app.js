import appHead from './appHead/appHead.js';
import appBody from './appBody/appBody.js';
import './css/app.css';

const app = () => {
  const appWrap = `<section class="app-wrap">
                    ${appHead()}
                    ${appBody()}
                  </section>`;
  return appWrap;
};

export default app;
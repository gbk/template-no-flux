import { setup, LogicRender } from 'no-flux';
import Message from 'uxcore-message';
import Dialog from 'uxcore-dialog';
import Empty from 'uxcore-empty-data';
import assign from 'object-assign';
import DB from './db';
import './app.less';
<% if (SPA) { %>
import './routes.jsx';
<% } %>

// This is a Chrome only hack
if (__LOCAL__ && window.chrome && window.chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}

// 这里使用setup来配置noflux
setup('fn', {
  message: Message,
  dialog: Dialog,
  DB,
});

const Loading = () => <div className="kuma-loading" />;
// 这里给 LogicRender 增加默认行为
LogicRender.defaultProps = assign(LogicRender.defaultProps, { Empty, Loading });

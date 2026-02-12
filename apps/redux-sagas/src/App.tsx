import { Provider } from 'react-redux';

import { PostList } from './components/post-list';
import { initStore } from './store';
import { tw } from './styles/twind';
import { log } from './utils';

import './styles/index.css';

const App: React.FC = () => {
  const store = initStore();

  log('TEST LOG');

  return (
    <Provider store={store}>
      <div className={tw`content flex items-center`}>
        <h1 className={tw`mb-4`}>{process.env.APPLICATION_NAME}</h1>
        <PostList className={tw`max-w-[50%]`} />
      </div>
    </Provider>
  );
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default App;

import { createAsyncComponent } from 'react-async-component';

const AsyncEpisode = createAsyncComponent({
  resolve: () => System.import('./Episode')
});

export default AsyncEpisode;

import { createAsyncComponent } from 'react-async-component';

const AsyncShows = createAsyncComponent({
  resolve: () => System.import('./Shows')
});

export default AsyncShows;

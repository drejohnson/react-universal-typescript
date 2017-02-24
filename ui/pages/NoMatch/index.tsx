import { createAsyncComponent } from 'react-async-component';

const AsyncNoMatch = createAsyncComponent({
  resolve: () => System.import('./NoMatch')
});

export default AsyncNoMatch;

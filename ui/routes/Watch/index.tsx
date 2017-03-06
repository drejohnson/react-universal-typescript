import { createAsyncComponent } from 'react-async-component';

const AsyncWatch = createAsyncComponent({
  resolve: () => System.import('./Watch')
});

export default AsyncWatch;

import { createAsyncComponent } from 'react-async-component';

const AsyncNotFound = createAsyncComponent({
  resolve: () => System.import('./NotFound')
});

export default AsyncNotFound;

import { createAsyncComponent } from 'react-async-component';

const AsyncHome = createAsyncComponent({
  resolve: () => System.import('./Home')
});

export default AsyncHome;

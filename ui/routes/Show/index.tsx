import { createAsyncComponent } from 'react-async-component';

const AsyncShow = createAsyncComponent({
  resolve: () => System.import('./Show')
});

export default AsyncShow;

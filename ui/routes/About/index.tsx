import { createAsyncComponent } from 'react-async-component';

const AsyncAbout = createAsyncComponent({
  resolve: () => System.import('./About')
});

export default AsyncAbout;

import { createAsyncComponent } from 'react-async-component';

const AsyncHello = createAsyncComponent({
  resolve: () => System.import('./Hello')
});

export default AsyncHello;

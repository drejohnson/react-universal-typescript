declare var VENDOR_BUNDLE: boolean;
declare var CLIENT_BUNDLE: boolean;

declare module '*.svg' {
  const content: string
  export default content;
}

declare module "*.json" {
  const value: any;
  export = value;
}

declare module "*.graphql" {
  const value: any;
  export = value;
}

declare module 'react-hot-loader' {
  const AppContainer: any
  export { AppContainer }
}

interface Window {
  __APOLLO_STATE__: any,
  __REDUX_DEVTOOLS_EXTENSION__: any
}

interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(deps?: any | string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}

// Extend typings
interface NodeModule extends WebpackModule {}
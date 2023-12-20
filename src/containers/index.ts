import ReduxProvider from './state/_.redux.provider';
import ReduxStore, {
  ReduxState,
  ReduxStoreDispatch,
} from './state/_.redux.store';
import rootReducer from './state/app.slice';
import userReducer from './state/user.slice';

export { ReduxProvider, ReduxStore, rootReducer, userReducer };
export type { ReduxState, ReduxStoreDispatch };

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, Provider } from 'react-redux';
import counterReducer from './reducers/CounterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
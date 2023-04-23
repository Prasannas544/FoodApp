import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, Provider } from 'react-redux';
import bookmarkReducer from './reducers/BookmarkSlice';

export default configureStore({
    reducer: {
        bookmark: bookmarkReducer,
    },
});
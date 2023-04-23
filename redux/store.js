import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, Provider } from 'react-redux';
import bookmarkReducer from './reducers/BookmarkSlice';
import RatingReducer from './reducers/RatingSlice';

export default configureStore({
    reducer: {
        bookmark: bookmarkReducer,
        rating: RatingReducer,
    },
});
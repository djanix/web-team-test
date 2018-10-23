import { combineReducers } from 'redux';
import CarouselReducer from './carousel-reducer';

const reducers = {
  carouselStore: CarouselReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
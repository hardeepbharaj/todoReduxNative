import {ADD_ITEM, DELETE_ITEM} from '../actionTypes';

const initialState = {
  courseGoal: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const {courseGoal} = state;
      courseGoal.push(action.payload);
      return {
        ...state,
        courseGoal,
      };

    case DELETE_ITEM:
      let {courseGoal: courseGoal1} = state;
      courseGoal1 = courseGoal1.filter(x => x.key !== action.payload);
      return {
        ...state,
        courseGoal: courseGoal1,
      };

    default:
      return state;
  }
};

export default TodoReducer;

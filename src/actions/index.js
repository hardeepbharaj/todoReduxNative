import {ADD_ITEM, DELETE_ITEM} from '../actionTypes';

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload,
});

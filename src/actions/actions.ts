/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text: string) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index: number) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: string) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

// import { ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER } from '../constants/actionTypes';

// export function addTodo(text: string) {
//     return {
//         type: ADD_TODO,
//         text
//     }
// }

// export function removeTodo(id: number) {
//     return {
//         type: REMOVE_TODO,
//         id
//     }
// }

// export function setVisibilityFilter(filter: string) {
//     return {
//         type: SET_VISIBILITY_FILTER,
//         filter
//     }
// }

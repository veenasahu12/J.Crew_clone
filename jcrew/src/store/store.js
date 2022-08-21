import {legacy_createStore} from 'redux'
import { Reducer } from './reducer';

export const store = legacy_createStore (Reducer)
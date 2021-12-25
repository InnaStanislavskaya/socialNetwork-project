import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {rerenderEntireTree} from './render';
import state from './Redux/state'


rerenderEntireTree(state);

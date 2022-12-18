import React, { Component } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes } from '../routes';
import { publicRoutes } from '../routes';

export default class AppRouter extends Component {
  render() {
    const isAuth = false;
    return (
        <Routes>
           {isAuth === true && authRoutes.map(({path, Component}) =>
              <Route key={path} path={path} element = {<Component/>}  exact/>
           )}
           {publicRoutes.map(({path, Component}) =>
              <Route key={path} path={path} element = {<Component/>}  exact/>
           )}
        </Routes>
    )
  }
}

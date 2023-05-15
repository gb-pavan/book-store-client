import {Switch,Route} from 'react-router-dom'
import ListView from './components/ListView'
import FormField from './components/FormField'
import BookDetailedView from './components/BookDetailedView'
import Navigator from './components/Navigator'

import './App.css';

import React from 'react'

const App = () => {
  return (
    <div className="app-container">
      <div className="responsive-container">
        <Navigator />
        <div className="app-body">
          <Switch>
            <Route exact path="/bookslistview" component={ListView} />
            <Route exact path="/addbook" component={FormField} />
            <Route exact path="/getbooks/:id" component={BookDetailedView} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App




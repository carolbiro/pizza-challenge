import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import { connect } from 'react-redux'

import Header from './components/header/header.component'
import CustomerInfo from './components/customer-info/customer-info.component'
import PizzaSelection from './components/pizza-selection/pizza-selection.component'
import PaymentInfo from './components/payment-info/payment-info.component'
import OrderSummary from './components/order-summary/order-summary.component'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
            {["/", "/customerInfo"].map(path => (
                <Route key={path} exact path={path} component={CustomerInfo} />
              ))
            }
            <Route path='/pizzaSelection' component={PizzaSelection}/>
            <Route path='/paymentInfo' component={PaymentInfo}/>
            <Route path='/order' component={OrderSummary} />
          </Switch>

      </div>
    )
  }
}

export default App

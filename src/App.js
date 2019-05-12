import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
import Programs from './pages/Programs';

import styles from './App.module.scss';

class App extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Router>
          <SubHeader />
          {this.state.hasError ? (
            <Error />
          ) : (
            <main className={styles.main}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  path="/movies"
                  render={() => <Programs type="movie" />}
                />
                <Route
                  path="/series"
                  render={() => <Programs type="series" />}
                />
                <Route component={Error} />
              </Switch>
            </main>
          )}
        </Router>
        <Footer />
      </div>
    );
  }
}
// const App = () => (
//   <div className={styles.container}>
//     <Header />
//     <Router>
//       <SubHeader />
//       <main className={styles.main}>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/movies" render={() => <Programs type="movie" />} />
//           <Route path="/series" render={() => <Programs type="series" />} />
//           <Route component={Error} />
//         </Switch>
//       </main>
//     </Router>
//     <Footer />
//   </div>
// );

export default App;

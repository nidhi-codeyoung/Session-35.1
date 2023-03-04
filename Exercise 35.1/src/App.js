import React, { Fragment } from 'react';
import { BrowserRouter as Router,
Link, Route, Switch } from 'react-router-dom';

const Home = () => {
return <h2>Home</h2>;
};

const Profile = () => {
return <h2>Profile</h2>;
};

const Shoes = () => {
return <h2>Shoes</h2>;
};

const Products = () => {
return <h2>Products</h2>;
};

const App = () => {
return (
	<Fragment>
    <center>
	<Router>
    <h2><u>Example of Switch</u></h2>
		<div>
		<Link to='/'>Home</Link>
		</div>
		<div>
		<Link to='/products'>Products</Link>
		</div>
		<div>
		<Link to='/products/shoes'>Shoes</Link>
		</div>
		<div>
		<Link to='/profile'>profile</Link>
		</div>
		<Switch>
		<Route exact path='/'>
			<Home />
		</Route>
		<Route path='/profile'>
			<Profile />
		</Route>
		<Route exact path='/products'>
			<Products />
		</Route>
		<Route path='/products/shoes'>
			<Shoes />
		</Route>
		</Switch>
	</Router>
  </center>
	</Fragment>
);
};

export default App;

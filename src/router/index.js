import NotFoundPage from '../pages/NotFoundPage/Loadable';
import SignIn from '../pages/SignIn/Loadable';
import SignUp from '../pages/SignUp/Loadable';
import LandingPage from '../pages/LandingPage/Loadable';
import Dashboard from '../pages/Dashboard/Loadable';

export const commonRoutes = {
	landingpage: {
		path: '/',
	    component: LandingPage,
	    exact: true,
	},
	dashboard: {
		path: '/dashboard',
		component: Dashboard,
		exact: true,
	},
	login: {
	    path: '/login',
	    component: SignIn,
	    exact: true,
	},
	signup: {
	    path: '/signup',
	    component: SignUp,
	    exact: true,
	},
	notfound: {
	    component: NotFoundPage,
	},
}
export const privateRoutes = {
	
}


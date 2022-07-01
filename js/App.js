
import Customers from './components/Customers.js';
import Dashboard from './components/Dashboard.js';
import Goods from './components/Goods.js';
import Header from './components/Header.js';
import Integrations from './components/Integrations.js';
import Nav from './components/Nav.js';
import NotFound from './components/NotFound.js';
import Orders from './components/Orders.js';
import Reports from './components/Reports.js';


export default class App {
	
	
	constructor( selector ){
		
		this.root = document.querySelector( selector );

	
		this.pageUrl = '#dashboard';
		

		history.pushState(this.pageUrl, '', this.pageUrl);		
	}
	
	
	clickPage( url ) {
	
		
		this.pageUrl = url;
		
		
		history.pushState(this.pageUrl, '', this.pageUrl);
		
	
		this.render();
		
	}
	

	render( selector ){
		
		if( selector ) {
			this.root = document.querySelector( selector );
		}
		
	
		this.root.innerHTML = '';
		
		
		const header = new Header();
		this.root.appendChild( header.render() );
		
		const options = {
		 menuItems: [
		  {'title': 'Дашборд', 'path': 'dashboard', feather: 'home' },
		  {'title': 'Заказы', 'path': 'orders', feather: 'file' },
		  {'title': 'Товары', 'path': 'goods', feather: 'shopping-cart' },
		  {'title': 'Покупатели', 'path': 'customers', feather: 'users' },
		  {'title': 'Отчеты', 'path': 'reports', feather: 'bar-chart-2' },
		  {'title': 'Интеграции', 'path': 'integrations', feather: 'layers' },
		 ]
		}
		
		const nav = new Nav( this, options );
		// this.root.innerHTML += nav.render();
		this.root.appendChild( nav.render() );
		
		let component = new NotFound();
		
		//
		switch ( this.pageUrl.slice(1) ){
			case 'dashboard': component = new Dashboard(); break;
			case 'orders': component = new Orders(); break;
			case 'goods': component = new Goods(); break;
			case 'customers': component = new Customers(); break;
			case 'reports': component = new Reports(); break;
			case 'integrations': component = new Integrations(); break;
		}
		
		this.root.appendChild( component.render() );
		
		
		feather.replace({ 'aria-hidden': 'true' })
		
	} 
	
}
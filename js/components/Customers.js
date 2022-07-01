export default class Customers {

	constructor(){
		this.content = document.createElement('div');

		this.content.innerHTML = `
		<div class="container-fluid">
            <div class="row">
        
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
 
                <h2 id="customers">Покупатели</h2>
                <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th scope="col">Номер</th>
                        <th scope="col">Покупатель</th>
                        <th scope="col">Дата</th>
                        <th scope="col">Сумма заказа</th>
                        <th scope="col">Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1001</td>
                        <td>random</td>
                        <td>data</td>
                        <td>placeholder</td>
                        <td>placeholder</td>
                    </tr>
                    <tr>
                        <td>1002</td>
                        <td>placeholder</td>
                        <td>irrelevant</td>
                        <td>visual</td>
                        <td>visual</td>
                    </tr>
                    </tbody>
                </table>
                </div>
				
				</main>
				</div>
				</div>`;

	}

	render(){
		console.log( 'Render Customers' );
		return this.content;
	}
	
}
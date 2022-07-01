export default class Reports {

	constructor(){
		this.content = document.createElement('div');

		this.content.innerHTML = `
		<div class="container-fluid">
            <div class="row">
        
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
 
                <h2 id="reports">Отчёты</h2>
                <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th scope="col">Номер</th>
                        <th scope="col">Название</th>
                        <th scope="col">Дата</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1001</td>
                        <td>random</td>
                        <td>data</td>
                    </tr>
                    <tr>
                        <td>1002</td>
                        <td>placeholder</td>
                        <td>irrelevant</td>
                    </tr>
                    </tbody>
                </table>
                </div>
				
				</main>
				</div>
				</div>`;
	}

	render(){
		console.log( 'Render Reports' );
		return this.content;
	}
	
}
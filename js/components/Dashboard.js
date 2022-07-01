export default class Dashboard {

	constructor(){
		
		this.content = document.createElement('div');

		
		this.content.innerHTML = `
		<div class="container-fluid">
            <div class="row">
        
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1  id="dashboard" class="h2" >Панель управления</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Поделиться</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Экспорт"</button>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar"></span>
                    Текущая неделя
                    </button>
                </div>
                </div>
        
                <canvas class="my-4 w-100" id="myChart" width="900" height="200"></canvas>
				
				</main>
				</div>
				</div>`;

	fetch( 'http://127.0.0.1:5500/mock-api/dashboard.json' ) 
	.then( res => res.json( ) ) 
	.then( res=> { console.log( res ) 	
	
    
    var ctx = this.content.querySelector('#myChart');

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          "понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"
        ],
        datasets: [{
          data: res,
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })	
	
	}) // 2-й then закрылся
	

	} // constructor

	render(){
		console.log( 'Render Dashboard' );
		return this.content;
		
	}
	
}
app.controller('ReportsController', ['TrackerService', '$http', function (TrackerService, $http) {
    console.log('ReportsController has been loaded');
    let self = this;
    

    var ctx = angular.element( document.querySelector( '#myChart' ) );//document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });


    //List objects from service
    self.clientList = TrackerService.clientList; 
    self.projectList = TrackerService.projectList;
    self.taskList = TrackerService.taskList; 
    self.fullTable = TrackerService.fullTable; 

    //GET functions from service 
    self.getClients = TrackerService.getClients;
    self.getProjects = TrackerService.getProjects;
    self.getTasks = TrackerService.getTasks;
    self.collectProjects = TrackerService.collectProjects; 

//Functions called upon load
    self.collectProjects(); 
    self.getClients(); 
    self.getProjects(); 
    self.getTasks(); 

//END OF REPORTS CONTROLLER
}])

var app = angular.module("instantSearch", []).controller('InstantSearchController', ['$scope', function ($scope){
    console.log('w');
    $scope.items = [
        {Name:'Bill',PhoneNo:'432117475',image:'images/img.gif'},
        {Name:'Brain',PhoneNo:'8432872475',image:'images/img.gif'},
        {Name:'Paul',PhoneNo:'9634687475',image:'images/img.gif'},
        {Name:'Rohan',PhoneNo:'99768321789',image:'images/img.gif'},
        {Name:'Roy',PhoneNo:'897682345',image:'images/img.gif'}
    ];
}]);
//app.filter('filter', ['searchForFilter',function(searchString){
//    console.log('w2');
//    return function(arr, searchString) {
//        if(!searchString && !isNaN(searchString)) return arr;
//        let flag = false;
//       let result = [];
//        angular.forEach(arr, (item) => {
//            if(item.Name.toLowerCase().indexOf(searchString.toLowerCase())+1){
//                result.push(item);
//                flag=true;
//            }
//        });
//        if (flag) { 
//            console.log('none found');
//        } else {
//            return result;
//        }
//        
//    };
//}]);
//app.controller('InstantSearchController', ['$scope', function ($scope){
//    $scope.items = [
//        {Name:'Bill',PhoneNo:'432117475',image:'images/img.gif'},
//        {Name:'Brain',PhoneNo:'8432872475',image:'images/img.gif'},
//        {Name:'Paul',PhoneNo:'9634687475',image:'images/img.gif'},
//        {Name:'Rohan',PhoneNo:'99768321789',image:'images/img.gif'},
//        {Name:'Roy',PhoneNo:'897682345',image:'images/img.gif'}
//    ];
//}]);
//function InstantSearchController($scope){
//    $scope.arr =[{Name:'Bill',PhoneNo:'432117475',image:'images/img.gif'},{Name:'Brain',PhoneNo:'8432872475',image:'images/img.gif'},{Name:'Paul',PhoneNo:'9634687475',image:'images/img.gif'},{Name:'Rohan',PhoneNo:'99768321789',image:'images/img.gif'},{Name:'Roy',PhoneNo:'897682345',image:'images/img.gif'}];
//}

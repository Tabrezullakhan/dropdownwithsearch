(function () {
    angular.module("MyApp.directives")
        .directive('angularSearchAndSelect', angularSearchAndSelect)
    /* usage 
    <angular-search-and-select selecteditem="employee" values="employees" key="Name"  ng-init="getEmployees()"></angular-search-and-select>
     */
    angularSearchAndSelect.$inject = [];
    function angularSearchAndSelect() {
        var directive = {
            scope: {
                values: "=",
                selecteditem: "=",
                key: "@",
            },
            link: link,
            templateUrl: '../directives/angular-search-and-select.template.html',
            restrict: 'E',
        };
        return directive;

        function link(scope, elm, attrs) {

            scope.showList = false;

            scope.selectItem = function (item) {
                scope.searchKey = "";
                scope.selecteditem = item;
                scope.showList = false;
            };

            scope.isActive = function (item) {
                return item[scope.key] === scope.selecteditem[scope.key];
            };

            scope.show = function () {
                scope.showList = !scope.showList;
            };
        }
    }
})();

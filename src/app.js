var app = angular.module("app", []);

app.controller("appController", function ($scope) {
    $scope.tasks = [];
    $scope.taskName = '';

    $scope.addTask = function () {
        //prevent adding task with no name
        if ($scope.taskName.length < 1){
            return;
        }
        $scope.tasks.push(
            {
                name: $scope.taskName,
                status: 'pending'
            }
        );
        $scope.taskName = '';
    };

    $scope.removeTask = function (task) {
        $scope.tasks.splice($scope.tasks.indexOf(task), 1);
    };

    $scope.finishTask = function (task) {
        task.status = "finished";
    };

    //helpers - Callbacks for filtering tasks array
    $scope.checkPending = function (task) {
        return task.status === "pending";
    };

    $scope.checkDone = function (task) {
        return task.status === "finished";
    };

    //separate finished and pending
    $scope.pendingTasks = function () {
        return $scope.tasks.filter($scope.checkPending);
    };

    $scope.finishedTasks = function () {
        return $scope.tasks.filter($scope.checkDone);
    };

});
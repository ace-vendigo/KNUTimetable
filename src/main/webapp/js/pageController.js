app.controller('pageController', function($scope, $http) {
	/*Init*/
	$scope.activePage = 'main';

	/*Returns true if given page is active*/
	$scope.isActive = function(page) {
		return $scope.activePage === page;
	};
	/*Returns class="active" if given page is active*/
	$scope.activeOn = function(page) {
		return {'active': $scope.activePage === page};
	};
	/*Changes activePage to given*/
	$scope.goTo = function(page) {
		$scope.activePage = page;		
	};

	/*FACULTIES PART*/
	/*Get Faculties from server*/	
	$scope.loadFaculties = function() {
		$http.get('/guest/faculty').success(function(response) {
		$scope.faculties = response;
		});
	};
	/*Returns true if faculties are loaded and there is no active faculty*/
	$scope.isListFaculties = function() {
		return $scope.faculties && $scope.activeFaculty === '';
	};
	/*Returns true if faculties are loaded and there is active faculty*/
	$scope.isFaculty = function() {
		return $scope.faculties && $scope.activeFaculty != '';
	};
	/*Changes activeFaculty to given*/
	$scope.goToFaculty = function(faculty) {
		return $scope.activeFaculty = faculty;
	};
	/*Goes to faculties page*/
	$scope.goToFaculties = function() {
			$scope.goTo('faculties');
			$scope.loadFaculties();
			$scope.goToFaculty('');
		};

	/*TIMETABLE PART	*/
	/*Loads actualTimeTable for given group*/
	$scope.loadTimeTable = function(group) {
		var request = '/guest/group/'+group.id+'/actualTimeTable';
		$http.get(request).success(function(response) {
		$scope.timeTable = response;
		});
	};
	$scope.goToTimeTable = function(group) {
		$scope.goTo('timeTable');
		$scope.loadTimeTable(group);		
		};
	
});


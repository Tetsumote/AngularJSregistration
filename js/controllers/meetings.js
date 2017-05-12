myApp.controller('MeetingsController',['$scope','$firebaseAuth','$firebaseObject','$firebaseArray',function($scope,$firebaseAuth){
//connect to firebase and check auth
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	
	auth.$onAuthStateChanged(function(authUser){
		if(authUser){
			
			var meetingsRef = ref.child('users').child(authUser.uid).child('meetings');
			var meetingsInfo = $firebaseArray(meetingsRef);
			console.log(ref);
			$scope.addMeeting = function(){
				meetingsInfo.$add({
					name: $scope.meetingname,
					data: firebase.database.ServerValue.TIMESTAMP 
				}).then(function(){
					$scope.meetingname = '';
				}); //promise
			}; //addMeeting
		}//authUser
	});//onAuthStateChanged
}]);// myApp controller  MeetingsController
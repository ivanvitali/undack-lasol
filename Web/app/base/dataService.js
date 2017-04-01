'use strict';

angular.module('Base').factory('dataService', ['$firebaseObject',
  function ($firebaseObject) {
	  var config = {
		  apiKey: "AIzaSyDUfN67ITZxYROr6RB6uYe05IRgrru3kA4",
		  authDomain: "undackviernes-dev.firebaseapp.com",
		  databaseURL: "https://undackviernes-dev.firebaseio.com",
		  projectId: "undackviernes-dev",
		  storageBucket: "undackviernes-dev.appspot.com",
		  messagingSenderId: "879195888178"
	  };
	  firebase.initializeApp(config);

	return {
	    getData: function(referenceName){
			var ref = firebase.database().ref(referenceName);
			return $firebaseObject(ref);
			// synchronize the object with a three-way data binding
			// click on `index.html` above to see it used in the DOM!
			//syncObject.$bindTo(scope, objectName);
			/*
    		var dataRef = firebase.database().ref(referenceName);
				dataRef.on('value', function(snapshot) {
			  	var data = snapshot.val();
					console.log(data);
			  		callback(data, param);
				});*/
	    },
	    saveObject:function(referenceName, object, onCompleted){
	    	if(object.id==null)
	    	{
	    		object.id = firebase.database().ref().child(referenceName).push().key;
	    	}

	    	firebase.database().ref(referenceName+'/' + object.id ).set(object, onCompleted);
	    },
		update:function(referenceName, value){
			firebase.database().ref(referenceName).update(value);
		},
		deleteObject:function(referenceName, object){
			firebase.database().ref(referenceName+'/' + object.id ).remove();
		},
		uploadFile:function(referenceName, file, onUploading, onError, onUploaded) {
			var storageRef = firebase.storage().ref();
			var uploadTask = storageRef.child(referenceName).put(file);
			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, onUploading, onError, function () {
				onUploaded(uploadTask.snapshot.downloadURL);
			});
		},
		deleteUploadedFile:function(referenceName, onDeleted, onError){
			var storageRef = firebase.storage().ref();
			var desertRef = storageRef.child(referenceName);
			desertRef.delete().then(onDeleted).catch(onError);
		}
	};
  }
]);
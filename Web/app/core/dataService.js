angular.module('Core').factory('coreService', ['$firebaseObject',
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
      login: function(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      },
	    getData: function(referenceName, onLoaded){
			var ref = firebase.database().ref(referenceName);
			var obj = $firebaseObject(ref);
			if(onLoaded !== undefined) {
				obj.$loaded().then(onLoaded);
			}
			return obj;
	    },
		getNewObject: function(referenceName){
			var ref= firebase.database().ref().child(referenceName).push();
			return $firebaseObject(ref);
		},
	    saveObject:function(dataObject, onSaved){
			if(dataObject.id === undefined){
				dataObject.id = dataObject.$id;
			}
			dataObject.$save().then(onSaved);
	    },
		update:function(referenceName, value){
			firebase.database().ref(referenceName).update(value);
		},
		deleteObject:function(referenceName, object){
			var ref = firebase.database().ref(referenceName+'/' + object.id);
			var obj = $firebaseObject(ref);
			obj.$remove();
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

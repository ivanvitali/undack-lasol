angular.module('Core')
.factory('authenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'dataService',
    function ($http, $cookieStore, $rootScope, $timeout, dataService) {
        return {
            login: function (username, password, onSuccess, onError) {
                $timeout(function () {
                    dataService.login(username, password)
                        .then(onSuccess)
                        .catch(onError);
                }, 1000);
            },
            setCredentials: function (username, password) {
                var authdata = Base64.encode(username + ':' + password);
                $rootScope.globals = {
                    currentUser: {
                        username: username,
                        authdata: authdata
                    }
                };
                $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                $cookieStore.put('globals', $rootScope.globals);
            },
            clearCredentials: function () {
                $rootScope.globals = {};
                $cookieStore.remove('globals');
                $http.defaults.headers.common.Authorization = 'Basic';
            },
            logout: function () {
                var self = this;
                self.clearCredentials();
            },
            isAuthenticated: function () {
                var currentUser = $rootScope.globals.currentUser;
                return (currentUser != null);
            },
            getCurrentUsername: function () {
                var currentUser = $rootScope.globals.currentUser;
                return (currentUser != null && currentUser.username) ? currentUser.username : '';
            }
        }
    }
])
.factory('dataService', [
    function () {
        var config = {
            apiKey: "AIzaSyB9Whv3MmJEZz2sp2BXf4gVh3PAmkKv1qI",
            authDomain: "siisp-dev.firebaseapp.com",
            databaseURL: "https://siisp-dev.firebaseio.com",
            projectId: "siisp-dev",
            storageBucket: "siisp-dev.appspot.com"
        };
        firebase.initializeApp(config);

        return {
            login: function(email, password) {
                return firebase.auth().signInWithEmailAndPassword(email, password);
            },
            getData: function(referenceName, callback, param){
                var dataRef = firebase.database().ref(referenceName);
                dataRef.on('value', function(snapshot) {
                    var data = snapshot.val();
                    callback(data, param);
                });
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
])

var myApp = angular.module('micad-app', ['ngRoute']);

myApp.controller('micadController', ['$rootScope', '$scope', '$http', '$location',
function ($rootScope, $scope, $http, $location) {
    // var api = "http://35.184.118.228:8191/api/";
    var api = "http://127.0.0.1:8191/api/";
    $('.form-container label').each(function () {
        var getTitle = $(this).html();
        $(this).parent().find('input').attr('placeholder', getTitle)

    });
    $scope.prizes = prizes
    $scope.sponsors = sponsors
    $scope.technologies = technologies
    console.log(prizes)

    var emailBody = "";
    $http.get('views/email.html').then(function (response) {
        emailBody = response.data;
    }, function (error, data, status) {
    }).finally(function (data) {
    });

    $scope.options = $scope.options || {};
    var opts = $scope.options;


    $scope.sendMail = function () {
        opts.processing = true;
        var personDets = "<hr> <pre>Name: " + $scope.FirstName1 + " " + $scope.LastName1 +
            "<br>Phone: " + $scope.phoneNumber +
            "<br>Wedding date: " + $scope.dt +
            "<br>Wedding location: " + $scope.loc +
            "<br>Email: " + $scope.email +
            "<br>Instagram: " + $scope.instagram +
            "<br>Twitter: " + $scope.twitter + "</pre><hr>";

        var postData = {};

        postData.from = "The League <league@madeincanada.design>";
        // postData.to = $scope.FirstName1 + " " + $scope.LastName1 + " <" + $scope.email + ">," + " The league <league@madeincanada.design>";
        postData.to = $scope.email + ", league@madeincanada.design";
        postData.subject = "Wedding on " + $scope.dt + " in " + $scope.loc + " for " + $scope.FirstName1;
        emailBody = emailBody.replace("{{personName}}", $scope.FirstName1 + " " + $scope.LastName1)
            .replace("{{sendName}}", "Nick")
            .replace("{{personDetails}}", personDets);
        postData.html = emailBody;
        postData.text = "Hey there";
        postData.personDets = personDets;

        $http.post(api + "email/create", postData).then(function (response) {
            console.log(response);
            // opts.processing = response.status == "OK" ? false : "failed";
        }, function (response) {
            console.log(response);
        });
    }

    $scope.saveUserDetail = function () {
        var msg = {
            firstName: $scope.FirstName1 || "NA",
            lastName: $scope.LastName1 || "NA",
            date: $scope.dt || "NA",
            location: $scope.loc || "",
            phone: $scope.phoneNumber || "-",
            email: $scope.email || "NA",
            instagram: $scope.instagram || "NA",
            twitter: $scope.twitter || "NA"
        }
        var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSfgBsgGzm8HumnYShEHSo2qQRFB2DouwGF2b4Ei_SQccOru4A/formResponse?";
        var submitRef = '&submit=Submit';
        var toSend = baseURL + 
                    "entry.1025040230=" + encodeURIComponent(msg.firstName) + "&" + 
                    "entry.1692747736=" + encodeURIComponent(msg.lastName) + "&" + 
                    "entry.1338017620=" + encodeURIComponent(msg.phone) + "&" + 
                    "entry.1707627345=" + encodeURIComponent(msg.email) + "&" + 
                    "entry.1094352899=" + encodeURIComponent(msg.instagram) + "&" + 
                    "entry.1791986727=" + encodeURIComponent(msg.twitter);
        $http.get(toSend).then(function (response) {
            $scope.submitted = true;
            console.log(response);
        }, function (error, data, status) {
            $scope.submitted = true;
            console.log(error);
        }).finally(function (data) {
        });
    }

    $scope.activate = function () {
        $scope.submitted = false;
    }

    $('#input-form').one('submit',function(){
        var inputq1 = encodeURIComponent($('#input-q1').val());
        var inputq2 = encodeURIComponent($('#input-q2').val());
        var q1ID = "entry.1872902617";
        var q2ID = "entry.1736637257";
        var baseURL = 'https://docs.google.com/forms/d/1s0r2Cl5rDGMqD8u08BgUO7lvDrvO9Dr1nm9MsrWxOxQ/formResponse?';
        var submitRef = '&submit=Submit';
        var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + submitRef);
        console.log(submitURL);
        $(this)[0].action=submitURL;
        $('#input-feedback').text('Thank You!');
    });

}]);

myApp.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'micadController'
    }).otherwise({
        redirectTo: '/welcome'
    });
}]);

myApp.run(['$rootScope', '$location',
function ($rootScope, $location) {


}]);
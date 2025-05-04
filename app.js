angular.module('marketingApp', [])
  .controller('MainController', function($scope) {
    $scope.title = "Grow Your Business";
    $scope.subtitle = "We help you boost your online presence and sales.";

    $scope.services = [
      { title: "Web Design", description: "Beautiful, responsive websites that convert." },
      { title: "SEO Optimization", description: "Rank higher in search engines and get more traffic." },
      { title: "Marketing Strategy", description: "Custom strategies to grow your business fast." }
    ];

    $scope.aboutText = "We’re a team of digital marketing experts committed to helping businesses grow with modern tools and creative strategies.";

    $scope.contact = {};
    $scope.success = '';

    $scope.submitForm = function () {
      if ($scope.contact.name && $scope.contact.email && $scope.contact.message) {
        $scope.success = "Thank you for contacting us!";
        $scope.contact = {};
      }
    };
  });

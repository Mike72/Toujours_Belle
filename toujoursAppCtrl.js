app.controller("toujoursAppCtrl", function ($scope) {
    function Guest(gfname, glname,gcity,gstreet, gmail,gpassword,acode, gtel) {
        this.gfname = gfname;
        this.glname = glname;
        this.gcity = gcity;
        this.gstreet = gstreet;
        this.gmail = gmail;
        this.gpassword = gpassword;
        this.acode = acode;
        this.gtel = gtel;
    }

    $scope.guests = [new Guest("Dora", "Hajdu","Kfar Sava","Hameyasdim 21", "dudorka@hotmail.com","Dorika","52", "5239029"),
                    new Guest("Betty","Mike Kun","Kfar Sava","Hameyasdim 21","kun.betti@hotmail.com","Betty","52","8338443")
                ];

    $scope.addGuest = function () {
        $scope.guests.push(new Guest("Dora", "Hajdu", "Kfar Sava", "Hameyasdim 21", "dudorka@hotmail.com","Dorika","52", "5239029"));
    }
    $scope.sortBy = function (prop) {
        $scope.orderProp = prop;
    }
	/*$scope.addNewGuest = function (){
		$scope.guests.push(new Guest({{guest.gfname}},{{guest.glname}},{{guest.gcity}},{{guest.gsteet}},{{guest.gmail}},{{guest.gpassword}}
		,{{guest.acode}},{{guest.gtel}}));
	}*/
   
});
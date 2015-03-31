'use strict';

(function () {

    var employees = [
           {"id": 1, "firstName": "Viola", "lastName": "Rodgers", "currentAttendance": "0", "officePhone": "01522 000 111", "email": "ViolaR@mailmail.com", "pic": "default_picture.jpg"},
            {"id": 2, "firstName": "Gail", "lastName": "Ortiz", "currentAttendance": "0", "officePhone": "01522 111 222", "email": "GailO@mailmail.com", "pic": "default_picture.jpg"},
            {"id": 3, "firstName": "Lori", "lastName": "Richards", "currentAttendance": "0", "officePhone": "01522 222 333", "email": "LoriR@mailmail.com", "pic": "default_picture.jpg"},
            {"id": 4, "firstName": "Andy", "lastName": "Morrison", "currentAttendance": "0", "officePhone": "01522 333 444", "email": "AndyM@mailmail.com", "pic": "default_picture.jpg"},
            {"id": 5, "firstName": "Lorenzo", "lastName": "Wagner", "currentAttendance": "0", "officePhone": "01522 444 555", "email": "LorenzoW@mailmail.com", "pic": "default_picture.jpg"},
            {"id": 6, "firstName": "Orlando", "lastName": "Stevens", "currentAttendance": "0", "officePhone": "01522 555 666", "email": "OrlandoS@mailmail.com", "pic": "default_picture.jpg"},
            {"id": 7, "firstName": "Nancy", "lastName": "Griffith", "currentAttendance": "0", "officePhone": "01522 666 777", "email": "NancyG@mailmail.com", "pic": "default_picture.jpg"},
            {"id": 8, "firstName": "Cathy", "lastName": "Johnson", "currentAttendance": "0", "officePhone": "01522 777 888", "email": "CathyJ@mailmail.com", "pic": "default_picture.jpg"},
            {"id": 9, "firstName": "Pat", "lastName": "Hicks", "currentAttendance": "0", "officePhone": "01522 888 999", "email": "PatH@mailmail.com", "pic": "default_picture.jpg"},
        ],

        findById = function (id) {
            var employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            return employee;
        },

        findByManager = function (managerId) {
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            return results;
        };


    angular.module('myApp.memoryServices', [])
        .factory('Employee', [
            function () {
                return {
                    query: function () {
                        return employees;
                    },
                    get: function (employee) {
                        return findById(parseInt(employee.employeeId));
                    }
                }

            }])
        .factory('Report', [
            function () {
                return {
                    query: function (employee) {
                        return findByManager(parseInt(employee.employeeId));
                    }
                }

            }]);

}());
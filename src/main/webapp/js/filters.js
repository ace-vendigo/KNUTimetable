var ttFilters = angular.module("ttFilters", []);

ttFilters.filter('dayOfWeek', function() {
    return function(input) {
        switch (input) {
            case 'MONDAY':
                return 'Понеділок';
            case 'TUESDAY':
                return 'Вівторок';
            case 'WEDNESDAY':
                return 'Середа';
            case 'THURSDAY':
                return 'Четвер';
            case 'FRIDAY':
                return "П'ятниця";
            case 'SATURDAY':
                return 'Субота';
            case 'SUNDAY':
                return 'Неділя';
        }
    }
});

ttFilters.filter('entityId', function() {
    return function(input) {
        var href = input._links.self.href;
        return href.split("/").pop();
    }
});

ttFilters.filter('facultyLink', function() {
    return function(input) {
        var href = input._links.self.href;
        href = href.replace("/faculties","/#/faculties");
        return href;
    }
});

ttFilters.filter('facultyEditLink', function() {
    return function(input) {
        var href = input._links.self.href;
        href = href.replace("/faculties","/#/admin/faculties");
        return href;
    }
});

ttFilters.filter('facultyDeleteLink', function() {
    return function(input) {
        var href = input._links.self.href;
        href = href.replace("/faculties","/#/admin/faculties");
        return href;
    }
});


ttFilters.filter('timeTableForGroupLink', function() {
    return function(input) {
        var href = input._links.self.href;
        href = href.replace("groups","#/groups")+"/timetable";
        return href;
    }
});
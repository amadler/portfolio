app.controller('HomeCtrl', function($scope) {
    $scope.title = 'Strona główna';
    $scope.projects = [
        {
            thumb: 'images/mockup/abstract-q-c-640-480-1.jpg',
            image: 'images/mockup/abstract-q-c-640-480-1.jpg',
            title: 'tytuł 1',
            description: {
                jobs: 'zakres prac 1',
                tech: 'Technologie 1'
            },
            url: {
                href: 'www link 1',
                text: 'www tekst 1',
                title: 'www title 1'
            }
        },
        {
            thumb: 'images/mockup/abstract-q-c-640-480-2.jpg',
            image: 'images/mockup/abstract-q-c-640-480-2.jpg',
            title: 'tytuł 2',
            description: {
                jobs: 'zakres prac 2',
                tech: 'Technologie 2'
            },
            url: {
                href: 'www link 2',
                text: 'www tekst 2',
                title: 'www title 2'
            }
        }
    ]
});

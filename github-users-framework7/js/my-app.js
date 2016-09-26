// Initialize app
var myApp = new Framework7();
 
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true,
    animatePages: false,
    swipeBackPage: false,
    reloadPages: true,
    preloadPreviousPage: false
});


var usersTemplate = $$('script#usersTemplate').html();
var compiledUsersTemplate = Template7.compile(usersTemplate);

function getUsers() {
    githubapi.users(function(res) {
        $$('#userList').html(compiledUsersTemplate(JSON.parse(res)))
    }, function(err) {
        console.error('Error: ' + error);
    })
}

getUsers();

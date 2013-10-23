var html;
var posts = [];

$('#draft button').click( function(event){

    // stop form from trying to send & refresh page
    event.preventDefault();

    // create post from form
    var post = {};
    post.title = $('#title').val();
    post.content = $('#content').val();

    // add post to posts
    posts.push(post);

    console.log('post: ',post);
    console.log('posts: ',posts);

    displayPost(post);
    storePosts(posts);

});

function displayPost(post){

/*
    var newElem = $('#forClone').clone().attr('id','box');
    newElem.children('img').attr('src', 'http://placehold.it/300x300/3498db/ffffff/&amp;text=Drama+11')
    $('.four fifths').prepend(newElem);
*/
    var box = document.getElementsByClassName('box');
	var addedbox = document.createElement('div');
	addedbox.className('kamilla');
	box.prepend(addedbox);    
/*

	display none forClone and display visible later
    var html = '<div>'+ post.title +'http://placehold.it/300x300/3498db/ffffff/&amp;text=Drama+11'+ post.content + '</div>;
    $('#feed').prepend(html);
*/
    
}

function storePosts(posts){

    console.log('array: ' + posts);

    // make the array a string
    posts = JSON.stringify(posts);
    console.log('json: ' + posts);

    // store the string
    localStorage.posts = posts;

}

function loadPosts(){

    // check for posts in storage
    if (localStorage.posts) { 

        posts = localStorage.posts;

        // turn string into an array
        posts = JSON.parse(posts);

        // loop thru items in the array
        for( i=0, count=posts.length; i<count; i++ ){

            var post = posts[i]
            console.log( post );
            displayPost(post);
        }
    } else { // nothing in storage?
    
        posts = []; 
    
    }

}

loadPosts();

var app = {
    load : function(){
        if (localStorage.posts) { 
            posts = localStorage.posts;
            posts = JSON.parse(posts);
            for( i=0, count=posts.length; i<count; i++ ){
                var post = posts[i]
                displayPost(post);
            }
        }        
    },
    store : function(posts){
        posts = JSON.stringify(posts);
        localStorage.posts = posts;
    }
}


//define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
    }

//calling three functions and creating 3 variables with different values

let album1 = make_album("marium", "album title 1");

let album2 = make_album("hani", "album title 1");  

// calling a make album function with third parameter
let album3 = make_album("zain", "album title 1" , 10);

//print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
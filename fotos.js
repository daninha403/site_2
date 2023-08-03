let counter = 1;

setInterval( function(){
    document.getElementById('slide' + counter).checked = true;
    counter++;

    if(counter > 4 ) {
        counter = 1;
    }
}, 2500 );
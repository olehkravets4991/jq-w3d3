$(() => {

    let $container = $('#container');


    $('#container').append($h1= $('<h1>').text('Hogwarts'))
    $('#container').append($h2= $('<h2>').text('Oleh'))
    $('#container').append($h3= $('<h3>').text('Gryffindor'))
    $('#container').append($h4= $('<h4>').text('Ruta').addClass('dog'))
    $('#container').append($h4= $('<h4>').text('Holly Wand with Unicorn Hair Core'))
    $('#container').append()

    let $unorderedList = $('<ul>').attr('storage', 'Trunk');
    $unorderedList.append($('<li>').text('butter beer'));
    $unorderedList.append($('<li>').addClass('secret').text('invisibility cloak'));
    $unorderedList.append($('<li>').addClass('secret').text('magic map'));
    $unorderedList.append($('<li>').addClass('secret').text('time turner'));
    $unorderedList.append($('<li>').addClass('dog').text('leash'));
    $unorderedList.append($('<li>').text('"Bertie Bott\'s Every Flavor [Jelly] Beans"'));

    $container.append($unorderedList);

  });

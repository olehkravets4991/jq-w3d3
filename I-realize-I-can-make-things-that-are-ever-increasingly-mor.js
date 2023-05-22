   $('#container').append($h5= $('<h5>').text('Spring 2017'))

    let $table = $('<table>');
    let $thead = $('<thead>');
    $thead.append($('<tr>').append($('<th>').text('Day'), $('<th>').text('Classes')));
    $table.append($thead);

    let $tbody = $('<tbody>');
    $tbody.append($('<tr>').append($('<td>').text('Monday'), $('<td>').text('History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
    $tbody.append($('<tr>').append($('<td>').text('Tuesday'), $('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration')));
    $tbody.append($('<tr>').append($('<td>').text('Wednesday'), $('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
    $tbody.append($('<tr>').append($('<td>').text('Thrusday'), $('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')));
    $tbody.append($('<tr>').append($('<td>').text('Friday'), $('<td>').text('Quidditch practice,  Potions, Transfiguration')));
    $table.append($tbody);

    $container.append($table);
  });

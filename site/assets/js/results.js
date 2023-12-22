$(document).ready(function () {
  "use strict";
  const url = 'https://innovdemocracy.netlify.app/api/count';

  $.ajax(url,   // request url
    {
      dataType: 'json',
      success: function (data, status, xhr) {// success callback function
        for (let i = 0; i < data.length; i++) {
          // change style
          $(`#${data[i].id} .progression-bar-inner-progress`).css('width', `${data[i].count}%`); //height: 5px;background-color: #f4a222
          $(`#${data[i].id} .progression-bar-val`).html(`${data[i].count}%`);
        }
    }
  });

});
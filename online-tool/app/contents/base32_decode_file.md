---
title: Base32 Decode File
template: page.jade
js: js/tool/base32.min.js
method: false
action: Download
auto_update: false
description: Decode and download file from base32 online function
keywords: Base32,online,decode,download
---
<script src="js/tool/base64.min.js"></script>
<script>
$(document).ready(function() {
  var download = $('<a class="btn btn-default" download="base32"/>').text('Download');
  download.click(function() {
    var base32Str = $('#input').val();
    var bytes = base32.decode.asBytes(base32Str);
    var base64Str = base64.encode(bytes);
    download.attr('href', 'data:application/octet-stream;base64,' + base64Str);
  });
  $('#execute').replaceWith(download);
  $('.output').remove();
});
</script>

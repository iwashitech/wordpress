//encodes the xml, replaces all invalid characters with their hex value, decodes the xml, then parses it.
const encoded = encodeURIComponent(xmlhttp.responseText);
const replaced = encoded.replace(/%26/g,"&amp;");  // &
const decoded = decodeURIComponent(replaced);

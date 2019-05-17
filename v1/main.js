
/* ---- Navbar ---- */
let $document = $(document),
    $element = $('.navbar'),
    className = 'box-shadow';

$document.scroll(function () {
    if ($document.scrollTop() >= 60) {
        $element.addClass(className);
    } else {
        $element.removeClass(className);
    }
});


let firstCap = function (string) {
    return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
}

let hasWeb = function (data_obj) {
    let str_out = '';

    if (data_obj.has_web == false) {
        str_out += 'button none';
    }
    else {
        str_out += 'button ';
    }
    return str_out;
}

let footer = `<footer>
2013 &copy;
<a href="http://www.dit.upm.es/">
    Department of Telematic Systems Engineering
</a>
,
<a href="http://www.etsit.upm.es/de.html">
    ETSI telecommunication
</a>
,
<a href="http://www.upm.es/internacional">
    UPM
</a>
.
</footer>`
var data = [

    {
        category: "k1",
        imgSrc: "img1.jpg"
    }, {
        category: "k2",
        imgSrc: "img2.jpg"
    }, {
        category: "k3",
        imgSrc: "img3.jpg"
    }, {
        category: "k4",
        imgSrc: "img4.jpg"
    }, {
        category: "k5",
        imgSrc: "img5.jpg"
    }, {
        category: "k6",
        imgSrc: "img6.jpg"
    }, {
        category: "k7",
        imgSrc: "img7.jpg"
    }, {
        category: "k8",
        imgSrc: "img8.jpg"
    }, {
        category: "k9",
        imgSrc: "img9.jpg"
    },  


];
var each = function(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    } else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function(array, predicate) {
    var acc = [];
    each(array, function(e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}
function render(data){
each(data, function(elem, i) {
    var div = $("<div></div>")
    div.attr("id", i)
    div.attr("class", "grid-item")
    var img = $("<img />")
    img.attr("id", i)
    img.attr("src", elem.imgSrc)
    div.append(img)
    $(".grid-container").append(div)
})
}
render(data)
$('.searchButton').click(function(){
$('.grid-container').empty()
var text=$('.searchTerm').val()
var filtredarray=filter(data,function(e){
    return e.category.toLowerCase().includes(text.toLowerCase())

})
render(filtredarray)
})

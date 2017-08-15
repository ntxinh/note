```
$.ajax({
    url: url + 'vehicle-inside/modify',
    type: "POST",
    dataType: "json",
    data: sendToServer
}).done(function(data, textStatus, jqXHR){
    console.log("done");
    console.log(data);
    console.log(textStatus);
    console.log(jqXHR);
}).fail(function(jqXHR, textStatus, errorThrown){
    console.log("fail");
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
}).always(function(a, textStatus, b){
    console.log("always");
    console.log(a);
    console.log(textStatus);
    console.log(b);
})
```
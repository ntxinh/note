# Remove Line Breaks
```
function removeBreaks(str){

        var para = true;
        var nopara = false;
        var noBreaksText = str;

        noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm,"<1br />");

        re1 = /<1br \/><1br \/>/gi;
        re1a = /<1br \/><1br \/><1br \/>/gi;

        if(nopara == 1 || nopara ==  true){
            noBreaksText = noBreaksText.replace(re1," ");
        }else{
            noBreaksText = noBreaksText.replace(re1a,"<1br /><2br />");
            noBreaksText = noBreaksText.replace(re1,"<2br />");
        }

        re2 = /\<1br \/>/gi;
        noBreaksText = noBreaksText.replace(re2, " ");

        re3 = /\s+/g;
        noBreaksText = noBreaksText.replace(re3," ");

        re4 = /<2br \/>/gi;
        noBreaksText = noBreaksText.replace(re4,"\n\n");
        document.getElementById("demo").innerHTML = noBreaksText;
    }
```

# View a Javascript method's contents in Chrome console
```
Function.prototype.toString.call(removeBreaks);
or
console.log(removeBreaks.toString());
```

# REGEX: remove line break
preg_replace( "/\r|\n/", "", $yourString);

# Clone object
```
var a = {"a":"1"};
var b = JSON.parse(JSON.stringify(a));
```

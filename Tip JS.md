# Remove Line Breaks
```javascript
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
```javascript
Function.prototype.toString.call(removeBreaks);
// or
console.log(removeBreaks.toString());
```

# REGEX: remove line break
```javascript
preg_replace( "/\r|\n/", "", $yourString);
```

# Clone object
```javascript
var a = {"a":"1"};
var b = JSON.parse(JSON.stringify(a));
```

# Key Up to next input

```js
onKeyUpEnter(currentControl: any, nextControl) {
    switch (true) {
      case currentControl instanceof MatSelect:
        const matSelect = currentControl as MatSelect;
        if (!matSelect.panelOpen) {
          nextControl.focus();
        }
        break;
      case currentControl instanceof MatAutocomplete:
        const matAutocomplete = currentControl as MatAutocomplete;
        if (!matAutocomplete.isOpen) {
          nextControl.focus();
        }
        break;
      case currentControl instanceof MatDatepicker:
        const matDatepicker = currentControl as MatDatepicker<string>;
        if (!matDatepicker.opened) {
          nextControl.focus();
        }
        break;
      default:
        nextControl.focus();
        break;
    }
}
```

```html
<input #autoCompleteAccInput (keyup.enter)="globals.onKeyUpEnter(autoCompleteAccInput, autoCompleteInput)">
<input #autoCompleteInput (keyup.enter)="globals.onKeyUpEnter(auto, txtBidName)">
```

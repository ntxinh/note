# Build
ng build --bh /home/ -o ../home -w

# Create component
ng g c components/component-name

ng g c components/component-name -is --spec false

# Create service
ng g s services/service-name-folder/service-name

# Build
```bash
ng build --bh /home/ -o ../home --target=production --environment=prod
ng build --prod --env=prod
ng build --prod
```

```bash
ng build --target=development --environment=dev
ng build --dev --e=dev
ng build --dev
ng build
```

# eonasdan-bootstrap-datetimepicker
- angular-cli.json
```json
"styles": [
    "assets/jquery/bootstrap/dist/css/bootstrap.css",
    "../bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css",
],
"scripts": [
    "../bower_components/jquery/dist/jquery.js",
    "assets/jquery/bootstrap/dist/js/bootstrap.js",
    "../node_modules/moment/moment.js",
    "../bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js",
    "global.js"
],
```

- global.js
```javascript
(function (global) {
    global.util = {
        renderDateTimePicker: function (ids, format_code = 'DD/MM/YYYY') {
            for (let id of ids) {
                $('#' + id).datetimepicker({
                    format: format_code
                });
            }
        }
    };
})(window);
```

- service.ts
```typescript
declare let util: any;
declare let $: any;
declare let moment: any;
public renderDateTimePicker(ids: string[], format_code: string = 'DD/MM/YYYY'): void {
	util.renderDateTimePicker(ids, format_code);
}
```

- component.ts
```typescript
ngOnInit() {
    this.utilitiesService.renderDateTimePicker(["from_date", "to_date"]);
}
```

- component.html
```html
<div class="input-group date" id="from_date">
	<input type="text" class="form-control" name="from_date" #datePickerFrom [ngModel]="filter.from_date" (blur)="filter.from_date = datePickerFrom.value"/>
	<span class="input-group-addon">
		<span class="glyphicon glyphicon-calendar"></span>
	</span>
</div>
```

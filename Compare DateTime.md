# PHP: Carbon
```php
$currentApplyDate = \Carbon\Carbon::createFromFormat('Y-m-d H:i', substr($currentOilPrice->applyDate, 0, 16));
$input = \Carbon\Carbon::createFromFormat('d-m-Y H:i', $request->applyDate . " " . $request->applyTime);
// Nếu left >= right
if ($input->diffInMinutes($currentApplyDate, false) >= 0) {
    return response()->json(['Error' => 'Vui lòng chọn ngày áp dụng lớn hơn ngày áp dụng của giá dầu hiện tại!'], 500);
}
```

# JS: Moment
```javascript
var left = moment($("#applyDate").val() + ' ' + $("#applyTime").val(), "DD-MM-YYYY HH:mm");
var right = oilPriceView.getMaxDate();
// Nếu left <= right
if(left.isSameOrBefore(right)){
    showNotification("error", "Ngày áp dụng phải lớn hơn ngày áp dụng trước đó.");
    return;
}
```
```cs
private T GetDefaultValue<T>(object obj)
{
    if (obj == null || string.IsNullOrEmpty(obj.ToString()))
    {
        return default(T);
    }
    return (T)Convert.ChangeType(obj.ToString(), typeof(T));
}
GetDefaultValue<bool>(dr["ProtectMaterial"]),

var strObj = JsonConvert.SerializeObject(systemUserInfo);
var obj = JsonConvert.DeserializeObject<SystemUserInfo>(aaa.ToString());

foreach (dynamic item in data)
{
  fadas = item.SumOfHoursToComplete;
}

if (res != null && res.Data is var existed && existed != null)
{
    // do something
}

private IEnumerable<string> GetColumns()
{
    return typeof(T)
            .GetProperties()
            .Where(e => e.Name != "Id" && !e.PropertyType.GetTypeInfo().IsGenericType)
            .Select(e => e.Name);
}
```

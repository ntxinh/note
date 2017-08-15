```
OPEN PORT 1433 SQL SERVER

-----SQL Server Management Studio
1. Make sure checked "allow remote connection to this server"

-----SQL Server Configuration Manager
1. Check TCP/IP
netstat -ano | find /i "ProcessId"
no results from the command executed because TCP/IP protocol is disabled

2. Enable TCP/IP
SQL Server Configuration Manager -> SQL Server Network Configuration -> TCP/IP -> Properties -> IP Address -> IPAll:
-  TCP Dynamic Ports : Remove value
-  TCP Port : Enter the port 1433

3. Restart SQL Server


-------------------------
To open a port in the Windows firewall for TCP access (Windows 7)
On the Start menu, click Run, type WF.msc, and then click OK.
In Windows Firewall with Advanced Security, in the left pane, right-click Inbound Rules, and then click New Rule in the action pane.
In the Rule Type dialog box, select Port, and then click Next.
In the Protocol and Ports dialog box, select TCP. Select Specific local ports, and then type the port number of the instance of the Database Engine. Type 1433 for the default instance. Type 49172 if you are configuring a named instance and configured a fixed port in the previous task. Click Next.
In the Action dialog box, select Allow the connection, and then click Next.
In the Profile dialog box, select any profiles that describe the computer connection environment when you want to connect to the Database Engine, and then click Next.
In the Name dialog box, type a name and description for this rule, and then click Finish.

source: https://technet.microsoft.com/en-us/library/ms345343(v=sql.110).aspx

tcp:<computer_name or IP>,1433

If you dont success, please try to exit navicat and open it again

Good luck!!!
```
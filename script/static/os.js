//système
var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows")!= -1) OSName="Windows";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
console.log('os name    : ',OSName+OSName)




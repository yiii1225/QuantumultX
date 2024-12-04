/*

滴答

[rewrite]
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/yiii1225/QuantumultX/master/NobyDa/QuantumultX/File/ddd2.js

[mitm] 
hostname = dida365.com
*/

    let obj = JSON.parse($response.body);
    
    // 不能删
    obj.username = "jkjk";  

    obj.proEndDate = "5201-01-01T00:00:00.000+0000";  
  
    obj.pro = true;
  
  obj.teamPro = true;
  
    $done({
        body: JSON.stringify(obj)
    });

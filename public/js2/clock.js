function clockTimer(){
    const now =new Date();
    let hours= now.getHours();
    const meridium= hours >=12 ? "P.M" : "A.M";
    hours = hours %12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const fullTime= hours +":"+ minutes+ ":"+ seconds+ ":"+meridium;
    document.getElementById("clock").textContent=fullTime;
}
clockTimer();
setInterval(clockTimer,1000);
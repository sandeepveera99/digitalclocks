function digitalclock()
{
    var date=new Date();
    var hh=date.getHours();
    var ss=date.getSeconds();
    var dt=date.getDate();
    var mm=date.getMinutes();
    var yy=date.getFullYear();
    var mo=date.getMonth();
    var day=date.getDay();
    var am_pm="AM"
    if(hh>=12){
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0){
        mo="jan"
    }
    else if(mo==1){
        mo="feb"
    }
    else if(mo==2){
        mo="mar"
    }
    else if(mo==3){
        mo="april"
    }
    else if(mo==4){
        mo="may"
    }
    else if(mo==5){
        mo="june"
    }
    else if(mo==6){
        mo="july"
    }
    else if(mo==7){
        mo="august"
    }
    else if(mo==8){
        mo="sep"
    }
    else if(mo==9){
        mo="oct"
    }
    else if(mo==10){
        mo="nov"
    }
    else{
        mo="dec"
    }
    switch(day)
    {
        case 0:day="Sunday"
        document.body.style.backgroundImage="url(./)"
        break;

        case 1:day="Monday"
        document.body.style.backgroundImage="url(./)"
        break;


        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./)"
        break;

        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./)"
        break;


        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./)"
        break;

        case 5:day="Friday"
        document.body.style.backgroundImage="url(./)"
        break;


        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./)"
        break;
    }
    document.getElementById("date").innerHTML=`${dt}/${mo}/${yy}`;
    document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`;
    document.getElementById("day").innerHTML=day;
    document.getElementById("sec").innerHTML=ss;
    setTimeout(digitalclock,1000);

}
digitalclock()

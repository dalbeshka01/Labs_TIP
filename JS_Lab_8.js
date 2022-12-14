function seas()
{
    for(let i = 0; i < 10; i++)
    {
        localStorage.removeItem(JSON.stringify(i))
    }
    
    let d = document;
    let getform = d.getElementsByClassName("form");
    let getform1 = d.getElementsByClassName("form1");
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let s="Контракты окончены у сотрудников: \r\n"
    getform1[0].area.value = "";
    console.log(getform1)
    let chek = 0;
    for(let i = 0; i < getform.length; i++)
    {
       
        let dateStart = new Date(getform[i].date.value.split('.').reverse().toString())
        let time = +(getform[i].time.value) * 365;
        dateStart.setDate(dateStart.getDate() + time)

        console.log(dateStart);
        let month = Number(dateStart.getMonth.value);
        console.log(monthNames[dateStart.getMonth()]);

        if(monthNames[dateStart.getMonth()] == "March" || monthNames[dateStart.getMonth()] == "April" || 
            monthNames[dateStart.getMonth()] == "May" )
        {
           
            if(getform1[0].season.value == 1)
            {
                let s2 = getform[i].name.value;
                localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
                s+=s2 + "\r\n"; 
                getform1[0].area.value = s;
                chek++;
            }
        }

        if(monthNames[dateStart.getMonth()] == "June" || monthNames[dateStart.getMonth()] == "July" || 
            monthNames[dateStart.getMonth()] == "August" )
        {
           
            if(getform1[0].season.value == 2)
            {
                let s2 = getform[i].name.value;
                localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
                s+=s2 + "\r\n"; 
                getform1[0].area.value = s;
                chek++;
            }
        }

        if(monthNames[dateStart.getMonth()] == "September" || monthNames[dateStart.getMonth()] == "October" || 
            monthNames[dateStart.getMonth()] == "November" )
        {
           
            if(getform1[0].season.value == 3)
            {
                let s2 = getform[i].name.value;
                localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
                s+=s2 + "\r\n"; 
                getform1[0].area.value = s;
                chek++;
            }
        }

        if(monthNames[dateStart.getMonth()] == "December" || monthNames[dateStart.getMonth()] == "January" || 
            monthNames[dateStart.getMonth()] == "February" )
        {
           
            if(getform1[0].season.value == 4)
            {
                let s2 = getform[i].name.value;
                localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
                s+=s2 + "\r\n"; 
                getform1[0].area.value = s;
                chek++;
            }
        }
    }
    if(getform1[0].area.value == "")
    {
        getform1[0].area.value = "Таких сотрудников не существует!"
    }
}
function kvart()
{
    for(let i = 10; i < 20; i++)
    {
        localStorage.removeItem(JSON.stringify(i))
    }
   
    let d = document;
    let getform = d.getElementsByClassName("form");
    let getform1 = d.getElementsByClassName("form1");
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let s="Контракты окончены у сотрудников: \r\n"
    getform1[1].area.value = "";
    let chek = 10;
    for(let i = 0; i < getform.length; i++)
    {
        let dateStart = new Date(getform[i].date.value.split('.').reverse().toString())
        let time = +(getform[i].time.value) * 365;
        dateStart.setDate(dateStart.getDate() + time)

        if(monthNames[dateStart.getMonth()] == "January" || monthNames[dateStart.getMonth()] == "February" || 
            monthNames[dateStart.getMonth()] == "March" )
        {
           
            if(getform1[1].kvartal.value == 1)
            {
                let s2 = getform[i].name.value;
                localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
                s+=s2 + "\r\n"; 
                getform1[1].area.value = s;
                chek++;
            }
        }

        if(monthNames[dateStart.getMonth()] == "April" || monthNames[dateStart.getMonth()] == "May" || 
            monthNames[dateStart.getMonth()] == "June" )
        {
           
            if(getform1[1].kvartal.value == 2)
            {
                let s2 = getform[i].name.value;
                localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
                s+=s2 + "\r\n"; 
                getform1[1].area.value = s;
                chek++;
            }
        }

        if(monthNames[dateStart.getMonth()] == "July" || monthNames[dateStart.getMonth()] == "August" || 
            monthNames[dateStart.getMonth()] == "September" )
        {
           
            if(getform1[1].kvartal.value == 3)
            {
                let s2 = getform[i].name.value;
                localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
                s+=s2 + "\r\n"; 
                getform1[1].area.value = s;
                chek++;
            }
        }

        if(monthNames[dateStart.getMonth()] == "October" || monthNames[dateStart.getMonth()] == "November" || 
            monthNames[dateStart.getMonth()] == "December" )
        {
           
            if(getform1[1].kvartal.value == 4)
            {
                let s2 = getform[i].name.value;
                console.log(s2,chek);
                localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
                s+=s2 + "\r\n"; 
                getform1[1].area.value = s;
                chek++;
            }
        }
    }
    if(getform1[1].area.value == "")
    {
        getform1[1].area.value = "Таких сотрудников не существует!"
    }
}

function date()
{
    for(let i = 20; i < 30; i++)
    {
        localStorage.removeItem(JSON.stringify(i))
    }
    let d = document;
    let getform = d.getElementsByClassName("form");
    let getform1 = d.getElementsByClassName("form1");
    let s="Контракты заключены у сотрудников: \r\n"
    getform1[2].area.value = "";
    let chek = 20;
    let dateEnd = new Date(getform1[2].date12.value.split('.').reverse().toString())

    for(let i = 0; i < getform.length; i++)
    {
        let dateStart = new Date(getform[i].date.value.split('.').reverse().toString())
        let time = +(getform[i].time.value) * 365;
        dateStart.setDate(dateStart.getDate() + time)

       if(dateEnd < dateStart)
       {
        let s2 = getform[i].name.value;
        localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
        s+=s2 + "\r\n"; 
        getform1[2].area.value = s;
        chek++;
       }
    }
}

function date2()
{
    for(let i = 30; i < 40; i++)
    {
        localStorage.removeItem(JSON.stringify(i))
    }
    let d = document;
    let getform = d.getElementsByClassName("form");
    let getform1 = d.getElementsByClassName("form1");
    let s="Контракты окончены у сотрудников: \r\n"
    getform1[3].area.value = "";
    let chek = 30;
    let dateEnd = new Date(getform1[3].date12.value.split('.').reverse().toString())

    for(let i = 0; i < getform.length; i++)
    {
        let dateStart = new Date(getform[i].date.value.split('.').reverse().toString())
        let time = +(getform[i].time.value) * 365;
        dateStart.setDate(dateStart.getDate() + time)

       if(dateEnd > dateStart)
       {
        let s2 = getform[i].name.value;
        localStorage.setItem(JSON.stringify(chek), JSON.stringify(s2));
        s+=s2 + "\r\n"; 
        getform1[3].area.value = s;
        chek++;
       }
    }
}
    

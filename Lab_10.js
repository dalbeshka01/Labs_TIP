let d = document;
let getform = d.getElementsByClassName("form");

const itemsList = d.querySelector('.items-list')
let s="Контракты окончены у сотрудников: \r\n"
const pers1 = [];
const pers2 = [];
const pers3 = [];
const pers4 = [];


for(let i = 0; i < 10 ; i++)
{
    pers1.push(localStorage.getItem(JSON.stringify(i)))
}
for(let i = 0; i < pers1.length; i++)
{
    getform[0].area.value = pers1.join("\n");          
}


for(let i = 10; i < 20; i++)
{
    pers2.push(localStorage.getItem(JSON.stringify(i)))
}
for(let i = 0; i < pers2.length; i++)
{
    getform[1].area.value = pers2.join("\n");          
}


for(let i = 20; i < 30; i++)
{
    pers3.push(localStorage.getItem(JSON.stringify(i)))
}
for(let i = 0; i < pers3.length; i++)
{
    getform[2].area.value = pers3.join("\n");          
}


for(let i = 30; i < 40; i++)
{
    pers4.push(localStorage.getItem(JSON.stringify(i)))
}
for(let i = 0; i < pers4.length; i++)
{
    getform[3].area.value = pers4.join("\n");          
}



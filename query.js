var tmp = document.querySelector('html frameset')
tmp = tmp.querySelectorAll('frame')[0]
tmp = tmp.contentDocument.querySelector('html')

tmp = tmp.querySelector('body')
tmp = tmp.querySelectorAll('table')[15].querySelector('tbody')
for(var i=1;i<=13;i++) {
    var myquery = tmp.querySelectorAll('tr')[i];
    myquery = myquery.querySelectorAll('td')[1]
    myquery = myquery.querySelector('font')
    myquery = myquery.querySelector('input')
    myquery.checked = true
}
let url = 'https://61ee1f7ed593d20017dbac50.mockapi.io/students'

function createTable(data)
{   
    let tbody = document.getElementById('table-body')
    data.forEach(e => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${e.id}</td>
        <td>${e.firstname}</td>
        <td>${e.lastname}</td>
        <td>${e.email}</td>
        <td>${e.mobile}</td>
        <td>${e.batch}</td>
        <td>
            <button class="btn btn-primary"><a href="./HTML/View.html?id=${e.id}" class="edit">Edit</a></button>
            &nbsp;
            <button class="btn btn-danger" onclick="deleteData(${e.id})">Delete</button>
        </td>
        `
        tbody.append(tr)
    });
}
async function loadData()
{
    let res = await fetch(url);
    let data = await res.json()
    createTable(data)
}

async function deleteData(e)
{
    if(confirm("Are you Sure? You are deleting data")){
        let res = await fetch(`${url}/${e}`,{method:"DELETE"})
        let tbody = document.getElementById('table-body')
        window.location.reload()
    }
    // tbody.remove()
    // tbody = document.createElement('tbody')
    // tbody.setAttribute('id','table-body')
    // document.getElementById('table').appendChild(tbody)
    // loadData()
    
}


loadData()
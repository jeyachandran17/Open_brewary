var create_container = document.createElement('div');
create_container.setAttribute("class","container");

var row = document.createElement("div")
row.setAttribute("class","row")


create_container.append(row);
row.innerHTML+=`<h3 class="heading">${"Open Brewery"}</h3><hr>`;
document.body.append(create_container);
function brewery(){
    var data = fetch("https://api.openbrewerydb.org/breweries?per_page=3")
    .then((data)=>data.json())
        .then((data)=>{
                for(var i in data){
                    // console.log(data);   // 1. name and type || 2.brewery address || 3.website url || 4.phone_no
                    var name = data[i].name;
                    var type = data[i].brewery_type;
                    // var address = data[i].address; 
                    var street = data[i].street;
                    var city = data[i].city;
                    var state = data[i].state;
                    var postal_code = data[i].postal_code;
                    var country = data[i].country;
                    var website_url = data[i].website_url
                    var phone_no = data[i].phone;
                    // console.log(`${name} || ${type} || ${address} || ${street} || ${city}  || ${state} || ${postal_code} || ${country} || ${website_url} || ${phone_no}`)
                    row.innerHTML += ` <div class="col-lg-3, col-sm-1" id="card">
                        <label for="name" class="details">Name : ${name}</label><br>
                        <label for="type" class="details">Type : ${type}</label><br>
                        <label for="address" class="details">Address: \n<span>${street}</span>,\n <span>${city}</span>, \n<span>${state}</span>, \n<span>${postal_code}</span>, \n<span>${country}</span>.
                        </label><br>
                        <label for="web_url" class="details">Website URL :<a href="${website_url}"> ${website_url}</a> </label><br>
                        <label for="phone_no" class="details">Phone No : ${phone_no}</label><br>
                        </div> `;
                        document.body.append(create_container);
                }
})
}


async function Open_brewary() {
    try {
      let Open_brewary_api = await brewery();
    } catch (e) {
      console.error(e);
    }
  }
  
  Open_brewary();

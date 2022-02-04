const cityName=document.getElementById('cityname');
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp_rel_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;
   
   if(cityval==""){
    city_name.innerText=`Plz write the name before your search`;
    datahide.classList.add('data_hide');


   }else{
       try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=82d39f279294c772b890ca9bd8d305d8`;
    const response=await fetch(url);
    const data=await response.json();
    const arrData=[data];
    city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
    temp_real_val.innerText=arrData[0].main.temp;
    // temp_status.innerText=arrData[0].weather[0].main;
    const tempMood=innerText=arrData[0].weather[0].main;
    // console.log(arrData);
    if(tempMood=="Clear"){
        temp_status.innerHTML="<i class='fa fa-sun' 'style=color:#eccc68;'></>"; 
    }
    else if(tempMood=="Clouds"){
        temp_status.innerHTML="<i class='fa fa-cloud' style='color:aqua;'></>"; 
    }
    else if(tempMood=="Rain"){
        temp_status.innerHTML="<i class='fa fa-rain' style='color:#a4b0be;'></>"; 
    }
    else {
        temp_status.innerHTML="<i class='fa fa-sun' style='color:yellow;'</>"; 
    }
    datahide.classList.remove('data_hide');
    
   }catch{
    city_name.innerText=`Plz enter the city name properly`;
    datahide.classList.add('data_hide');
   }

}
}

submitbtn.addEventListener('click',getInfo);
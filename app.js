const form = document.querySelector('form')
form.addEventListener('submit',function(e){
e.preventDefault()
const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const result = document.querySelector('#results')
if(height === '' || height<0 || isNaN(height)){
result.innerHTML = `Please give a valid height ${height}`;
}
else if(weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML = `Please give a valid height ${weight}`;
}
else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    let c;
    if(bmi<18.6){
      c= "Under weight";
    }
    else if(18.6<=bmi && bmi<24.9){
       c="Normal Range";
    }
    else{
      c="overweight";
    }
    result.innerHTML = `<span>${bmi}</span> and you are ${c}`;
}
});
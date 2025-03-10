const form = document.querySelector('form')
//form submit in POST or GET type

form.addEventListener('submit', function(e){
    e.preventDefault() //stop default action

    //input values and convert the string value into int
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.results')
    const guide = document.querySelector('.guide')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please enter a valid height';
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight';
    }
    else{
        //calculation
        const bmi = (weight/ ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`


        if(bmi < 18.6){
            guide.innerHTML ='Under Weight';
        }
        else if(bmi > 24.9){
            guide.innerHTML ='Over Weight';
        }
        else{guide.innerHTML = 'Normal Weight';}
    }

   
    
});
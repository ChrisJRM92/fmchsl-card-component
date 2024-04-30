const pathJson = '../data.json'

fetch(pathJson)
    .then(response => response.json())
    .then(data => {
        console.log(data) 

        let score = 0;
        score = Math.floor((data[0].score + data[1].score + data[2].score + data[3].score)/4);
        console.log(score)

        document.getElementById('score__value').textContent = score;

        document.getElementById('data1__icon').src = data[0].icon;
        document.getElementById('data1_category').textContent = data[0].category;
        document.getElementById('data1__score').textContent = data[0].score;
        
        document.getElementById('data2__icon').src = data[1].icon;
        document.getElementById('data2_category').textContent = data[1].category;
        document.getElementById('data2__score').textContent = data[1].score;

        document.getElementById('data3__icon').src = data[2].icon;
        document.getElementById('data3_category').textContent = data[2].category;
        document.getElementById('data3__score').textContent = data[2].score;

        document.getElementById('data4__icon').src = data[3].icon;
        document.getElementById('data4_category').textContent = data[3].category;
        document.getElementById('data4__score').textContent = data[3].score;
    
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
});


document.querySelector('button').addEventListener('click', nasaData);

function nasaData() {

    const date = document.querySelector('input').value;

    const url = `https://api.nasa.gov/planetary/apod?api_key=hH6bn5RVC5JiImtuPzYYsV79R76m2qQU41oIqgyk&date=${date}`;

    console.log(date);

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.msg) {
            document.querySelector('img').classList.add('disable');
            document.querySelector('iframe').classList.add('disable');
            document.querySelector('h2').textContent = data.msg;
        } else if (date != '') {
            if(data.media_type === 'video') {
                document.querySelector('img').classList.add('disable');
                document.querySelector('iframe').classList.remove('disable');
                document.querySelector('iframe').src = data.url;
                document.querySelector('h2').textContent = data.explanation;

            } else if (data.media_type === 'image'){
                document.querySelector('iframe').classList.add('disable');
                document.querySelector('img').classList.remove('disable');    
                document.querySelector('img').src = data.hdurl;
                document.querySelector('h2').textContent = data.explanation;    
            } 
        }
        console.log(data);
    })
    .then(err => console.log(`error is ${err}`));
}


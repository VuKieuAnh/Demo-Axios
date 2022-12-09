function getJsonImage(key){
    return new Promise(function(resolve){
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${key}&api_key=jcPqP8n8pW2y3qOky7M17c0QXea0p6cF`)
        .then(function(json){
            resolve(json.data.data[0]);
        })
    })
}

//client side render
function getImage(){
    //lay du lieu
    let key = document.getElementById("key").value;
    //thay the tham so q trong api
    getJsonImage(key).then(result=>{
        console.log(result.images.downsized.url);
        //lay ra duong dan
        let imgSrc = result.images.downsized.url;
        //set lai src cho anh
        document.getElementById("result").setAttribute("src", imgSrc);
    })
}
// getImage();

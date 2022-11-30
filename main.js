function loadDoc(){
    let input = document.getElementById('input');
    let result = document.getElementById('score');

    if(input.value == ''){
        result.innerHTML = "Invalid input, please try again"
    } else {
        let xhr = new XMLHttpRequest();
        let url = "https://api.monkeylearn.com/v3/classifiers/cl_pi3C7JiL/classify/";
        
        // open a connection
        xhr.open("POST", url, true);
    
        // Set the request header i.e. which type of content you are sending
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Token a1029c81c2581c7d419f2224d4f971ccc2d15aeb")
    
        // Create a state change callback
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
        // Print received data from server
            let output = JSON.parse(this.responseText);
            output = output[0]["classifications"][0]["tag_name"]
            result.innerHTML = output;
            }
        };

        var data = JSON.stringify({ "data": [input.value]});
        xhr.send(data);
    }
}
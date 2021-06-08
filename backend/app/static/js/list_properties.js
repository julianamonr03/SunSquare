(function () {
    const btnApply=document.querySelectorAll('.btnApplyProperty');

    let idPropertySelected=null
    const csrf_token = document.querySelector("[name='csrf-token']").value;


    btnApply.forEach((btn)=> {
        btn.addEventListener('click', function() {
            idPropertySelected = this.id;
            confirmApply();
        })
    });

    const confirmApply=async()=>{
        await fetch('http://127.0.0.1:5000/applyProperty', {
            method:'POST',
            mode:'same-origin',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json',
                'X-CSRF-TOKEN':csrf_token // Token for purchase
            },
            body:JSON.stringify({
                'id': idPropertySelected
            })
        }).then(response=>{
            if (!responde.ok){
                console.error("Error");
            }
            return response.json()
        }).then(data=> {
            console.log("Applied to property!");
        }).catch(error=>{
            console.error("Error: ${error}");
        });
    };
})();

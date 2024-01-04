
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwtnKtU_KO7ef-KxpQJH0VlhHL-UosH4UzQFeq_NAmT4dUCbSyEyxOeaHROJR1KSsIP/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            console.log(response)
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            console.log(err)
            alert("Something Error")

        }
    })
})


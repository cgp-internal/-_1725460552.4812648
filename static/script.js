document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("convert_form");
    form.addEventListener("submit", submitForm);

    function submitForm(event) {
        event.preventDefault();
        const message = document.getElementById("message").value;
        const conversionType = document.querySelector('input[name="conversion_type"]:checked').value;
        fetch("/convert", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `message=${message}&conversion_type=${conversionType}`,
        })
            .then(response => response.text())
            .then(convertedMessage => {
                const resultElement = document.getElementById("result");
                resultElement.innerText = convertedMessage;
            })
            .catch(error => console.error("Error:", error));
    }
});
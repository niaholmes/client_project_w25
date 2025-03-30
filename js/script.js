document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Get form values
        let page = document.getElementById("page_id").value;
        let email = document.getElementById("email_id").value;
        let feedback = document.getElementById("your_feedback").value;

        // Send data to FormSubmit
        fetch("https://formsubmit.co/nialaila01@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                page: page,
                email: email,
                feedback: feedback
            })
        }).then(response => {
            if (response.ok) {
                alert("Thank you for your feedback!");
                document.getElementById("myForm").reset(); // Clears the form
            } else {
                alert("There was an error submitting your feedback.");
            }
        }).catch(error => console.error("Error:", error));
    });
});
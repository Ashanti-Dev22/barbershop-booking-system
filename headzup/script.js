document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thanks for booking! We'll contact you shortly.");
    this.reset();
});

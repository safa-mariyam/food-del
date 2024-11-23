// Handle donation form submission
document.getElementById('donationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const donorName = document.getElementById('donorName').value;
    const foodDetails = document.getElementById('foodDetails').value;
    const pickupAddress = document.getElementById('pickupAddress').value;
    const availableTime = document.getElementById('availableTime').value;

    alert(`Thank you, ${donorName}! Your donation of "${foodDetails}" will be picked up from "${pickupAddress}" at "${availableTime}".`);

    // Reset the form
    this.reset();
});

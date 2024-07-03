document.addEventListener("DOMContentLoaded", function () {
    const eventList = document.querySelector(".event-list");

    // Example data (replace with actual event data)
    const events = [
        { title: "Tech Conference 2024", date: "August 15, 2024", location: "New York City", image: "ev1.jpg", detailsPage: "event1.html" },
        { title: "Art Exhibition", date: "September 5, 2024", location: "London", image: "ev2.jpg", detailsPage: "event2.html" },
        { title: "Music Festival", date: "October 20-22, 2024", location: "Los Angeles", image: "ev3.jpg", detailsPage: "event3.html" }
    ];

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");

        // Create image element
        const image = document.createElement("img");
        image.src = event.image;
        image.alt = event.title;
        eventCard.appendChild(image);

        // Create event details
        const details = document.createElement("div");
        details.classList.add("event-details");

        details.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <a href="${event.detailsPage}" class="btn">View Details</a>
        `;

        eventCard.appendChild(details);
        eventList.appendChild(eventCard);
    });
});

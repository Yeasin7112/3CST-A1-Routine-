const schedule = {
    Monday: [
        { period: "2nd", time: "08:45 - 09:30", subject: "Graphics Design-II", teacher: "CMT-1", room: "LAB-3" },
        { period: "6th", time: "11:45 - 12:30", subject: "Digital Electronics", teacher: "ENT-2", room: "MP-L" }
    ],
    Tuesday: [
        { period: "1st", time: "08:00 - 08:45", subject: "Physics", teacher: "Mr. Ali", room: "LAB-1" }
    ],
    // Add other days here...
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let currentDayIndex = 0;

function updateSchedule() {
    const day = days[currentDayIndex];
    const dayTitle = document.getElementById("day-title");
    const routineBody = document.getElementById("routine-body");

    dayTitle.textContent = `Schedule For ${day}`;
    routineBody.innerHTML = "";

    schedule[day]?.forEach(item => {
        const row = `<tr>
            <td>${item.period}</td>
            <td>${item.subject}</td>
            <td>${item.teacher}</td>
            <td>${item.room}</td>
        </tr>`;
        routineBody.innerHTML += row;
    });
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentDayIndex = (currentDayIndex - 1 + days.length) % days.length;
    updateSchedule();
});

document.getElementById("today-btn").addEventListener("click", () => {
    const today = new Date().getDay() - 1; // JavaScript's `getDay()` returns 0 for Sunday
    currentDayIndex = today < 0 ? 0 : today;
    updateSchedule();
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentDayIndex = (currentDayIndex + 1) % days.length;
    updateSchedule();
});

// Initialize with Monday
updateSchedule();

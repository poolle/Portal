const events = {
    "2024-08-03": ["Degustación Gourmet - $15"],
    "2024-08-13": ["Concierto Jerardo Morán - Gratis"],
    "2024-08-28": ["Charla - Las 3 Casas - $20"],
    "2024-09-04": ["Feria del Libro - Gratis"],
    "2024-09-10": ["Exposición de Arte - $10"]
};

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const eventDetails = document.getElementById('event-details');

function updateCalendar() {
    calendarBody.innerHTML = "";
    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    const firstDay = new Date(currentYear, currentMonth).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    let date = 1;
    
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            
            if (i === 0 && j < firstDay) {
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.textContent = date;
                const eventDate = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
                
                if (events[eventDate]) {
                    cell.classList.add('event-day');
                    cell.addEventListener('click', () => showEvents(eventDate));
                }
                
                if (date === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
                    cell.classList.add('today');
                }
                
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }
}

function showEvents(eventDate) {
    eventDetails.innerHTML = "";
    if (events[eventDate]) {
        events[eventDate].forEach(event => {
            const listItem = document.createElement('li');
            listItem.textContent = event;
            eventDetails.appendChild(listItem);
        });
    }
}

prevMonthButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

updateCalendar();

// Función para ir directamente a un mes desde el mini calendario
function goToMonth(monthIndex) {
    currentMonth = monthIndex;
    updateCalendar();
}

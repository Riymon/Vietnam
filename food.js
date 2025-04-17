updateVietnamTime();

function updateVietnamTime() {
    const vietnamDateTime = new Date().toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const timeElement = document.getElementById("date-time");
    timeElement.innerHTML = `Vietnam Time: ${vietnamDateTime}`;
}
document.getElementById('set-times').addEventListener('click', function() {
    const wakeUpTime = document.getElementById('wake-up-time').value;
    const lunchTime = document.getElementById('lunch-time').value;
    const napTime = document.getElementById('nap-time').value;
    const nightTime = document.getElementById('night-time').value;

    document.getElementById('wake-up-output').innerText = `Wake Up Time: ${wakeUpTime || '---------------'}`;
    document.getElementById('lunch-output').innerText = `Lunch Time: ${lunchTime || '---------------'}`;
    document.getElementById('nap-output').innerText = `Nap Time: ${napTime || '---------------'}`;
    document.getElementById('night-output').innerText = `Night Time: ${nightTime || '---------------'}`;
});

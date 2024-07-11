function calculateNether() {
    const x = document.getElementById('overworld-x').value;
    const y = document.getElementById('overworld-y').value;
    const z = document.getElementById('overworld-z').value;

    if (x === '' || y === '' || z === '') {
        document.getElementById('nether-result').innerText = 'Please fill in all fields.';
        return;
    }

    const netherX = (x / 8).toFixed(2);
    const netherY = y;
    const netherZ = (z / 8).toFixed(2);

    document.getElementById('nether-result').innerText = `Nether Coordinates: X: ${netherX}, Y: ${netherY}, Z: ${netherZ}`;
}

function calculateOverworld() {
    const x = document.getElementById('nether-x').value;
    const y = document.getElementById('nether-y').value;
    const z = document.getElementById('nether-z').value;

    if (x === '' || y === '' || z === '') {
        document.getElementById('overworld-result').innerText = 'Please fill in all fields.';
        return;
    }

    const overworldX = (x * 8).toFixed(2);
    const overworldY = y;
    const overworldZ = (z * 8).toFixed(2);

    document.getElementById('overworld-result').innerText = `Overworld Coordinates: X: ${overworldX}, Y: ${overworldY}, Z: ${overworldZ}`;
}

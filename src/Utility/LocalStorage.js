const getStoredDonateIds = () => {
    const storedDonateIds = localStorage.getItem('donations');

    if (storedDonateIds) {
        return JSON.parse(storedDonateIds);
    }
    return [];
}

const saveDonateId = id => {
    const storedDonateIds = getStoredDonateIds();

    const isExist = storedDonateIds.find(jobId => jobId === id);

    if (!isExist) {
        storedDonateIds.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonateIds))
        alert('Added!')
    } else {
        alert('Already added!')
    }
}

export { getStoredDonateIds, saveDonateId };
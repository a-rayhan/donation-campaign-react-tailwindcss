import swal from 'sweetalert';

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
        swal("Thank you!", "Your donation added successfully", "success");
    } else {
        swal("Oops!", "You already donated in this category! Please see your donation page. Thanks again for your donation!", "warning");
    }
}

export { getStoredDonateIds, saveDonateId };
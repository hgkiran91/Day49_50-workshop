window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";

            return;A
        }
        try {
            (new AddressBookData()).name = name.value;
            textError.textContent = "";
        } catch (e) {

            textError.textContent = e;
        }
    });
    const phoneNumber = document.querySelector('#phoneNumber');
    const PhoneNumberError = document.querySelector('.phone-error');
    phoneNumber.addEventListener('input', function() {
        if (phoneNumber.value.length == 0) {
            PhoneNumberError.textContent = "";

            return;
        }
        try {
            (new AddressBookData()).phoneNumber = phoneNumber.value;
            PhoneNumberError.textContent = "";
        } catch (e) {

            PhoneNumberError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function() {
        if (address.value.length == 0) {
            addressError.textContent = "";

            return;
        }
        try {
            (new AddressBookData()).address = address.value;
            addressError.textContent = "";
        } catch (e) {

            addressError.textContent = e;
        }
    });

    const zipCode = document.querySelector('#zipCode');
    const zipError = document.querySelector('.zip-error');
    zipCode.addEventListener('input', function() {
        if (zipCode.value.length == 0) {
            zipError.textContent = "";

            return;
        }
        try {
            (new AddressBookData()).zipCode = zipCode.value;
            zipError.textContent = "";
            if (zipCode.value && phoneNumber.value && name.value) {

            }
        } catch (e) {

            zipError.textContent = e;
        }
    });
});
const save = (event) => {
    try {
        let addressBookData = createAddressBookData();
        createAndUpdateStorage(addressBookData);
    } catch (error) {
        alert(error);
    }
}

function createAddressBookData() {
    let addressBookData = new AddressBookData();
    try {
        addressBookData.name = getInputValueById('#name');
        addressBookData.id = Math.floor(Math.random() * 100);
        addressBookData.phoneNumber = getInputValueById("#phoneNumber");
        addressBookData.address = getInputValueById('#address');
        addressBookData.state = getInputValueById("#state");
        addressBookData.city = getInputValueById("#city");
        addressBookData.zip = getInputValueById("#zipCode");
    } catch (error) {
        console.log(error);
    }
    alert(addressBookData);
    return addressBookData;
}

const createAndUpdateStorage = (addressBookData) => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if (contactList != undefined) {
        contactList.push(addressBookData);
    } else {
        contactList = [addressBookData];
    }
    alert("Contact Added Sucessfully");
    console.log(contactList);
    localStorage.setItem("ContactList", JSON.stringify(contactList));
}
const resetForm = () => {
    setValue("#name", "");
    setValue("#phoneNumber", "");
    setValue("#address", "");
    setSelectedIndex('#sity', 0);
    setSelectedIndex('#state', 0);
    setValue("#zipCode", "");
    setTextValue(".name-error", "");
    setTextValue(".tel-error", "");
    setTextValue(".address-error", "");
    setTextValue(".zip-error", "");
};

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
};

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;
};

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
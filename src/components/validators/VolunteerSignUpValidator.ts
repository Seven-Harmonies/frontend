const VolunteerSignUpValidator = async (username: string, email: string, phoneNumber: string, password: string, first_name: string, last_name: string, photos: string) => {
    try {
        //Validare campuri goale
        if (!username || !email || !phoneNumber || !password || !first_name || !photos || !last_name) {
            throw new Error('Toate câmpurile trebuie completate.');
        }

        //Validare format adresa de email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error('Adresa de email nu este validă.');
        }

        //Validare lungime parola
        if (password.length < 8) {
            throw new Error('Parola nu este validă.Trebuie sa contina cel putin 8 caractere.');
        }

        //Validare format parola: cel puțin o literă mică, o literă mare și o cifra
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordRegex.test(password)) {
            throw new Error('Parola nu este nu este validă.Trebuie sa contina cel putin o litera mica, una mare si o cifra.');
        }

        //Validare numar de telefon
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error('Numarul de telefon nu este valid.Trebuie sa contina 10 cifre.');
        }

        //Validator pentru first_name si last_name
        const nameRegex = /^[a-zA-Z\s-]+$/;
        if (!nameRegex.test(first_name) || !nameRegex.test(last_name)) {
            throw new Error('Numele trebuie sa contina doar litere!');
        }

        //Validator pentru photos
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        if (!urlRegex.test(photos)) {
            throw new Error('Photos has to be an URL.');
        }

        return true;
    }
    catch (error) {
        return error.message;
    }
};



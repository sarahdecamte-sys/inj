
/* ==========================================
   GEBRUIKERSGEGEVENS - JMG
========================================== */

export const usersDB = {
  "07893516": {
    id: 1,
    code: "07893516",
    password: "260823",

    name: "SABINA LAEVENS",
    email: "sabina@gmail.com",
    phone: "+31 000 000 000",

    currency: "EUR",

    sampleBalance: 12500000,
    sampleRequest: 50000,

    accountNumber: "4821 7392 6158",
    iban: "NL91INGB0001234567",
    bic: "INGBNL2A",

    accountStatus: "blocked",
    blockedReason: "Uw rekening is momenteel geblokkeerd wegens het niet voldoen van de vereiste kosten voor de heractivering ervan.",
    blockedAmount: 50000,

    version: 1
  }
};

/* ==========================================
   GEBRUIKERSAUTHENTICATIE
========================================== */

export function loginUser(code, password) {
  const user = usersDB[code];

  if (!user || user.password !== password) {
    return {
      success: false,
      message: "Onjuist gebruikersnummer of wachtwoord."
    };
  }

  const { password: _password, ...safeUser } = user;

  return {
    success: true,
    user: safeUser,
    message: "Aanmelding geslaagd."
  };
}

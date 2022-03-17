import crypto from "crypto";

class CryptoAPI {
  getHashedPassword(password) {
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(
        password,
        "salt",
        10000,
        32,
        "sha256",
        (err, derivedKey) => {
          if (err) {
            reject(err);
          }
          resolve(derivedKey.toString("hex"));
        }
      );
    });
  }
}

export default new CryptoAPI();

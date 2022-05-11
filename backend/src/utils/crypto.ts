import crypto from 'crypto';

class cryptoAPI {
	getHashedPassword(password): Promise<string> {
		return new Promise((resolve, reject) => {
			crypto.pbkdf2(
				password,
				'salt',
				10000,
				32,
				'sha256',
				(err, derivedKey) => {
					if (err) {
						reject(err);
					}
					resolve(derivedKey.toString('hex'));
				},
			);
		});
	}
}

export default new cryptoAPI();

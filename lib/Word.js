class Word {
	constructor () {
		this.letters = []
	}

	add (letters) {
		let remainder

		if (letters.includes(' ')) {
			const parts = letters.split(/ (.+)/)
			letters = parts[0]
			remainder = parts[1]
		}

		this.letters = [...this.letters, ...letters || letters]

		return remainder
	}
}

module.exports = Word

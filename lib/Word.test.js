import test from 'ava'
import Word from './Word'

test('is function', t => {
	t.is(typeof Word, 'function')
})

test('has empty letters array', t => {
	const word = new Word()
	t.true(Array.isArray(word.letters))
	t.is(word.letters.length, 0)
})

test('add to letters array', t => {
	const word = new Word()
	const letter = 'A'
	word.add(letter)
	t.is(word.letters.length, 1)
	t.is(word.letters[0], 'A')
})

test('can add multiple letters', t => {
	const word = new Word()
	word.add('AZ')
	t.is(word.letters.length, 2)
	t.is(word.letters[1], 'Z')
})

test('will return letters after first space', t => {
	const word = new Word()
	const remainder = word.add('One Two Three')
	t.is(word.letters.length, 3)
	t.deepEqual(word.letters, ['O', 'n', 'e'])
	t.is(remainder, 'Two Three')
})

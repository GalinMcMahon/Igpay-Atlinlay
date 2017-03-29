## Specifications

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

The program treats "y" as a consonant for words beginning with "y", and adds "ay".
Example Input: yes
Example Output: esyay

In words that begin with a single consonant, the program moves the consonant to the end, and adds "ay".
Example Input: ball
Example Output: allbay

In words that begin with more than one consonant, the program moves all consonants to the end, and adds "ay".
Example Input: block
Example Output: ockblay

In words where the first letters are "qu", move the "u" along with the "q", and adds "ay".
Example Input: queen
Example Output: eenquay

In words where "qu" follows the first letter, move "qu" along with the letter, and adds "ay".
Example Input: squeal
Example Output: ealsquay

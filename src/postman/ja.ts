import faker from 'faker'

const KANA =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨワヲン'

function generateRandomKana(): string {
  return Array.from(Array(5))
    .map(() => {
      return KANA[Math.floor(Math.random() * KANA.length)]
    })
    .join('')
}

faker.locale = 'ja'

pm.environment.set('fakerLastName', faker.name.lastName())
pm.environment.set('fakerLastNameKanaLike', generateRandomKana())
pm.environment.set('fakerFirstName', faker.name.firstName())
pm.environment.set('fakerFirstNameKanaLike', generateRandomKana())

import faker from 'faker'
import geoloniaData from '../../data/geolonia/random-300.json'

const KANA =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨワヲン'

function generateRandomInt(size: number): number {
  return Math.floor(Math.random() * size)
}

function generateRandomKana(size: number = 5): string {
  return Array.from(Array(size))
    .map(() => {
      return KANA[generateRandomInt(KANA.length)]
    })
    .join('')
}

function generateZipCodeLike(hyphen: boolean): string {
  const prefix = `000${String(generateRandomInt(3))}`.slice(-3)
  const suffix = `0000${String(generateRandomInt(3))}`.slice(-4)

  if (hyphen) {
    return `${prefix}-${suffix}`
  }
  return `${prefix}${suffix}`
}

function getRandomOneGeoloniaData(): {
  大字町丁目コード: string
  大字町丁目名: string
  市区町村コード: string
  市区町村名: string
  市区町村名カナ: string
  市区町村名ローマ字: string
  経度: string
  緯度: string
  都道府県コード: string
  都道府県名: string
  都道府県名カナ: string
  都道府県名ローマ字: string
} {
  return geoloniaData[generateRandomInt(geoloniaData.length)]
}

faker.locale = 'ja'
const getEnvironmentName = (suffix: string, prefix: string = p): string =>
  `${prefix}${suffix}`

pm.environment.set(
  getEnvironmentName('FakeCompanyName'),
  faker.company.companyName()
)
pm.environment.set(
  getEnvironmentName('FakeCompanyNameKanaLike'),
  generateRandomKana(10)
)

pm.environment.set(getEnvironmentName('FakeLastName'), faker.name.lastName())
pm.environment.set(
  getEnvironmentName('FakeLastNameKanaLike'),
  generateRandomKana()
)
pm.environment.set(getEnvironmentName('FakeFirstName'), faker.name.firstName())
pm.environment.set(
  getEnvironmentName('FakeFirstNameKanaLike'),
  generateRandomKana()
)
pm.environment.set(
  getEnvironmentName('FakeZipCodeLike'),
  generateZipCodeLike(false)
)
pm.environment.set(
  getEnvironmentName('FakeZipCodeLikeWithHyphen'),
  generateZipCodeLike(true)
)

const randomOneGeoloniaData = getRandomOneGeoloniaData()
pm.environment.set(
  getEnvironmentName('FakePrefectureCode'),
  randomOneGeoloniaData['都道府県コード']
)
pm.environment.set(
  getEnvironmentName('FakePrefectureName'),
  randomOneGeoloniaData['都道府県名']
)
pm.environment.set(
  getEnvironmentName('FakePrefectureNameKana'),
  randomOneGeoloniaData['都道府県名カナ']
)
pm.environment.set(
  getEnvironmentName('FakePrefectureNameRomaji'),
  randomOneGeoloniaData['都道府県名ローマ字']
)
pm.environment.set(
  getEnvironmentName('FakeCityCode'),
  randomOneGeoloniaData['市区町村コード']
)
pm.environment.set(
  getEnvironmentName('FakeCityName'),
  randomOneGeoloniaData['市区町村名']
)
pm.environment.set(
  getEnvironmentName('FakeCityNameKana'),
  randomOneGeoloniaData['市区町村名カナ']
)
pm.environment.set(
  getEnvironmentName('FakeCityNameRomaji'),
  randomOneGeoloniaData['市区町村名ローマ字']
)
pm.environment.set(
  getEnvironmentName('FakeStreetName'),
  randomOneGeoloniaData['大字町丁目名']
)
pm.environment.set(
  getEnvironmentName('FakeStreetCode'),
  randomOneGeoloniaData['大字町丁目コード']
)
pm.environment.set(
  getEnvironmentName('FakeLongitude'),
  randomOneGeoloniaData['緯度']
)
pm.environment.set(
  getEnvironmentName('FakeLatitude'),
  randomOneGeoloniaData['経度']
)

# Postman Faker

## How to use this

You just put the below code which does initialize environment variables, to the Pre-req editor.

```js
pm.sendRequest(
  'https://postman-faker.vercel.app/postman/ja.js',
  (err, res) => {
    /**
     * `foo` is a prefix to each variable name
     */
    eval(`(p) => { return ${res.text()} }`)('foo')
  }
)
```

## Example variables

```json
{
  "fooFakeCityCode": "09201",
  "fooFakeCityName": "宇都宮市",
  "fooFakeCityNameKana": "ウツノミヤシ",
  "fooFakeCityNameRomaji": "UTSUNOMIYA SHI",
  "fooFakeFirstName": "美羽",
  "fooFakeFirstNameKanaLike": "サヤワメハ",
  "fooFakeLastName": "小林",
  "fooFakeLastNameKanaLike": "トンメウム",
  "fooFakeLatitude": "139.911138",
  "fooFakeLongitude": "36.604879",
  "fooFakePrefectureCode": "09",
  "fooFakePrefectureName": "栃木県",
  "fooFakePrefectureNameKana": "トチギケン",
  "fooFakePrefectureNameRomaji": "TOCHIGI KEN",
  "fooFakeStreetCode": "092010060000",
  "fooFakeStreetName": "川俣町",
  "fooFakeZipCodeLike": "0000000",
  "fooFakeZipCodeLikeWithHyphen": "000-0002"
}
```

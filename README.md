# binary-eye-receiver-sample

## 1. Publish worker

Run:

```
npx wrangler publish ./src/index.ts
```

Output example:

```
 ⛅️ wrangler 2.6.2
-------------------
Total Upload: 35.54 KiB / gzip: 8.51 KiB
Uploaded binary-eye-receiver-sample (1.36 sec)
Published binary-eye-receiver-sample (4.05 sec)
  https://YOUR_APP_ID.YOUR_ID.workers.dev
```

## 2. Configure Binary Eye

Download and install [Binary Eye](https://play.google.com/store/apps/details?id=de.markusfisch.android.binaryeye).

- Enable forward scans on "Enable to forward scans to a the given URL. / スキャンしたデータを転送".
- Set request type as you like.
- Set `https://YOUR_APP_ID.YOUR_ID.workers.dev/` to "URL to forward to / スキャンしたデータを次のURLから開く".
  - if you use "GET and simply add content / GET でコンテンツを付加", set `https://YOUR_APP_ID.YOUR_ID.workers.dev/?content=`

## 3. Scan barcode

It will show A toast "GET/POST content: BARCODE_DATA", after you scan a barcode.

# 東武東上線 歴史データ

## データ形式

`tojo_line_history.csv` はタイムライン表示用のイベント形式です。

| カラム | 説明 |
|--------|------|
| event_type | `open`(開業), `close`(廃止), `rename`(駅名変更) |
| date | 日付 (YYYY-MM-DD) |
| station_name | イベント後の駅名（廃止の場合は廃止された駅名） |
| previous_name | 駅名変更時の旧名 |
| lat | 緯度 |
| lon | 経度 |
| memo | 備考 |

## データ取得元

**一元的なCSV/オープンデータは存在しません。** 以下のソースから手動で収集・統合しています。

### 利用可能なデータソース

| ソース | 緯度経度 | 開業/廃止日 | 駅名変更 | 備考 |
|--------|----------|-------------|----------|------|
| [国土数値情報 N05 鉄道時系列](https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N05-v1_3.html) | ○ | ○ | △ | 1950〜2020年、全国旅客鉄道。非商用のみ |
| [train.teraren.com API](https://train.teraren.com/lines/21001/stations) | ○ | △ | × | 現役駅の座標。一部で open_ymd あり |
| [駅データ.jp](https://ekidata.jp/) | ○ | × | × | 無料版は開業日なし。有料で詳細取得可 |
| [国土地理協会 沿線・駅DB](https://www.kokudo.or.jp/database/004.html) | ○ | △ | △ | 新設・廃止・改称を継続収集（有料） |

### 主な参照サイト（手動収集）

- **[to-jo.info 東武東上線の歴史](https://to-jo.info/about/hist.htm)** - 路線全体の年表
- **[東上沿線物語](https://www.tojoshinbun.com/tojorekishi/)** - 新駅・消えた駅の記述
- **Wikipedia** - 各駅の開業日・廃止日
- **[rail.blue](https://rail.blue/)** - 廃止駅の座標（金井窪駅など）
- **[レール・ブルー](https://rail.blue/railroad/logis/stationinfo.aspx)** - 廃止駅情報

## 注意事項

- 駅の緯度経度は現在の駅位置。廃止駅（金井窪）は文献から取得
- 「坂戸町→坂戸」など一部の改称時期は文献により特定できず、未収録の可能性あり
- 越生線・根古屋線（貨物・廃止）は本CSVの対象外

## タイムライン表示の想定

- `event_type=open` → 地図にマーカーを追加
- `event_type=close` → マーカーを非表示/消滅アニメーション
- `event_type=rename` → 同一位置のマーカーラベルを更新

日付でソートし、スライダーで年を進めると「ポンポン変わっていく」アニメーションが実現できます。

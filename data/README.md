# 路線歴史データ

本プロジェクトでは東武東上線、秩父鉄道秩父本線、東武スカイツリーライン、JR武蔵野線、西武池袋線、西武秩父線の6路線の駅履歴を扱います。

## データ形式

### 東武東上線

`tojo_line_history.csv` はタイムライン表示用のイベント形式です（参考用。実際の表示は `src/data/stationHistory.ts` を使用）。

| カラム | 説明 |
|--------|------|
| event_type | `open`(開業), `close`(廃止), `rename`(駅名変更) |
| date | 日付 (YYYY-MM-DD) |
| station_name | イベント後の駅名（廃止の場合は廃止された駅名） |
| previous_name | 駅名変更時の旧名 |
| lat | 緯度 |
| lon | 経度 |
| memo | 備考 |

### 秩父鉄道秩父本線

`src/data/chichibuStationHistory.ts` に羽生～三峰口間の駅履歴を定義しています。形式は東武東上線と同様（open/close/rename、日付・駅名・緯度経度・並び順）。

**主な沿革：** 1901年 熊谷～寄居開業（上武鉄道）→ 1916年 秩父鉄道に社名変更 → 1922年 北武鉄道合併で羽生～熊谷編入 → 1930年 全線開通

### 東武スカイツリーライン（東武伊勢崎線 浅草～東武動物公園）

`src/data/skytreeStationHistory.ts` に浅草～東武動物公園間の駅履歴を定義しています。

**主な沿革：** 1899年 北千住～久喜開業（東武鉄道創業）→ 1902年 吾妻橋（現・とうきょうスカイツリー）～北千住延伸 → 1931年 浅草雷門（現・浅草）開業 → 2003年 押上駅開業（半蔵門線直通）→ 2012年 業平橋→とうきょうスカイツリー改称

### JR武蔵野線（府中本町～西船橋）

`src/data/musashinoStationHistory.ts` に府中本町～西船橋間の駅履歴を定義しています。

**主な沿革：** 1973年 府中本町～新松戸開業 → 1978年 新松戸～西船橋延伸 → 1985年 新三郷・武蔵浦和開業 → 1998年 東松戸開業 → 2008年 越谷レイクタウン開業 → 2012年 吉川美南開業

### 西武池袋線（池袋～吾野）

`src/data/seibuIkebukuroStationHistory.ts` に池袋～吾野間の駅履歴を定義しています。

**主な沿革：** 1915年 武蔵野鉄道 池袋～飯能開業 → 1929年 飯能～吾野延伸 → 小手指(1915)→西所沢(1915改称)、小手指ヶ原信号所→小手指駅(1970) → 豊岡町→入間市(1967) → 1994年 練馬高野台開業

### 西武秩父線（吾野～西武秩父）

`src/data/seibuChichibuStationHistory.ts` に吾野～西武秩父間の駅履歴を定義しています。

**主な沿革：** 1969年 全線開業（吾野～西武秩父、正丸峠経由）。東横瀬駅（貨物駅）は1996年廃止、旅客営業は対象外

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

**東武東上線**
- **[to-jo.info 東武東上線の歴史](https://to-jo.info/about/hist.htm)** - 路線全体の年表
- **[東上沿線物語](https://www.tojoshinbun.com/tojorekishi/)** - 新駅・消えた駅の記述
- **Wikipedia** - 各駅の開業日・廃止日
- **[rail.blue](https://rail.blue/)** - 廃止駅の座標（金井窪駅など）

**秩父鉄道**
- **[train.teraren.com 秩父鉄道秩父本線](https://train.teraren.com/lines/99306/stations)** - 各駅の緯度経度（Google Maps連携）
- **[秩父鉄道公式 沿革・歴史](https://www.chichibu-railway.co.jp/chichibu-railway-history.html)** - 路線単位の開業・廃止
- **[Wikipedia 秩父鉄道秩父本線](https://ja.wikipedia.org/wiki/%E7%A7%A9%E7%88%B6%E9%89%84%E9%81%93%E7%A7%A9%E7%88%B6%E6%9C%AC%E7%B7%9A)** - 駅一覧・沿革

**東武スカイツリーライン（東武伊勢崎線）**
- **[Wikipedia 東武伊勢崎線](https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%AD%A6%E4%BC%8A%E5%8B%A2%E5%B4%8E%E7%B7%9A)** - 駅一覧・沿革・開業・改称の詳細
- **[mapion 東武伊勢崎線](https://www.mapion.co.jp/station/ROP119001/)** - 各駅の緯度経度

**JR武蔵野線**
- **[Wikipedia 武蔵野線](https://ja.wikipedia.org/wiki/%E6%AD%A6%E8%94%B5%E9%87%8E%E7%B7%9A)** - 駅一覧・沿革
- **[train.teraren.com JR武蔵野線](https://train.teraren.com/lines/11305/stations)** - 各駅の緯度経度（Google Maps連携）

**西武池袋線**
- **[Wikipedia 西武池袋線](https://ja.wikipedia.org/wiki/%E8%A5%BF%E6%AD%A6%E6%B1%A0%E8%A2%8B%E7%B7%9A)** - 駅一覧・沿革
- **[train.teraren.com 西武池袋線](https://train.teraren.com/lines/21001/stations)** - 各駅の緯度経度（Google Maps連携）
- **[rosenzu.net](https://rosenzu.net)** - 駅位置の補足確認

**西武秩父線**
- **[Wikipedia 西武秩父線](https://ja.wikipedia.org/wiki/%E8%A5%BF%E6%AD%A6%E7%A7%A9%E7%88%B6%E7%B7%9A)** - 駅一覧・沿革
- **[rosenzu.net 西武秩父線](https://www.rosenzu.net/%E9%96%A2%E6%9D%B1/%E8%A5%BF%E6%AD%A6%E7%A7%A9%E7%88%B6%E7%B7%9A%EF%BC%88%E9%A3%AF%E8%83%BD%E3%80%9C%E5%BE%A1%E8%8A%B1%E7%95%91%EF%BC%89)** - 各駅の緯度経度

## 注意事項

**東武東上線**
- 駅の緯度経度は現在の駅位置（rosenzu.net等）。廃止駅（金井窪）は文献から取得
- 「坂戸町→坂戸」など一部の改称時期は文献により特定できず、未収録の可能性あり
- 越生線・根古屋線（貨物・廃止）は対象外

**秩父鉄道**
- 緯度経度は [train.teraren.com](https://train.teraren.com/lines/99306/stations) の各駅ページから取得
- 貨物駅（広瀬川原、武州原谷）、廃止区間（武甲線・荒川駅等）は未収録

**JR武蔵野線**
- 緯度経度は [train.teraren.com](https://train.teraren.com/lines/11305/stations)（Google Maps連携）から取得。rosenzu.net の東松戸駅座標は誤りがあるため非採用
- 旅客営業区間（府中本町～西船橋）のみ。貨物線・南武線支線等は対象外

**西武池袋線**
- 緯度経度は train.teraren.com / rosenzu.net を参照。旅客営業区間（池袋～吾野）のみ
- 西所沢は1915年開業の小手指を改称。現・小手指駅は1970年に小手指ヶ原信号所を駅化

**西武秩父線**
- 緯度経度は rosenzu.net を参照。旅客営業区間（吾野～西武秩父）のみ
- 東横瀬駅（貨物駅、1996年廃止）は対象外

## タイムライン表示の想定

- `event_type=open` → 地図にマーカーを追加
- `event_type=close` → マーカーを非表示/消滅アニメーション
- `event_type=rename` → 同一位置のマーカーラベルを更新

日付でソートし、スライダーで年を進めると「ポンポン変わっていく」アニメーションが実現できます。

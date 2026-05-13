/**
 * 駅ポップアップ用の外部リンク（Wikipedia・事業者公式）
 * 西武は https://www.seiburailway.jp/railway/station/{slug}/ のスラッグを駅名で引く。
 * 他社は公式の駅別URL規則が路線ごとに異なるため、未整備時は null（Wikipediaのみ表示）。
 */

import type { RouteId } from './routes';

const SEIBU_STATION_SLUGS: Record<string, string> = {
  池袋: 'ikebukuro',
  東長崎: 'higashi-nagasaki',
  練馬: 'nerima',
  石神井: 'shakujii',
  石神井公園: 'shakujii-koen',
  保谷: 'hoya',
  東久留米: 'higashi-kurume',
  所沢: 'tokorozawa',
  小手指: 'kotesashi',
  西所沢: 'nishi-tokorozawa',
  元狭山: 'sayamagaoka',
  三ヶ島村: 'sayamagaoka',
  狭山ヶ丘: 'sayamagaoka',
  豊岡町: 'irumashi',
  入間市: 'irumashi',
  仏子: 'bushi',
  飯能: 'hanno',
  秋津: 'akitsu',
  江古田: 'ekoda',
  椎名町: 'shinanomachi',
  中村橋: 'nakamurabashi',
  田無町: 'hibarigaoka',
  ひばりヶ丘: 'hibarigaoka',
  清瀬: 'kiyose',
  東大泉: 'oizumi-gakuen',
  大泉学園: 'oizumi-gakuen',
  貫井: 'fujimidai',
  富士見台: 'fujimidai',
  武蔵藤沢: 'musashi-fujisawa',
  元加治: 'motokaji',
  稲荷山公園: 'inariyama-koen',
  桜台: 'sakuradai',
  東飯能: 'higashi-hanno',
  虎秀: 'higashiagano',
  東吾野: 'higashiagano',
  吾野: 'agano',
  武蔵横手: 'musashi-yokote',
  高麗: 'koma',
  練馬高野台: 'nerima-takanodai',
  西吾野: 'nishi-agano',
  正丸: 'shomaru',
  芦ヶ久保: 'ashigakubo',
  横瀬: 'yokoze',
  西武秩父: 'seibu-chichibu',
  入曽: 'iriso',
  川越: 'kawagoe',
  本川越: 'honkawagoe',
  東村山: 'higashi-murayama',
  入間川: 'sayamashi',
  高田馬場: 'takadanobaba',
  下落合: 'shimo-ochiai',
  中井: 'nakai',
  新井薬師前: 'arai-yakushimae',
  沼袋: 'numabukuro',
  野方: 'nogata',
  都立家政: 'toritsu-kasei',
  鷺ノ宮: 'saginomiya',
  下井草: 'shimo-igusa',
  井荻: 'igusa',
  上井草: 'kami-igusa',
  上石神井: 'kamishakujii',
  武蔵関: 'musashi-seki',
  上保谷: 'higashi-fushimi',
  東伏見: 'higashi-fushimi',
  西武柳沢: 'seibu-yanagisawa',
  田無: 'tanashi',
  花小金井: 'hanako-koganei',
  小平: 'kodaira',
  久米川: 'kumegawa',
  南大塚: 'minami-otsuka',
  新所沢: 'shin-tokorozawa',
  西武新宿: 'seibu-shinjuku',
  狭山市: 'sayamashi',
  新狭山: 'shin-sayama',
  航空公園: 'koku-koen',
  国分寺: 'kokubunji',
  小川: 'ogawa',
  鷹の台: 'takanodai',
  恋ヶ窪: 'koigakubo',
  下山口: 'shimo-yamaguchi',
  村山公園: 'seibukyujo-mae',
  村山貯水池際: 'seibukyujo-mae',
  村山: 'seibukyujo-mae',
  狭山湖: 'seibukyujo-mae',
  西武球場前: 'seibukyujo-mae',
};

/** 日本語 Wikipedia（記事名は「{駅名}駅」） */
export function wikipediaJaStationUrl(stationName: string): string {
  return `https://ja.wikipedia.org/wiki/${encodeURIComponent(`${stationName}駅`)}`;
}

function seibuOfficialStationUrl(stationName: string): string | null {
  const slug = SEIBU_STATION_SLUGS[stationName];
  if (!slug) return null;
  return `https://www.seiburailway.jp/railway/station/${slug}/`;
}

export type StationExternalLinks = {
  wikipediaUrl: string;
  officialUrl: string | null;
};

/**
 * @param routeId `routes` のキー（`all` のときは公式URLは出さない）
 */
export function getStationExternalLinks(routeId: RouteId, stationName: string): StationExternalLinks {
  const wikipediaUrl = wikipediaJaStationUrl(stationName);
  if (routeId === 'all') {
    return { wikipediaUrl, officialUrl: null };
  }
  if (routeId.startsWith('seibu')) {
    return { wikipediaUrl, officialUrl: seibuOfficialStationUrl(stationName) };
  }
  return { wikipediaUrl, officialUrl: null };
}

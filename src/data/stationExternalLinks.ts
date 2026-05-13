/**
 * 駅ポップアップ用の外部リンク（Wikipedia・事業者公式）
 * 西武: https://www.seiburailway.jp/railway/station/{slug}/
 * 東武: https://www.tobu.co.jp/railway/guide/station/info/{駅コード}/ （東上・スカイツリー・野田・越生。東上線は routeId `tojo`）
 * 他社・未整備路線は officialLinks 空（Wikipediaのみ）。
 */

import type { StationHistoryApi } from './types';
import { ROUTES, type RouteId } from './routes';

type IndividualRouteId = Exclude<RouteId, 'all'>;

function stationCoordKey(lat: number, lon: number): string {
  return `${lat.toFixed(5)},${lon.toFixed(5)}`;
}

/** 指定日・座標が含まれる個別路線（全路線モード用。定義順に走査） */
function individualRouteIdsContainingStation(
  lat: number,
  lon: number,
  dateStr: string,
  individualApis: StationHistoryApi[],
  individualRouteIds: readonly IndividualRouteId[]
): IndividualRouteId[] {
  if (individualApis.length !== individualRouteIds.length) return [];
  const k = stationCoordKey(lat, lon);
  const matched: IndividualRouteId[] = [];
  for (let i = 0; i < individualApis.length; i++) {
    const stations = individualApis[i].getStationsAtDate(dateStr);
    if (stations.some((s) => stationCoordKey(s.lat, s.lon) === k)) {
      matched.push(individualRouteIds[i]);
    }
  }
  return matched;
}

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

/** 東武公式サイトの駅ページ用コード（東上・スカイツリー・野田・越生。改称前の旧名もキーに） */
const TOBU_STATION_CODES: Record<string, string> = {
  // 東上線（池袋～寄居）
  池袋: '7105',
  北池袋: '7201',
  下板橋: '7202',
  大山: '7203',
  中板橋: '7204',
  ときわ台: '7205',
  武蔵常盤: '7205',
  上板橋: '7206',
  東武練馬: '7207',
  下赤塚: '7208',
  成増: '7209',
  和光市: '7304',
  にいくら: '7304',
  新倉: '7304',
  大和町: '7304',
  朝霞: '7305',
  膝折: '7305',
  朝霞台: '7307',
  志木: '7308',
  みずほ台: '7309',
  柳瀬川: '7320',
  鶴瀬: '7310',
  ふじみ野: '7311',
  上福岡: '7312',
  新河岸: '7313',
  高階: '7313',
  川越: '7315',
  川越西町: '7315',
  川越市: '7316',
  川越町: '7316',
  霞ヶ関: '7401',
  的場: '7401',
  鶴ヶ島: '7402',
  若葉: '7403',
  坂戸: '7404',
  坂戸町: '7404',
  北坂戸: '7406',
  高坂: '7407',
  東松山: '7408',
  武州松山: '7408',
  森林公園: '7409',
  つきのわ: '7410',
  武蔵嵐山: '7501',
  菅谷: '7501',
  小川町: '7504',
  東武竹沢: '7505',
  みなみ寄居: '7513',
  男衾: '7506',
  鉢形: '7507',
  玉淀: '7508',
  寄居: '7512',
  // スカイツリーライン（伊勢崎線 浅草～東武動物公園）。浅草・越ヶ谷は座標で tobuOfficialStationUrl 側で振り分け
  吾妻橋: '1103',
  業平橋: '1103',
  とうきょうスカイツリー: '1103',
  押上: '1120',
  曳舟: '1104',
  東向島: '1106',
  玉ノ井: '1106',
  鐘ヶ淵: '1107',
  堀切: '1108',
  小菅: '1301',
  牛田: '1110',
  北千住: '1204',
  五反野: '1302',
  梅島: '1303',
  西新井: '1304',
  竹ノ塚: '1306',
  谷塚: '1401',
  草加: '1402',
  獨協大学前: '1404',
  松原団地: '1404',
  新田: '1405',
  蒲生: '1406',
  新越谷: '1408',
  越谷: '1409',
  北越谷: '1410',
  武州大沢: '1410',
  粕壁: '1505',
  せんげん台: '1502',
  大袋: '1501',
  武里: '1503',
  一ノ割: '1504',
  北春日部: '1507',
  東武動物公園: '1509',
  杉戸: '1509',
  // 野田線（アーバンパークライン）系
  大宮: '6102',
  北大宮: '6103',
  大宮公園: '6104',
  大和田: '6105',
  七里: '6106',
  岩槻: '6107',
  東岩槻: '6201',
  豊春: '6202',
  八木崎: '6203',
  春日部: '1505',
  牛島: '6206',
  藤の牛島: '6206',
  永沼: '6207',
  南桜井: '6207',
  川間: '6208',
  七光台: '6301',
  清水公園: '6302',
  愛宕: '6303',
  野田町: '6304',
  野田市: '6304',
  梅郷: '6305',
  運河: '6306',
  江戸川台: '6307',
  初石: '6308',
  豊四季: '6309',
  流山おおたかの森: '6320',
  柏: '6312',
  新柏: '6401',
  増尾: '6402',
  逆井: '6403',
  高柳: '6404',
  六実: '6405',
  鎌ヶ谷: '6406',
  新鎌ヶ谷: '6420',
  馬込沢: '6407',
  塚田: '6408',
  新船橋: '6409',
  船橋: '6412',
  // 越生線（坂戸は東上線と同一コード）
  一本松: '8102',
  西大家: '8103',
  川角: '8104',
  武州長瀬: '8106',
  東毛呂: '8108',
  武州唐沢: '8109',
  越生: '8112',
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

function tobuInfoUrl(code: string): string {
  return `https://www.tobu.co.jp/railway/guide/station/info/${code}/`;
}

/** 座標付き時のみ判別できる駅（浅草が2地点・越ヶ谷が2系統あった時期） */
function tobuOfficialStationUrlByPosition(
  stationName: string,
  position: { lat: number; lon: number }
): string | null {
  const k = stationCoordKey(position.lat, position.lon);
  if (stationName === '浅草') {
    if (k === stationCoordKey(35.710508, 139.797568)) return tobuInfoUrl('1102');
    if (k === stationCoordKey(35.710439, 139.809325)) return tobuInfoUrl('1103');
    return null;
  }
  if (stationName === '越ヶ谷') {
    if (k === stationCoordKey(35.901994, 139.779889)) return tobuInfoUrl('1410');
    if (k === stationCoordKey(35.888307, 139.785917)) return tobuInfoUrl('1409');
    return null;
  }
  return null;
}

function tobuOfficialStationUrl(
  stationName: string,
  position?: { lat: number; lon: number }
): string | null {
  if (position && (stationName === '浅草' || stationName === '越ヶ谷')) {
    const byPos = tobuOfficialStationUrlByPosition(stationName, position);
    if (byPos) return byPos;
  }
  const code = TOBU_STATION_CODES[stationName];
  if (!code) return null;
  return tobuInfoUrl(code);
}

function officialUrlForIndividualRoute(
  routeId: IndividualRouteId,
  stationName: string,
  stationPosition?: { lat: number; lon: number }
): string | null {
  if (routeId.startsWith('seibu')) return seibuOfficialStationUrl(stationName);
  if (routeId.startsWith('tobu') || routeId === 'tojo' || routeId === 'skytree') {
    return tobuOfficialStationUrl(stationName, stationPosition);
  }
  return null;
}

export type OfficialStationLink = { label: string; url: string };

export type StationExternalLinks = {
  wikipediaUrl: string;
  /** 公式ページ。全路線時は路線名入りラベルで複数可 */
  officialLinks: OfficialStationLink[];
};

export type AllModeStationLinkContext = {
  currentDate: string;
  lat: number;
  lon: number;
  individualApis: StationHistoryApi[];
  individualRouteIds: readonly IndividualRouteId[];
};

/**
 * @param routeId `routes` のキー
 * @param stationPosition 東武系で同名駅のURLを分けるため（例: 浅草・越ヶ谷）
 */
export function getStationExternalLinks(
  routeId: RouteId,
  stationName: string,
  allMode?: AllModeStationLinkContext,
  stationPosition?: { lat: number; lon: number }
): StationExternalLinks {
  const wikipediaUrl = wikipediaJaStationUrl(stationName);

  if (routeId === 'all' && allMode) {
    const { currentDate, lat, lon, individualApis, individualRouteIds } = allMode;
    const routeIds = individualRouteIdsContainingStation(lat, lon, currentDate, individualApis, individualRouteIds);
    const pos = { lat, lon };
    const officialLinks: OfficialStationLink[] = [];
    for (const rId of routeIds) {
      const url = officialUrlForIndividualRoute(rId, stationName, pos);
      if (url) {
        officialLinks.push({
          label: `${ROUTES[rId].data.name}（公式）`,
          url,
        });
      }
    }
    return { wikipediaUrl, officialLinks };
  }

  if (routeId === 'all') {
    return { wikipediaUrl, officialLinks: [] };
  }

  const url = officialUrlForIndividualRoute(routeId, stationName, stationPosition);
  return {
    wikipediaUrl,
    officialLinks: url ? [{ label: '公式', url }] : [],
  };
}

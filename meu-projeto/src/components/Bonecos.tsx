// Bonecos recriados em SVG (vetor), com as partes do corpo em grupos
// separados (corpo / braço com arma / braço livre) para que cada ação
// (atacar, defender, curar) anime a parte certa com uma pose real —
// em vez de mover a imagem inteira. As cores seguem a mesma paleta das
// imagens originais (verde do troll, loiro/bege da garota).

export function BonecoPequeno() {
  const pele = "#f3c68f";
  const cabelo = "#696252";
  const cabeloSombra = "#c99a3f";
  const roupa = "#8a9468";
  const roupaSombra = "#6f7852";
  const calca = "#5c6b34";
  const bota = "#2c2620";
  const cabo = "#8a5a34";
  const martelo = "#9a9aa2";
  const marteloSombra = "#6f6f78";

  return (
    <svg
      className="boneco-svg svg-pequeno"
      viewBox="0 0 160 210"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="corpo">
        {/* pernas */}
        <rect x="52" y="145" width="18" height="48" rx="8" fill={calca} />
        <rect x="88" y="145" width="18" height="48" rx="8" fill={calca} />
        <rect x="48" y="186" width="26" height="14" rx="6" fill={bota} />
        <rect x="84" y="186" width="26" height="14" rx="6" fill={bota} />

        {/* tunica */}
        <path d="M64,95 L96,95 L114,150 L46,150 Z" fill={roupa} />
        <path d="M64,128 L96,128 L106,150 L54,150 Z" fill={roupaSombra} />

        {/* pescoço + cabeça */}
        <rect x="72" y="84" width="16" height="16" fill={pele} />
        <circle cx="80" cy="58" r="34" fill={pele} />

        {/* rabo de cavalo */}
        <path
          d="M100,28 C120,25 132,45 128,70 C126,90 118,100 110,98 C118,80 116,50 100,28 Z"
          fill={cabelo}
        />
        <path
          d="M112,55 C120,62 122,78 114,92 C116,78 112,65 106,58 Z"
          fill={cabeloSombra}
        />
        {/* franja */}
        <path
          d="M55,42 C60,26 76,20 92,27 C82,29 68,33 60,47 Z"
          fill={cabelo}
        />

        {/* rosto */}
        <circle cx="68" cy="58" r="3.2" fill="#2b2320" />
        <circle cx="90" cy="58" r="3.2" fill="#2b2320" />
        <path
          d="M71,72 Q80,80 89,72"
          stroke="#8a4a3a"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* braço livre */}
        <g className="braco-livre">
          <path
            d="M50,100 Q42,120 46,140"
            stroke={pele}
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="46" cy="141" r="8.5" fill={pele} />
        </g>
      </g>

      {/* braço com o martelo (pivô: ombro em 112,98) */}
      <g className="braco-arma">
        <path
          d="M112,98 Q120,120 114,148"
          stroke={pele}
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="114" cy="149" r="9.5" fill={pele} />
        <path
          d="M114,148 L110,55"
          stroke={cabo}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="90" y="34" width="44" height="26" rx="7" fill={martelo} />
        <rect x="94" y="38" width="36" height="7" rx="3" fill={marteloSombra} />
        <circle cx="100" cy="47" r="3" fill="#54545c" />
        <circle cx="124" cy="47" r="3" fill="#54545c" />
      </g>
    </svg>
  );
}

export function BonecoGrande() {
  const pele = "#9aab5e";
  const peleSombra = "#7e9349";
  const orelhaInterna = "#d9a679";
  const tanga = "#4a3626";
  const couro = "#54392a";
  const gema = "#c0524a";
  const fivela = "#9a9aa2";
  const cabelo = "#4a3327";
  const sobrancelha = "#3a2a1f";
  const olho = "#e8d98a";
  const boca = "#3a1e18";
  const presa = "#e8dcb0";
  const cabo = "#7a5a3a";
  const maca = "#8f8f96";
  const macaSombra = "#5a5a62";

  return (
    <svg
      className="boneco-svg svg-grande"
      viewBox="0 0 220 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="corpo">
        {/* pernas + pés */}
        <rect x="70" y="165" width="32" height="60" rx="14" fill={pele} />
        <rect x="118" y="165" width="32" height="60" rx="14" fill={pele} />
        <rect x="64" y="218" width="44" height="14" rx="8" fill={peleSombra} />
        <rect x="112" y="218" width="44" height="14" rx="8" fill={peleSombra} />

        {/* tanga */}
        <path d="M56,148 L164,148 L154,178 L66,178 Z" fill={tanga} />

        {/* corpo/barriga */}
        <ellipse cx="110" cy="118" rx="62" ry="52" fill={pele} />
        <ellipse
          cx="110"
          cy="142"
          rx="40"
          ry="22"
          fill={peleSombra}
          opacity="0.6"
        />

        {/* cinturão de couro */}
        <path d="M72,76 L96,182 L109,180 L87,73 Z" fill={couro} />
        <circle cx="96" cy="112" r="5" fill={gema} />
        <circle cx="100" cy="128" r="3" fill={gema} />
        <circle cx="104" cy="144" r="3" fill={gema} />

        {/* cinto + fivela */}
        <rect x="70" y="150" width="80" height="16" rx="8" fill={tanga} />
        <circle cx="110" cy="158" r="9" fill={fivela} />

        {/* pescoço + cabeça */}
        <rect x="95" y="68" width="40" height="24" fill={pele} />
        <circle
          cx="115"
          cy="52"
          r="46"
          fill={pele}
          data-darkreader-ignore="true"
        />

        {/* orelhas */}
        <path d="M65,45 L46,28 L60,64 Z" fill={pele} />
        <path d="M62,44 L52,34 L60,58 Z" fill={orelhaInterna} opacity="0.75" />
        <path d="M165,45 L184,28 L170,64 Z" fill={pele} />
        <path
          d="M168,44 L178,34 L170,58 Z"
          fill={orelhaInterna}
          opacity="0.75"
        />

        {/* cabelo moicano */}
        <path
          d="M83,16 C90,4 101,0 115,3 C129,0 140,4 147,17 C136,9 126,7 115,9 C104,7 94,9 83,16 Z"
          fill={cabelo}
        />

        {/* sobrancelhas bravas */}
        <rect
          x="86"
          y="38"
          width="24"
          height="7"
          rx="3"
          transform="rotate(-14 98 41)"
          fill={sobrancelha}
        />
        <rect
          x="120"
          y="38"
          width="24"
          height="7"
          rx="3"
          transform="rotate(14 132 41)"
          fill={sobrancelha}
        />

        {/* olhos */}
        <ellipse cx="99" cy="53" rx="5.5" ry="6.5" fill={olho} />
        <ellipse cx="131" cy="53" rx="5.5" ry="6.5" fill={olho} />
        <circle cx="99" cy="55" r="2.6" fill="#2a2016" />
        <circle cx="131" cy="55" r="2.6" fill="#2a2016" />

        {/* boca aberta + presas */}
        <path d="M88,75 Q115,102 142,75 Q115,92 88,75 Z" fill={boca} />
        <path d="M92,76 L86,58 L99,74 Z" fill={presa} />
        <path d="M138,76 L144,58 L131,74 Z" fill={presa} />

        {/* braço livre */}
        <g className="braco-livre">
          <path
            d="M58,95 Q40,120 50,150"
            stroke={pele}
            strokeWidth="25"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx="50"
            cy="151"
            r="15"
            fill={pele}
            data-darkreader-ignore="true"
          />
        </g>
      </g>

      {/* braço com a maça (pivô: ombro em 172,92) */}
      <g className="braco-arma">
        <path
          d="M172,92 Q186,118 172,148"
          stroke={pele}
          strokeWidth="25"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="172" cy="149" r="16" fill={pele} />
        <path
          d="M172,148 L120,35"
          stroke={cabo}
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="120"
          cy="32"
          r="21"
          fill={maca}
          stroke={macaSombra}
          strokeWidth="3"
        />
        <path d="M120,8 L126,22 L114,22 Z" fill={macaSombra} />
        <path d="M141,20 L133,30 L128,20 Z" fill={macaSombra} />
        <path d="M144,40 L130,38 L134,28 Z" fill={macaSombra} />
        <path d="M128,53 L118,45 L130,42 Z" fill={macaSombra} />
        <path d="M99,40 L112,38 L108,28 Z" fill={macaSombra} />
        <path d="M96,20 L110,26 L104,32 Z" fill={macaSombra} />
      </g>
    </svg>
  );
}

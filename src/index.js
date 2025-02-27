module.exports = function toReadable (number) {
    return dictionaryOfNumbers[number]
}

let dictionaryOfNumbers = {
    0:  "zero",
    1:  "one",
    2:  "two",
    3:  "three",
    4:  "four",
    5:  "five",
    6:  "six",
    7:  "seven",
    8:  "eight",
    9:  "nine",
    10:	"ten",
    11:	"eleven",
    12:	"twelve",
    13:	"thirteen",
    14:	"fourteen",
    15:	"fifteen",
    16:	"sixteen",
    17:	"seventeen",
    18:	"eighteen",
    19:	"nineteen",
    20:	"twenty",
    21:	"twenty one",
    22:	"twenty two",
    23:	"twenty three",
    24:	"twenty four",
    25:	"twenty five",
    26:	"twenty six",
    27:	"twenty seven",
    28:	"twenty eight",
    29:	"twenty nine",
    30:	"thirty",
    31:	"thirty one",
    32:	"thirty two",
    33:	"thirty three",
    34:	"thirty four",
    35:	"thirty five",
    36:	"thirty six",
    37:	"thirty seven",
    38:	"thirty eight",
    39:	"thirty nine",
    40:	"forty",
    41:	"forty one",
    42:	"forty two",
    43:	"forty three",
    44:	"forty four",
    45:	"forty five",
    46:	"forty six",
    47:	"forty seven",
    48:	"forty eight",
    49:	"forty nine",
    50:	"fifty",
    51:	"fifty one",
    52:	"fifty two",
    53:	"fifty three",
    54:	"fifty four",
    55:	"fifty five",
    56:	"fifty six",
    57:	"fifty seven",
    58:	"fifty eight",
    59:	"fifty nine",
    60:	"sixty",
    61:	"sixty one",
    62:	"sixty two",
    63:	"sixty three",
    64:	"sixty four",
    65:	"sixty five",
    66:	"sixty six",
    67:	"sixty seven",
    68:	"sixty eight",
    69:	"sixty nine",
    70:	"seventy",
    71:	"seventy one",
    72:	"seventy two",
    73:	"seventy three",
    74:	"seventy four",
    75:	"seventy five",
    76:	"seventy six",
    77:	"seventy seven",
    78:	"seventy eight",
    79:	"seventy nine",
    80:	"eighty",
    81:	"eighty one",
    82:	"eighty two",
    83:	"eighty three",
    84:	"eighty four",
    85:	"eighty five",
    86:	"eighty six",
    87:	"eighty seven",
    88:	"eighty eight",
    89:	"eighty nine",
    90:	"ninety",
    91:	"ninety one",
    92:	"ninety two",
    93:	"ninety three",
    94:	"ninety four",
    95:	"ninety five",
    96:	"ninety six",
    97:	"ninety seven",
    98:	"ninety eight",
    99:	"ninety nine",
    100: "one hundred",
    101: "one hundred one",
    102: "one hundred two",
    103: "one hundred three",
    104: "one hundred four",
    105: "one hundred five",
    106: "one hundred six",
    107: "one hundred seven",
    108: "one hundred eight",
    109: "one hundred nine",
    110: "one hundred ten",
    111: "one hundred eleven",
    112: "one hundred twelve",
    113: "one hundred thirteen",
    114: "one hundred fourteen",
    115: "one hundred fifteen",
    116: "one hundred sixteen",
    117: "one hundred seventeen",
    118: "one hundred eighteen",
    119: "one hundred nineteen",
    120: "one hundred twenty",
    121: "one hundred twenty one",
    122: "one hundred twenty two",
    123: "one hundred twenty three",
    124: "one hundred twenty four",
    125: "one hundred twenty five",
    126: "one hundred twenty six",
    127: "one hundred twenty seven",
    128: "one hundred twenty eight",
    129: "one hundred twenty nine",
    130: "one hundred thirty",
    131: "one hundred thirty one",
    132: "one hundred thirty two",
    133: "one hundred thirty three",
    134: "one hundred thirty four",
    135: "one hundred thirty five",
    136: "one hundred thirty six",
    137: "one hundred thirty seven",
    138: "one hundred thirty eight",
    139: "one hundred thirty nine",
    140: "one hundred forty",
    141: "one hundred forty one",
    142: "one hundred forty two",
    143: "one hundred forty three",
    144: "one hundred forty four",
    145: "one hundred forty five",
    146: "one hundred forty six",
    147: "one hundred forty seven",
    148: "one hundred forty eight",
    149: "one hundred forty nine",
    150: "one hundred fifty",
    151: "one hundred fifty one",
    152: "one hundred fifty two",
    153: "one hundred fifty three",
    154: "one hundred fifty four",
    155: "one hundred fifty five",
    156: "one hundred fifty six",
    157: "one hundred fifty seven",
    158: "one hundred fifty eight",
    159: "one hundred fifty nine",
    160: "one hundred sixty",
    161: "one hundred sixty one",
    162: "one hundred sixty two",
    163: "one hundred sixty three",
    164: "one hundred sixty four",
    165: "one hundred sixty five",
    166: "one hundred sixty six",
    167: "one hundred sixty seven",
    168: "one hundred sixty eight",
    169: "one hundred sixty nine",
    170: "one hundred seventy",
    171: "one hundred seventy one",
    172: "one hundred seventy two",
    173: "one hundred seventy three",
    174: "one hundred seventy four",
    175: "one hundred seventy five",
    176: "one hundred seventy six",
    177: "one hundred seventy seven",
    178: "one hundred seventy eight",
    179: "one hundred seventy nine",
    180: "one hundred eighty",
    181: "one hundred eighty one",
    182: "one hundred eighty two",
    183: "one hundred eighty three",
    184: "one hundred eighty four",
    185: "one hundred eighty five",
    186: "one hundred eighty six",
    187: "one hundred eighty seven",
    188: "one hundred eighty eight",
    189: "one hundred eighty nine",
    190: "one hundred ninety",
    191: "one hundred ninety one",
    192: "one hundred ninety two",
    193: "one hundred ninety three",
    194: "one hundred ninety four",
    195: "one hundred ninety five",
    196: "one hundred ninety six",
    197: "one hundred ninety seven",
    198: "one hundred ninety eight",
    199: "one hundred ninety nine",
    200: "two hundred",
    201: "two hundred one",
    202: "two hundred two",
    203: "two hundred three",
    204: "two hundred four",
    205: "two hundred five",
    206: "two hundred six",
    207: "two hundred seven",
    208: "two hundred eight",
    209: "two hundred nine",
    210: "two hundred ten",
    211: "two hundred eleven",
    212: "two hundred twelve",
    213: "two hundred thirteen",
    214: "two hundred fourteen",
    215: "two hundred fifteen",
    216: "two hundred sixteen",
    217: "two hundred seventeen",
    218: "two hundred eighteen",
    219: "two hundred nineteen",
    220: "two hundred twenty",
    221: "two hundred twenty one",
    222: "two hundred twenty two",
    223: "two hundred twenty three",
    224: "two hundred twenty four",
    225: "two hundred twenty five",
    226: "two hundred twenty six",
    227: "two hundred twenty seven",
    228: "two hundred twenty eight",
    229: "two hundred twenty nine",
    230: "two hundred thirty",
    231: "two hundred thirty one",
    232: "two hundred thirty two",
    233: "two hundred thirty three",
    234: "two hundred thirty four",
    235: "two hundred thirty five",
    236: "two hundred thirty six",
    237: "two hundred thirty seven",
    238: "two hundred thirty eight",
    239: "two hundred thirty nine",
    240: "two hundred forty",
    241: "two hundred forty one",
    242: "two hundred forty two",
    243: "two hundred forty three",
    244: "two hundred forty four",
    245: "two hundred forty five",
    246: "two hundred forty six",
    247: "two hundred forty seven",
    248: "two hundred forty eight",
    249: "two hundred forty nine",
    250: "two hundred fifty",
    251: "two hundred fifty one",
    252: "two hundred fifty two",
    253: "two hundred fifty three",
    254: "two hundred fifty four",
    255: "two hundred fifty five",
    256: "two hundred fifty six",
    257: "two hundred fifty seven",
    258: "two hundred fifty eight",
    259: "two hundred fifty nine",
    260: "two hundred sixty",
    261: "two hundred sixty one",
    262: "two hundred sixty two",
    263: "two hundred sixty three",
    264: "two hundred sixty four",
    265: "two hundred sixty five",
    266: "two hundred sixty six",
    267: "two hundred sixty seven",
    268: "two hundred sixty eight",
    269: "two hundred sixty nine",
    270: "two hundred seventy",
    271: "two hundred seventy one",
    272: "two hundred seventy two",
    273: "two hundred seventy three",
    274: "two hundred seventy four",
    275: "two hundred seventy five",
    276: "two hundred seventy six",
    277: "two hundred seventy seven",
    278: "two hundred seventy eight",
    279: "two hundred seventy nine",
    280: "two hundred eighty",
    281: "two hundred eighty one",
    282: "two hundred eighty two",
    283: "two hundred eighty three",
    284: "two hundred eighty four",
    285: "two hundred eighty five",
    286: "two hundred eighty six",
    287: "two hundred eighty seven",
    288: "two hundred eighty eight",
    289: "two hundred eighty nine",
    290: "two hundred ninety",
    291: "two hundred ninety one",
    292: "two hundred ninety two",
    293: "two hundred ninety three",
    294: "two hundred ninety four",
    295: "two hundred ninety five",
    296: "two hundred ninety six",
    297: "two hundred ninety seven",
    298: "two hundred ninety eight",
    299: "two hundred ninety nine",
    300: "three hundred",
    301: "three hundred one",
    302: "three hundred two",
    303: "three hundred three",
    304: "three hundred four",
    305: "three hundred five",
    306: "three hundred six",
    307: "three hundred seven",
    308: "three hundred eight",
    309: "three hundred nine",
    310: "three hundred ten",
    311: "three hundred eleven",
    312: "three hundred twelve",
    313: "three hundred thirteen",
    314: "three hundred fourteen",
    315: "three hundred fifteen",
    316: "three hundred sixteen",
    317: "three hundred seventeen",
    318: "three hundred eighteen",
    319: "three hundred nineteen",
    320: "three hundred twenty",
    321: "three hundred twenty one",
    322: "three hundred twenty two",
    323: "three hundred twenty three",
    324: "three hundred twenty four",
    325: "three hundred twenty five",
    326: "three hundred twenty six",
    327: "three hundred twenty seven",
    328: "three hundred twenty eight",
    329: "three hundred twenty nine",
    330: "three hundred thirty",
    331: "three hundred thirty one",
    332: "three hundred thirty two",
    333: "three hundred thirty three",
    334: "three hundred thirty four",
    335: "three hundred thirty five",
    336: "three hundred thirty six",
    337: "three hundred thirty seven",
    338: "three hundred thirty eight",
    339: "three hundred thirty nine",
    340: "three hundred forty",
    341: "three hundred forty one",
    342: "three hundred forty two",
    343: "three hundred forty three",
    344: "three hundred forty four",
    345: "three hundred forty five",
    346: "three hundred forty six",
    347: "three hundred forty seven",
    348: "three hundred forty eight",
    349: "three hundred forty nine",
    350: "three hundred fifty",
    351: "three hundred fifty one",
    352: "three hundred fifty two",
    353: "three hundred fifty three",
    354: "three hundred fifty four",
    355: "three hundred fifty five",
    356: "three hundred fifty six",
    357: "three hundred fifty seven",
    358: "three hundred fifty eight",
    359: "three hundred fifty nine",
    360: "three hundred sixty",
    361: "three hundred sixty one",
    362: "three hundred sixty two",
    363: "three hundred sixty three",
    364: "three hundred sixty four",
    365: "three hundred sixty five",
    366: "three hundred sixty six",
    367: "three hundred sixty seven",
    368: "three hundred sixty eight",
    369: "three hundred sixty nine",
    370: "three hundred seventy",
    371: "three hundred seventy one",
    372: "three hundred seventy two",
    373: "three hundred seventy three",
    374: "three hundred seventy four",
    375: "three hundred seventy five",
    376: "three hundred seventy six",
    377: "three hundred seventy seven",
    378: "three hundred seventy eight",
    379: "three hundred seventy nine",
    380: "three hundred eighty",
    381: "three hundred eighty one",
    382: "three hundred eighty two",
    383: "three hundred eighty three",
    384: "three hundred eighty four",
    385: "three hundred eighty five",
    386: "three hundred eighty six",
    387: "three hundred eighty seven",
    388: "three hundred eighty eight",
    389: "three hundred eighty nine",
    390: "three hundred ninety",
    391: "three hundred ninety one",
    392: "three hundred ninety two",
    393: "three hundred ninety three",
    394: "three hundred ninety four",
    395: "three hundred ninety five",
    396: "three hundred ninety six",
    397: "three hundred ninety seven",
    398: "three hundred ninety eight",
    399: "three hundred ninety nine",
    400: "four hundred",
    401: "four hundred one",
    402: "four hundred two",
    403: "four hundred three",
    404: "four hundred four",
    405: "four hundred five",
    406: "four hundred six",
    407: "four hundred seven",
    408: "four hundred eight",
    409: "four hundred nine",
    410: "four hundred ten",
    411: "four hundred eleven",
    412: "four hundred twelve",
    413: "four hundred thirteen",
    414: "four hundred fourteen",
    415: "four hundred fifteen",
    416: "four hundred sixteen",
    417: "four hundred seventeen",
    418: "four hundred eighteen",
    419: "four hundred nineteen",
    420: "four hundred twenty",
    421: "four hundred twenty one",
    422: "four hundred twenty two",
    423: "four hundred twenty three",
    424: "four hundred twenty four",
    425: "four hundred twenty five",
    426: "four hundred twenty six",
    427: "four hundred twenty seven",
    428: "four hundred twenty eight",
    429: "four hundred twenty nine",
    430: "four hundred thirty",
    431: "four hundred thirty one",
    432: "four hundred thirty two",
    433: "four hundred thirty three",
    434: "four hundred thirty four",
    435: "four hundred thirty five",
    436: "four hundred thirty six",
    437: "four hundred thirty seven",
    438: "four hundred thirty eight",
    439: "four hundred thirty nine",
    440: "four hundred forty",
    441: "four hundred forty one",
    442: "four hundred forty two",
    443: "four hundred forty three",
    444: "four hundred forty four",
    445: "four hundred forty five",
    446: "four hundred forty six",
    447: "four hundred forty seven",
    448: "four hundred forty eight",
    449: "four hundred forty nine",
    450: "four hundred fifty",
    451: "four hundred fifty one",
    452: "four hundred fifty two",
    453: "four hundred fifty three",
    454: "four hundred fifty four",
    455: "four hundred fifty five",
    456: "four hundred fifty six",
    457: "four hundred fifty seven",
    458: "four hundred fifty eight",
    459: "four hundred fifty nine",
    460: "four hundred sixty",
    461: "four hundred sixty one",
    462: "four hundred sixty two",
    463: "four hundred sixty three",
    464: "four hundred sixty four",
    465: "four hundred sixty five",
    466: "four hundred sixty six",
    467: "four hundred sixty seven",
    468: "four hundred sixty eight",
    469: "four hundred sixty nine",
    470: "four hundred seventy",
    471: "four hundred seventy one",
    472: "four hundred seventy two",
    473: "four hundred seventy three",
    474: "four hundred seventy four",
    475: "four hundred seventy five",
    476: "four hundred seventy six",
    477: "four hundred seventy seven",
    478: "four hundred seventy eight",
    479: "four hundred seventy nine",
    480: "four hundred eighty",
    481: "four hundred eighty one",
    482: "four hundred eighty two",
    483: "four hundred eighty three",
    484: "four hundred eighty four",
    485: "four hundred eighty five",
    486: "four hundred eighty six",
    487: "four hundred eighty seven",
    488: "four hundred eighty eight",
    489: "four hundred eighty nine",
    490: "four hundred ninety",
    491: "four hundred ninety one",
    492: "four hundred ninety two",
    493: "four hundred ninety three",
    494: "four hundred ninety four",
    495: "four hundred ninety five",
    496: "four hundred ninety six",
    497: "four hundred ninety seven",
    498: "four hundred ninety eight",
    499: "four hundred ninety nine",
    500: "five hundred",
    501: "five hundred one",
    502: "five hundred two",
    503: "five hundred three",
    504: "five hundred four",
    505: "five hundred five",
    506: "five hundred six",
    507: "five hundred seven",
    508: "five hundred eight",
    509: "five hundred nine",
    510: "five hundred ten",
    511: "five hundred eleven",
    512: "five hundred twelve",
    513: "five hundred thirteen",
    514: "five hundred fourteen",
    515: "five hundred fifteen",
    516: "five hundred sixteen",
    517: "five hundred seventeen",
    518: "five hundred eighteen",
    519: "five hundred nineteen",
    520: "five hundred twenty",
    521: "five hundred twenty one",
    522: "five hundred twenty two",
    523: "five hundred twenty three",
    524: "five hundred twenty four",
    525: "five hundred twenty five",
    526: "five hundred twenty six",
    527: "five hundred twenty seven",
    528: "five hundred twenty eight",
    529: "five hundred twenty nine",
    530: "five hundred thirty",
    531: "five hundred thirty one",
    532: "five hundred thirty two",
    533: "five hundred thirty three",
    534: "five hundred thirty four",
    535: "five hundred thirty five",
    536: "five hundred thirty six",
    537: "five hundred thirty seven",
    538: "five hundred thirty eight",
    539: "five hundred thirty nine",
    540: "five hundred forty",
    541: "five hundred forty one",
    542: "five hundred forty two",
    543: "five hundred forty three",
    544: "five hundred forty four",
    545: "five hundred forty five",
    546: "five hundred forty six",
    547: "five hundred forty seven",
    548: "five hundred forty eight",
    549: "five hundred forty nine",
    550: "five hundred fifty",
    551: "five hundred fifty one",
    552: "five hundred fifty two",
    553: "five hundred fifty three",
    554: "five hundred fifty four",
    555: "five hundred fifty five",
    556: "five hundred fifty six",
    557: "five hundred fifty seven",
    558: "five hundred fifty eight",
    559: "five hundred fifty nine",
    560: "five hundred sixty",
    561: "five hundred sixty one",
    562: "five hundred sixty two",
    563: "five hundred sixty three",
    564: "five hundred sixty four",
    565: "five hundred sixty five",
    566: "five hundred sixty six",
    567: "five hundred sixty seven",
    568: "five hundred sixty eight",
    569: "five hundred sixty nine",
    570: "five hundred seventy",
    571: "five hundred seventy one",
    572: "five hundred seventy two",
    573: "five hundred seventy three",
    574: "five hundred seventy four",
    575: "five hundred seventy five",
    576: "five hundred seventy six",
    577: "five hundred seventy seven",
    578: "five hundred seventy eight",
    579: "five hundred seventy nine",
    580: "five hundred eighty",
    581: "five hundred eighty one",
    582: "five hundred eighty two",
    583: "five hundred eighty three",
    584: "five hundred eighty four",
    585: "five hundred eighty five",
    586: "five hundred eighty six",
    587: "five hundred eighty seven",
    588: "five hundred eighty eight",
    589: "five hundred eighty nine",
    590: "five hundred ninety",
    591: "five hundred ninety one",
    592: "five hundred ninety two",
    593: "five hundred ninety three",
    594: "five hundred ninety four",
    595: "five hundred ninety five",
    596: "five hundred ninety six",
    597: "five hundred ninety seven",
    598: "five hundred ninety eight",
    599: "five hundred ninety nine",
    600: "six hundred",
    601: "six hundred one",
    602: "six hundred two",
    603: "six hundred three",
    604: "six hundred four",
    605: "six hundred five",
    606: "six hundred six",
    607: "six hundred seven",
    608: "six hundred eight",
    609: "six hundred nine",
    610: "six hundred ten",
    611: "six hundred eleven",
    612: "six hundred twelve",
    613: "six hundred thirteen",
    614: "six hundred fourteen",
    615: "six hundred fifteen",
    616: "six hundred sixteen",
    617: "six hundred seventeen",
    618: "six hundred eighteen",
    619: "six hundred nineteen",
    620: "six hundred twenty",
    621: "six hundred twenty one",
    622: "six hundred twenty two",
    623: "six hundred twenty three",
    624: "six hundred twenty four",
    625: "six hundred twenty five",
    626: "six hundred twenty six",
    627: "six hundred twenty seven",
    628: "six hundred twenty eight",
    629: "six hundred twenty nine",
    630: "six hundred thirty",
    631: "six hundred thirty one",
    632: "six hundred thirty two",
    633: "six hundred thirty three",
    634: "six hundred thirty four",
    635: "six hundred thirty five",
    636: "six hundred thirty six",
    637: "six hundred thirty seven",
    638: "six hundred thirty eight",
    639: "six hundred thirty nine",
    640: "six hundred forty",
    641: "six hundred forty one",
    642: "six hundred forty two",
    643: "six hundred forty three",
    644: "six hundred forty four",
    645: "six hundred forty five",
    646: "six hundred forty six",
    647: "six hundred forty seven",
    648: "six hundred forty eight",
    649: "six hundred forty nine",
    650: "six hundred fifty",
    651: "six hundred fifty one",
    652: "six hundred fifty two",
    653: "six hundred fifty three",
    654: "six hundred fifty four",
    655: "six hundred fifty five",
    656: "six hundred fifty six",
    657: "six hundred fifty seven",
    658: "six hundred fifty eight",
    659: "six hundred fifty nine",
    660: "six hundred sixty",
    661: "six hundred sixty one",
    662: "six hundred sixty two",
    663: "six hundred sixty three",
    664: "six hundred sixty four",
    665: "six hundred sixty five",
    666: "six hundred sixty six",
    667: "six hundred sixty seven",
    668: "six hundred sixty eight",
    669: "six hundred sixty nine",
    670: "six hundred seventy",
    671: "six hundred seventy one",
    672: "six hundred seventy two",
    673: "six hundred seventy three",
    674: "six hundred seventy four",
    675: "six hundred seventy five",
    676: "six hundred seventy six",
    677: "six hundred seventy seven",
    678: "six hundred seventy eight",
    679: "six hundred seventy nine",
    680: "six hundred eighty",
    681: "six hundred eighty one",
    682: "six hundred eighty two",
    683: "six hundred eighty three",
    684: "six hundred eighty four",
    685: "six hundred eighty five",
    686: "six hundred eighty six",
    687: "six hundred eighty seven",
    688: "six hundred eighty eight",
    689: "six hundred eighty nine",
    690: "six hundred ninety",
    691: "six hundred ninety one",
    692: "six hundred ninety two",
    693: "six hundred ninety three",
    694: "six hundred ninety four",
    695: "six hundred ninety five",
    696: "six hundred ninety six",
    697: "six hundred ninety seven",
    698: "six hundred ninety eight",
    699: "six hundred ninety nine",
    700: "seven hundred",
    701: "seven hundred one",
    702: "seven hundred two",
    703: "seven hundred three",
    704: "seven hundred four",
    705: "seven hundred five",
    706: "seven hundred six",
    707: "seven hundred seven",
    708: "seven hundred eight",
    709: "seven hundred nine",
    710: "seven hundred ten",
    711: "seven hundred eleven",
    712: "seven hundred twelve",
    713: "seven hundred thirteen",
    714: "seven hundred fourteen",
    715: "seven hundred fifteen",
    716: "seven hundred sixteen",
    717: "seven hundred seventeen",
    718: "seven hundred eighteen",
    719: "seven hundred nineteen",
    720: "seven hundred twenty",
    721: "seven hundred twenty one",
    722: "seven hundred twenty two",
    723: "seven hundred twenty three",
    724: "seven hundred twenty four",
    725: "seven hundred twenty five",
    726: "seven hundred twenty six",
    727: "seven hundred twenty seven",
    728: "seven hundred twenty eight",
    729: "seven hundred twenty nine",
    730: "seven hundred thirty",
    731: "seven hundred thirty one",
    732: "seven hundred thirty two",
    733: "seven hundred thirty three",
    734: "seven hundred thirty four",
    735: "seven hundred thirty five",
    736: "seven hundred thirty six",
    737: "seven hundred thirty seven",
    738: "seven hundred thirty eight",
    739: "seven hundred thirty nine",
    740: "seven hundred forty",
    741: "seven hundred forty one",
    742: "seven hundred forty two",
    743: "seven hundred forty three",
    744: "seven hundred forty four",
    745: "seven hundred forty five",
    746: "seven hundred forty six",
    747: "seven hundred forty seven",
    748: "seven hundred forty eight",
    749: "seven hundred forty nine",
    750: "seven hundred fifty",
    751: "seven hundred fifty one",
    752: "seven hundred fifty two",
    753: "seven hundred fifty three",
    754: "seven hundred fifty four",
    755: "seven hundred fifty five",
    756: "seven hundred fifty six",
    757: "seven hundred fifty seven",
    758: "seven hundred fifty eight",
    759: "seven hundred fifty nine",
    760: "seven hundred sixty",
    761: "seven hundred sixty one",
    762: "seven hundred sixty two",
    763: "seven hundred sixty three",
    764: "seven hundred sixty four",
    765: "seven hundred sixty five",
    766: "seven hundred sixty six",
    767: "seven hundred sixty seven",
    768: "seven hundred sixty eight",
    769: "seven hundred sixty nine",
    770: "seven hundred seventy",
    771: "seven hundred seventy one",
    772: "seven hundred seventy two",
    773: "seven hundred seventy three",
    774: "seven hundred seventy four",
    775: "seven hundred seventy five",
    776: "seven hundred seventy six",
    777: "seven hundred seventy seven",
    778: "seven hundred seventy eight",
    779: "seven hundred seventy nine",
    780: "seven hundred eighty",
    781: "seven hundred eighty one",
    782: "seven hundred eighty two",
    783: "seven hundred eighty three",
    784: "seven hundred eighty four",
    785: "seven hundred eighty five",
    786: "seven hundred eighty six",
    787: "seven hundred eighty seven",
    788: "seven hundred eighty eight",
    789: "seven hundred eighty nine",
    790: "seven hundred ninety",
    791: "seven hundred ninety one",
    792: "seven hundred ninety two",
    793: "seven hundred ninety three",
    794: "seven hundred ninety four",
    795: "seven hundred ninety five",
    796: "seven hundred ninety six",
    797: "seven hundred ninety seven",
    798: "seven hundred ninety eight",
    799: "seven hundred ninety nine",
    800: "eight hundred",
    801: "eight hundred one",
    802: "eight hundred two",
    803: "eight hundred three",
    804: "eight hundred four",
    805: "eight hundred five",
    806: "eight hundred six",
    807: "eight hundred seven",
    808: "eight hundred eight",
    809: "eight hundred nine",
    810: "eight hundred ten",
    811: "eight hundred eleven",
    812: "eight hundred twelve",
    813: "eight hundred thirteen",
    814: "eight hundred fourteen",
    815: "eight hundred fifteen",
    816: "eight hundred sixteen",
    817: "eight hundred seventeen",
    818: "eight hundred eighteen",
    819: "eight hundred nineteen",
    820: "eight hundred twenty",
    821: "eight hundred twenty one",
    822: "eight hundred twenty two",
    823: "eight hundred twenty three",
    824: "eight hundred twenty four",
    825: "eight hundred twenty five",
    826: "eight hundred twenty six",
    827: "eight hundred twenty seven",
    828: "eight hundred twenty eight",
    829: "eight hundred twenty nine",
    830: "eight hundred thirty",
    831: "eight hundred thirty one",
    832: "eight hundred thirty two",
    833: "eight hundred thirty three",
    834: "eight hundred thirty four",
    835: "eight hundred thirty five",
    836: "eight hundred thirty six",
    837: "eight hundred thirty seven",
    838: "eight hundred thirty eight",
    839: "eight hundred thirty nine",
    840: "eight hundred forty",
    841: "eight hundred forty one",
    842: "eight hundred forty two",
    843: "eight hundred forty three",
    844: "eight hundred forty four",
    845: "eight hundred forty five",
    846: "eight hundred forty six",
    847: "eight hundred forty seven",
    848: "eight hundred forty eight",
    849: "eight hundred forty nine",
    850: "eight hundred fifty",
    851: "eight hundred fifty one",
    852: "eight hundred fifty two",
    853: "eight hundred fifty three",
    854: "eight hundred fifty four",
    855: "eight hundred fifty five",
    856: "eight hundred fifty six",
    857: "eight hundred fifty seven",
    858: "eight hundred fifty eight",
    859: "eight hundred fifty nine",
    860: "eight hundred sixty",
    861: "eight hundred sixty one",
    862: "eight hundred sixty two",
    863: "eight hundred sixty three",
    864: "eight hundred sixty four",
    865: "eight hundred sixty five",
    866: "eight hundred sixty six",
    867: "eight hundred sixty seven",
    868: "eight hundred sixty eight",
    869: "eight hundred sixty nine",
    870: "eight hundred seventy",
    871: "eight hundred seventy one",
    872: "eight hundred seventy two",
    873: "eight hundred seventy three",
    874: "eight hundred seventy four",
    875: "eight hundred seventy five",
    876: "eight hundred seventy six",
    877: "eight hundred seventy seven",
    878: "eight hundred seventy eight",
    879: "eight hundred seventy nine",
    880: "eight hundred eighty",
    881: "eight hundred eighty one",
    882: "eight hundred eighty two",
    883: "eight hundred eighty three",
    884: "eight hundred eighty four",
    885: "eight hundred eighty five",
    886: "eight hundred eighty six",
    887: "eight hundred eighty seven",
    888: "eight hundred eighty eight",
    889: "eight hundred eighty nine",
    890: "eight hundred ninety",
    891: "eight hundred ninety one",
    892: "eight hundred ninety two",
    893: "eight hundred ninety three",
    894: "eight hundred ninety four",
    895: "eight hundred ninety five",
    896: "eight hundred ninety six",
    897: "eight hundred ninety seven",
    898: "eight hundred ninety eight",
    899: "eight hundred ninety nine",
    900: "nine hundred",
    901: "nine hundred one",
    902: "nine hundred two",
    903: "nine hundred three",
    904: "nine hundred four",
    905: "nine hundred five",
    906: "nine hundred six",
    907: "nine hundred seven",
    908: "nine hundred eight",
    909: "nine hundred nine",
    910: "nine hundred ten",
    911: "nine hundred eleven",
    912: "nine hundred twelve",
    913: "nine hundred thirteen",
    914: "nine hundred fourteen",
    915: "nine hundred fifteen",
    916: "nine hundred sixteen",
    917: "nine hundred seventeen",
    918: "nine hundred eighteen",
    919: "nine hundred nineteen",
    920: "nine hundred twenty",
    921: "nine hundred twenty one",
    922: "nine hundred twenty two",
    923: "nine hundred twenty three",
    924: "nine hundred twenty four",
    925: "nine hundred twenty five",
    926: "nine hundred twenty six",
    927: "nine hundred twenty seven",
    928: "nine hundred twenty eight",
    929: "nine hundred twenty nine",
    930: "nine hundred thirty",
    931: "nine hundred thirty one",
    932: "nine hundred thirty two",
    933: "nine hundred thirty three",
    934: "nine hundred thirty four",
    935: "nine hundred thirty five",
    936: "nine hundred thirty six",
    937: "nine hundred thirty seven",
    938: "nine hundred thirty eight",
    939: "nine hundred thirty nine",
    940: "nine hundred forty",
    941: "nine hundred forty one",
    942: "nine hundred forty two",
    943: "nine hundred forty three",
    944: "nine hundred forty four",
    945: "nine hundred forty five",
    946: "nine hundred forty six",
    947: "nine hundred forty seven",
    948: "nine hundred forty eight",
    949: "nine hundred forty nine",
    950: "nine hundred fifty",
    951: "nine hundred fifty one",
    952: "nine hundred fifty two",
    953: "nine hundred fifty three",
    954: "nine hundred fifty four",
    955: "nine hundred fifty five",
    956: "nine hundred fifty six",
    957: "nine hundred fifty seven",
    958: "nine hundred fifty eight",
    959: "nine hundred fifty nine",
    960: "nine hundred sixty",
    961: "nine hundred sixty one",
    962: "nine hundred sixty two",
    963: "nine hundred sixty three",
    964: "nine hundred sixty four",
    965: "nine hundred sixty five",
    966: "nine hundred sixty six",
    967: "nine hundred sixty seven",
    968: "nine hundred sixty eight",
    969: "nine hundred sixty nine",
    970: "nine hundred seventy",
    971: "nine hundred seventy one",
    972: "nine hundred seventy two",
    973: "nine hundred seventy three",
    974: "nine hundred seventy four",
    975: "nine hundred seventy five",
    976: "nine hundred seventy six",
    977: "nine hundred seventy seven",
    978: "nine hundred seventy eight",
    979: "nine hundred seventy nine",
    980: "nine hundred eighty",
    981: "nine hundred eighty one",
    982: "nine hundred eighty two",
    983: "nine hundred eighty three",
    984: "nine hundred eighty four",
    985: "nine hundred eighty five",
    986: "nine hundred eighty six",
    987: "nine hundred eighty seven",
    988: "nine hundred eighty eight",
    989: "nine hundred eighty nine",
    990: "nine hundred ninety",
    991: "nine hundred ninety one",
    992: "nine hundred ninety two",
    993: "nine hundred ninety three",
    994: "nine hundred ninety four",
    995: "nine hundred ninety five",
    996: "nine hundred ninety six",
    997: "nine hundred ninety seven",
    998: "nine hundred ninety eight",
    999: "nine hundred ninety nine"
}

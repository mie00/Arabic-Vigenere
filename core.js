var mod = function (a,b){
    if (a<0)return mod(a+b,b);
    if (a>=b) return mod(a-b,b);
    return a
}
var add = function (a,b){
    return mod(a+b,28);
}
var subt = function (a,b){
    return mod(a-b,28);
}
var alpha2int = function (a){
    return {
        'أ':0,
        'ا':0,
        'إ':0,
        'ء':0,
        'ئ':0,
        'ب':1,
        'ت':2,
        'ث':3,
        'ج':4,
        'ح':5,
        'خ':6,
        'د':7,
        'ذ':8,
        'ر':9,
        'ز':10,
        'س':11,
        'ش':12,
        'ص':13,
        'ض':14,
        'ط':15,
        'ظ':16,
        'ع':17,
        'غ':18,
        'ف':19,
        'ق':20,
        'ك':21,
        'ل':22,
        'م':23,
        'ن':24,
        'ه':25,
        'ة':25,
        'و':26,
        'ي':27,
        'ى':27,
    }[a]
}

var int2alpha = function (a){
    return {
        0:'ا',
        1:'ب',
        2:'ت',
        3:'ث',
        4:'ج',
        5:'ح',
        6:'خ',
        7:'د',
        8:'ذ',
        9:'ر',
        10:'ز',
        11:'س',
        12:'ش',
        13:'ص',
        14:'ض',
        15:'ط',
        16:'ظ',
        17:'ع',
        18:'غ',
        19:'ف',
        20:'ق',
        21:'ك',
        22:'ل',
        23:'م',
        24:'ن',
        25:'ه',
        26:'و',
        27:'ي',
    }[a]
}

var add_letter = function(a, b){
    var _a = alpha2int(a),
        _b = alpha2int(b);
    return (_a === undefined)?[a,false]:(_b === undefined)?[b,false]:[int2alpha(add(_a, _b)),true];
}

var subt_letter = function(a, b){
    var _a = alpha2int(a),
        _b = alpha2int(b);
    return (_a === undefined)?[a,false]:(_b === undefined)?[b,false]:[int2alpha(subt(_a, _b)),true];
}

var normalize_key = function(b){
    return b.split('').filter(function(x){
        return alpha2int(x)!==undefined;
    }).join('');
}

var decrypt = function(a, b){
    var i = 0;
    var b = normalize_key(b);
    return a.split('').map(function(x){
        var c = subt_letter(x,b[mod(i,b.length)]);
        if(c[1]){
            i++;
        }
        return c[0];
    }).join('');
}
var encrypt = function(a, b){
    var i = 0;
    var b = normalize_key(b);
    return a.split('').map(function(x){
        var c = add_letter(x,b[mod(i,b.length)]);
        if(c[1]){
            i++;
        }
        return c[0];
    }).join('');
}

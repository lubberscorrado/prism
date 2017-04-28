Prism.languages.asm6502 = {
    'comment': /;.*$/m,
    'string': /("|'|`)(\\?.)*?\1/m,
    'label': {
        pattern: /^\s*[\w]*:/,
        alias: 'function'
    },
    'property': {
        pattern: /\.[\w]+/i,
    },
    'function': /\b(?:_printf|pushax)\b/,
    'keyword':
    /\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\b/,
    'number': /(\b|-|(?=\$))(0[hx][\da-f]*\.?[\da-f]+(p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(\.?e[+-]?\d+)?[dt]?)\b/i,
    'operator': /[\[\]\*+\-\/%<>=&|#\~\^!]/m
};

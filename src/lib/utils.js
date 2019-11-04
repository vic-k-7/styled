
module.exports = {
    mixins: {
        darkenLighten: function(col, amt) {
            console.log('UTILS', col, amt);
            if (!col) return false;
            var usePound = false;
            if (col[0] == "#") {
                col = col.slice(1);
                usePound = true;
            }
            var num = parseInt(col, 16);
            var r = (num >> 16) + amt;
            if (r > 255)
                r = 255;
            else if (r < 0)
                r = 0;
            var b = ((num >> 8) & 255) + amt;
            if (b > 255)
                b = 255;
            else if (b < 0)
                b = 0;
            var g = (num & 255) + amt;
            if (g > 255)
                g = 255;
            else if (g < 0)
                g = 0;
            return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
        },
        fade: function(col, amt) {
            var c;
            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(col)){
                c= col.substring(1).split('');
                if(c.length== 3){
                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c= '0x'+c.join('');
                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + amt/100 +')';
            }
            throw new Error('Bad Hex');
        }
    }
}
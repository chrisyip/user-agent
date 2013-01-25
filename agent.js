/*
* @Author: Chris Yip
* @License: MIT License
* @Repo: https://github.com/ChrisYip/user-agent
*/
(function( window ) {
  var agent = {
    parse: function( ua ) {
      if ( typeof ua !== 'string' ) return;

      ua = ua.toLowerCase()

      var isMobile = /ipod|iphone|ipad|android|iemobile|playbook|blackberry/.test( ua )
        , res = [], ret = {}, v

      if ( -1 === ua.indexOf('iemobile') ) {
        if ( isMobile ) {
          res = /(?:(.+)\/)*.+?(iphone|ipad|ipod|android|playbook|blackberry).+?\) ([a-z]+?)\/.+? (version)\/(\d+(?:\.\d+)*).*/.exec( ua )
        } else {
          res = /(?:(.+)\/)*.+?\(.*?(windows|mac os|linux).+?\) ([a-z]+?)\/.+? (chrome|safari|version|firefox)\/(\d+(?:\.\d+)*).*/.exec( ua )
        }

        res.shift()
        var i = res.length - 1
        if ( 'version' === res[ i - 1 ] ) {
          (function( a ) {
            if ( !a || !a.length ) return;
            a.shift()
            a[1] = res.pop()
            res.pop()
            res.push( a[0] )
            res.push( a[1] )
          })( ua.match( res[0].indexOf( 'mozilla' ) == 0 ? /.+ ([a-z]+)\/(\d+)(?:\.[\d\.]*).*?$/ : /^([a-z]+)\/(\d+)(?:\.[\d\.]*)/ ) )
        }
        v = res[ i ]
        res[ i ] = parseInt( v, 10 )
        res[ i ] = res[ i - 1 ] + res[ i ]
        res.shift()
        res[0] = res[0].replace( /( .*)+/, '' )
        res[1] = res[1].replace( 'apple', '' )

        isMobile ? res.push( 'mobile' ) : res.push( 'desktop' )
      } else {
        if ( isMobile ) {
          res = /.+(windows).*?(iemobile)[\/ ]{1}(\d+(?:\.\d+)*).*/.exec( ua )
        } else {
          res = /.+(?:(msie) (\d+(?:\.\d+)*).*);.*?(windows).*/.exec( ua )
        }

        res.shift()
        res = [ isMobile ? res.shift() : res.pop(), 'trident' ].concat( res )

        v = res[3]
        res[3] = parseInt( v, 10 )
        res[3] = res[2] + res[3]
        res.push( isMobile ? 'mobile' : 'desktop' )

        if ( -1 != ua.indexOf( 'windows phone' ) ) {
          res[0] = 'windows_phone'
        }
      }

      ret.platform = res[0]
      ret.core = res[1]
      ret.browser = res[2]
      ret.device = res[4]
      ret.version = v
      ret.toString = function() {
        var s = []
        for ( var key in this ) {
          if ( typeof this[key] === 'string' ) {
            s.push(this[key])
          }
        }
        return s.join(' ');
      }

      ret[ ret.browser ] = parseFloat( ret.version, 10 )

      return ret;
    }
  }
  
  window.agent = agent

  // Expose agent as an AMD module
  if ( typeof define === "function" && define.amd && define.amd.agent ) {
    define( "agent", [], function() { return agent; } )
  }

})( window );

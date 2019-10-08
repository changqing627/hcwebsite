

jQuery(document).ready(function() {
    // loadBundles('ch');
    loadBundles(document.cookie.split("=")[1]);
    jQuery('#lang').change(function() {
        var selection = jQuery('#lang option:selected').val();
        loadBundles(selection != 'browser' ? selection : null); 
        document.cookie="lang="+selection;
        
    });
    
});




function loadBundles(lang) {
    
    
    jQuery.i18n.properties({
        name:'Messages',
        path:'/bundle/',
        mode:'both',
        language:lang,
        callback: function() {
            updateExamples();
        }
    });
}

function updateExamples() {
   
// head
    jQuery('#head01').empty().append(jQuery.i18n.prop('head01'));
    jQuery('#head02').empty().append(jQuery.i18n.prop('head02'));
    jQuery('#head03').empty().append(jQuery.i18n.prop('head03'));
    jQuery('#head04').empty().append(jQuery.i18n.prop('head04'));
    jQuery('#head05').empty().append(jQuery.i18n.prop('head05'));
    jQuery('#head06').empty().append(jQuery.i18n.prop('head06'));
    jQuery('#head07').empty().append(jQuery.i18n.prop('head07'));
    jQuery('#head08').empty().append(jQuery.i18n.prop('head08'));
    jQuery('#head09').empty().append(jQuery.i18n.prop('head09'));
    jQuery('#head10').empty().append(jQuery.i18n.prop('head10'));

    // footer
    jQuery('#foot01').empty().append(jQuery.i18n.prop('foot01'));
    jQuery('#foot02').empty().append(jQuery.i18n.prop('foot02'));
    jQuery('#foot03').empty().append(jQuery.i18n.prop('foot03'));
    jQuery('#foot04').empty().append(jQuery.i18n.prop('foot04'));
    jQuery('#foot05').empty().append(jQuery.i18n.prop('foot05'));
    jQuery('#foot06').empty().append(jQuery.i18n.prop('foot06'));
    jQuery('#foot07').empty().append(jQuery.i18n.prop('foot07'));
    jQuery('#foot08').empty().append(jQuery.i18n.prop('foot08'));
    jQuery('#foot09').empty().append(jQuery.i18n.prop('foot09'));

    // index
    jQuery('#index01').empty().append(jQuery.i18n.prop('index01'));
    jQuery('#index02').empty().append(jQuery.i18n.prop('index02'));
    jQuery('#index03').empty().append(jQuery.i18n.prop('index03'));
    jQuery('#index04').empty().append(jQuery.i18n.prop('index04'));

    // 铁路装备垂直营销平台
    jQuery('#rail01').empty().append(jQuery.i18n.prop('rail01'));
    jQuery('#rail02').empty().append(jQuery.i18n.prop('rail02'));
    jQuery('#rail03').empty().append(jQuery.i18n.prop('rail03'));
    jQuery('#rail04').empty().append(jQuery.i18n.prop('rail04'));
    jQuery('#rail05').empty().append(jQuery.i18n.prop('rail05'));
    jQuery('#rail06').empty().append(jQuery.i18n.prop('rail06'));
    jQuery('#rail07').empty().append(jQuery.i18n.prop('rail07'));
    jQuery('#rail08').empty().append(jQuery.i18n.prop('rail08'));

    // 产业互联网+铁路定制解决方案
    jQuery('#inter01').empty().append(jQuery.i18n.prop('inter01'));
    jQuery('#inter02').empty().append(jQuery.i18n.prop('inter02'));
    jQuery('#inter03').empty().append(jQuery.i18n.prop('inter03'));
    jQuery('#inter04').empty().append(jQuery.i18n.prop('inter04'));
    jQuery('#inter05').empty().append(jQuery.i18n.prop('inter05'));
    jQuery('#inter06').empty().append(jQuery.i18n.prop('inter06'));
    jQuery('#inter07').empty().append(jQuery.i18n.prop('inter07'));
    jQuery('#inter08').empty().append(jQuery.i18n.prop('inter08'));
    jQuery('#inter09').empty().append(jQuery.i18n.prop('inter09'));
    jQuery('#inter10').empty().append(jQuery.i18n.prop('inter10'));
    jQuery('#inter11').empty().append(jQuery.i18n.prop('inter11'));
    jQuery('#inter12').empty().append(jQuery.i18n.prop('inter12'));
    jQuery('#inter13').empty().append(jQuery.i18n.prop('inter13'));
    jQuery('#inter14').empty().append(jQuery.i18n.prop('inter14'));
    jQuery('#inter15').empty().append(jQuery.i18n.prop('inter15'));
    jQuery('#inter16').empty().append(jQuery.i18n.prop('inter16'));
    jQuery('#inter17').empty().append(jQuery.i18n.prop('inter17'));
    jQuery('#inter18').empty().append(jQuery.i18n.prop('inter18'));
    jQuery('#inter19').empty().append(jQuery.i18n.prop('inter19'));
    jQuery('#inter20').empty().append(jQuery.i18n.prop('inter20'));
    jQuery('#inter21').empty().append(jQuery.i18n.prop('inter21'));
    jQuery('#inter22').empty().append(jQuery.i18n.prop('inter22'));
    jQuery('#inter23').empty().append(jQuery.i18n.prop('inter23'));
    jQuery('#inter24').empty().append(jQuery.i18n.prop('inter24'));
    jQuery('#inter25').empty().append(jQuery.i18n.prop('inter25'));
    jQuery('#inter26').empty().append(jQuery.i18n.prop('inter26'));
    jQuery('#inter27').empty().append(jQuery.i18n.prop('inter27'));
    jQuery('#inter28').empty().append(jQuery.i18n.prop('inter28'));
    jQuery('#inter29').empty().append(jQuery.i18n.prop('inter29'));
    jQuery('#inter30').empty().append(jQuery.i18n.prop('inter30'));
    jQuery('#inter31').empty().append(jQuery.i18n.prop('inter31'));
    jQuery('#inter32').empty().append(jQuery.i18n.prop('inter32'));
    jQuery('#inter33').empty().append(jQuery.i18n.prop('inter33'));
    jQuery('#inter34').empty().append(jQuery.i18n.prop('inter34'));
    jQuery('#inter35').empty().append(jQuery.i18n.prop('inter35'));
    jQuery('#inter36').empty().append(jQuery.i18n.prop('inter36'));

    // about
    jQuery('#about01').empty().append(jQuery.i18n.prop('about01'));
    jQuery('#about02').empty().append(jQuery.i18n.prop('about02'));
    jQuery('#about03').empty().append(jQuery.i18n.prop('selectname01'));
    jQuery('#about04').empty().append(jQuery.i18n.prop('selectname02'));
    jQuery('#about05').empty().append(jQuery.i18n.prop('about05'));
    jQuery('#about06').empty().append(jQuery.i18n.prop('about06'));

    //  产业互联网+定制解决方案-case
    jQuery('#case01').empty().append(jQuery.i18n.prop('case01'));
    jQuery('#case02').empty().append(jQuery.i18n.prop('case02'));
    jQuery('#case03').empty().append(jQuery.i18n.prop('case03'));

    jQuery('#case04').empty().append(jQuery.i18n.prop('case04'));
    jQuery('#case05').empty().append(jQuery.i18n.prop('case05'));
    jQuery('#case06').empty().append(jQuery.i18n.prop('case06'));

    jQuery('#case07').empty().append(jQuery.i18n.prop('case07'));
    jQuery('#case08').empty().append(jQuery.i18n.prop('case08'));
    jQuery('#case09').empty().append(jQuery.i18n.prop('case09'));

    jQuery('#case10').empty().append(jQuery.i18n.prop('case10'));
    jQuery('#case11').empty().append(jQuery.i18n.prop('case11'));
    jQuery('#case12').empty().append(jQuery.i18n.prop('case12'));

    jQuery('#case13').empty().append(jQuery.i18n.prop('case13'));
    jQuery('#case14').empty().append(jQuery.i18n.prop('case14'));
    jQuery('#case15').empty().append(jQuery.i18n.prop('case15'));

    jQuery('#case16').empty().append(jQuery.i18n.prop('case16'));
    jQuery('#case17').empty().append(jQuery.i18n.prop('case17'));
    jQuery('#case18').empty().append(jQuery.i18n.prop('case18'));

    jQuery('#case19').empty().append(jQuery.i18n.prop('case19'));
    jQuery('#case20').empty().append(jQuery.i18n.prop('case20'));
    jQuery('#case21').empty().append(jQuery.i18n.prop('case21'));

    jQuery('#case22').empty().append(jQuery.i18n.prop('case22'));
    jQuery('#case23').empty().append(jQuery.i18n.prop('case23'));
    jQuery('#case24').empty().append(jQuery.i18n.prop('case24'));

    jQuery('#case25').empty().append(jQuery.i18n.prop('case25'));
    jQuery('#case26').empty().append(jQuery.i18n.prop('case26'));
    jQuery('#case27').empty().append(jQuery.i18n.prop('case27'));

    jQuery('#case28').empty().append(jQuery.i18n.prop('case28'));
    jQuery('#case29').empty().append(jQuery.i18n.prop('case29'));
    jQuery('#case30').empty().append(jQuery.i18n.prop('case30'));

    jQuery('#case31').empty().append(jQuery.i18n.prop('case31'));
    jQuery('#case32').empty().append(jQuery.i18n.prop('case32'));
    jQuery('#case33').empty().append(jQuery.i18n.prop('case33'));
    jQuery('#case34').empty().append(jQuery.i18n.prop('case34'));
    jQuery('#case35').empty().append(jQuery.i18n.prop('case35'));
    jQuery('#case37').empty().append(jQuery.i18n.prop('case37'));
    jQuery('#case38').empty().append(jQuery.i18n.prop('case38'));
    jQuery('#case39').empty().append(jQuery.i18n.prop('case39'));
    jQuery('#case40').empty().append(jQuery.i18n.prop('case40'));
    jQuery('#case41').empty().append(jQuery.i18n.prop('case41'));
    jQuery('#case42').empty().append(jQuery.i18n.prop('case42'));
    jQuery('#case43').empty().append(jQuery.i18n.prop('case43'));
    jQuery('#case44').empty().append(jQuery.i18n.prop('case44'));
    jQuery('#case45').empty().append(jQuery.i18n.prop('case45'));
    jQuery('#case46').empty().append(jQuery.i18n.prop('case46'));
    jQuery('#case47').empty().append(jQuery.i18n.prop('case47'));
    jQuery('#case48').empty().append(jQuery.i18n.prop('case48'));
    jQuery('#case49').empty().append(jQuery.i18n.prop('case49'));
    jQuery('#case50').empty().append(jQuery.i18n.prop('case50'));
    jQuery('#case51').empty().append(jQuery.i18n.prop('case51'));

    jQuery('#case52').empty().append(jQuery.i18n.prop('case52'));
    jQuery('#case53').empty().append(jQuery.i18n.prop('case53'));
    jQuery('#case54').empty().append(jQuery.i18n.prop('case54'));
    jQuery('#case55').empty().append(jQuery.i18n.prop('case55'));
    jQuery('#case56').empty().append(jQuery.i18n.prop('case56'));
    jQuery('#case57').empty().append(jQuery.i18n.prop('case57'));
    jQuery('#case58').empty().append(jQuery.i18n.prop('case58'));
    jQuery('#case59').empty().append(jQuery.i18n.prop('case59'));
    jQuery('#case60').empty().append(jQuery.i18n.prop('case60'));
    jQuery('#case61').empty().append(jQuery.i18n.prop('case61'));
    jQuery('#case62').empty().append(jQuery.i18n.prop('case62'));
    jQuery('#case63').empty().append(jQuery.i18n.prop('case63'));
    jQuery('#case64').empty().append(jQuery.i18n.prop('case64'));
    jQuery('#case65').empty().append(jQuery.i18n.prop('case65'));
    jQuery('#case66').empty().append(jQuery.i18n.prop('case66'));
    jQuery('#case67').empty().append(jQuery.i18n.prop('case67'));
    jQuery('#case68').empty().append(jQuery.i18n.prop('case68'));

    jQuery('#case69').empty().append(jQuery.i18n.prop('case69'));
    jQuery('#case70').empty().append(jQuery.i18n.prop('case70'));
    jQuery('#case71').empty().append(jQuery.i18n.prop('case71'));

    jQuery('#case72').empty().append(jQuery.i18n.prop('case72'));
    jQuery('#case73').empty().append(jQuery.i18n.prop('case73'));
    jQuery('#case74').empty().append(jQuery.i18n.prop('case74'));

    jQuery('#case75').empty().append(jQuery.i18n.prop('case75'));
    jQuery('#case76').empty().append(jQuery.i18n.prop('case76'));
    jQuery('#case77').empty().append(jQuery.i18n.prop('case77'));



}


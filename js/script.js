jQuery(document).ready(function(){
    var width = jQuery(this).width();
    if(width < 768){
        jQuery(".menu").hide();
        jQuery(".content").css({'width':'100%','display':'block'});
        jQuery(".flexible").css({'width':'100%','flex-direction':'column'});
       
        jQuery(".bottom-pic").css({'left':'55px','top':'-30%'});
        jQuery(".info").css({'width':'100%','height':'100vh','':''});

    }
    jQuery(".home-lg").click(function(){
        // alert("okkkk")
        jQuery(".lg-home").animate({'left':"49%"},500).css({'display':'block','z-index':'999'});
        jQuery(".lg-about").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-service").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-portfolio").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-testimonial").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-gallery").animate({'left':"9%"},500).css({'display':'none'});
    
    })
    jQuery(".about-lg").click(function(){
        // alert("okkkk")
        jQuery(".lg-home").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-about").animate({'left':"49%"},500).css({'display':'block','z-index':'999'});
        jQuery(".lg-service").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-portfolio").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-testimonial").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-gallery").animate({'left':"9%"},500).css({'display':'none'});
    
    })
    jQuery(".service-lg").click(function(){
        // alert("okkkk")
        jQuery(".lg-home").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-about").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-service").animate({'left':"49%"},500).css({'display':'block','z-index':'999'});
        jQuery(".lg-portfolio").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-testimonial").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-gallery").animate({'left':"9%"},500).css({'display':'none'});
    
    })
    jQuery(".portfolio-lg").click(function(){
        // alert("okkkk")
        jQuery(".lg-home").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-about").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-service").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-portfolio").animate({'left':"49%"},500).css({'display':'block','z-index':'999'});
        jQuery(".lg-testimonial").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-gallery").animate({'left':"9%"},500).css({'display':'none'});
    
    })
    jQuery(".testimonial-lg").click(function(){
        // alert("okkkk")
        jQuery(".lg-home").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-about").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-service").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-portfolio").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-testimonial").animate({'left':"49%"},500).css({'display':'block','z-index':'999'});
        jQuery(".lg-gallery").animate({'left':"9%"},500).css({'display':'none'});
    
    })
    jQuery(".gallery-lg").click(function(){
        // alert("okkkk")
        jQuery(".lg-home").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-about").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-service").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-portfolio").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-testimonial").animate({'left':"9%"},500).css({'display':'none'});
        jQuery(".lg-gallery").animate({'left':"49%"},500).css({'display':'block','z-index':'999'});
    
    })
})
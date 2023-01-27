
var each = function (coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}
var filter = function (array, predicate) {
    var acc = [];
    each(array, function (e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;}


    var data = [
        {
            type : 'sport' ,
            nameImg : ' Cristiano Ronaldo' ,
            srcImg : 'https://images.beinsports.com/UcOc1DzQ9crpTe3NclVM3hVITY0=/full-fit-in/1000x0/4539689-Icon_BAP_061222_93_210.jpg'
        },
        {
            type : 'sport',
            nameImg : 'Leo Messi' ,
            srcImg : 'https://www.fcbarcelona.com/fcbarcelona/photo/2020/02/15/c9bf7f93-0b10-44cd-85d3-c4e31a6b24ff/mini_2020-02-15_FCBvsGETAFE_15.jpg'
        },
        {   
            type : 'sport',
            nameImg : 'Neymar Jr' ,
            srcImg : 'https://imgresizer.eurosport.com/unsafe/1280x960/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2022/11/14/3490356-71154288-2560-1440.jpg'

        } ,
        {
            type : 'sport' ,
            nameImg : 'zouhayer dhawedi' ,
            srcImg : 'https://www.africatopsports.com/wp-content/uploads/2012/12/12926824631.jpg'
        },
        {
            type : 'actor',
            nameImg : 'leonardo dicaprio' ,
            srcImg : 'https://file1.closermag.fr/var/closermag/storage/images/9/4/1/3/9413519/leonardo-dicaprio.jpg?alias=exact1024x768_l' ,
        },
        {
            type : 'actor' ,
            nameImg : 'Adel imam',
            srcImg : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Adel_Emam_%2834408206514%29.jpg/220px-Adel_Emam_%2834408206514%29.jpg' ,
        },
        {
            type :'actor',
            nameImg : 'Brad pitt',
            srcImg : 'https://people.com/thmb/_iWgClj3vOlmEg6p0FIYpjQ0iBE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x369:736x371)/brad-pitt-f83092f96f674c46b678fd846bc5b25f.jpg',
        },
        {
            type : 'actor',
            nameImg : 'jason statham',
            srcImg : 'https://www.themoviedb.org/t/p/w500/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
        },
        {
            type : 'musician',
            nameImg : 'michael jackson' ,
            srcImg : 'https://static.wikia.nocookie.net/bttf/images/2/2c/Michael_Jackson.jpg/revision/latest?cb=20220625105913',
        },
        {
            type : 'musician',
            nameImg : 'ed sheeran',
            srcImg : 'https://resize.elle.fr/original/var/plain_site/storage/images/people/la-vie-des-people/news/ed-sheeran-pourquoi-il-n-aime-pas-les-remises-de-prix-3953055/95370348-1-fre-FR/Ed-Sheeran-pourquoi-il-n-aime-pas-les-remises-de-prix.jpg',
        },
        {
            type : 'musicien',
            nameImg : 'samara',
            srcImg : 'https://www.tunisie-tribune.com/wp-content/uploads/2022/12/Le-rappeur-Samara-a-ete-libere.jpg',
        
        },
        {
            type : 'musician',
            nameImg : 'wael jassar',
            srcImg : 'https://yt3.googleusercontent.com/ytc/AL5GRJVgGxI5d_yEsWHmRMxFfkVi4rfQAFKPaJkukWLk=s900-c-k-c0x00ffffff-no-rj',
        }

    ] ; 
     



function rand() {
    return Math.floor(Math.random()*4)}
var random=0
var namerand=''
var tr = 0 

$('#sport').click(function (e) { 
 
    e.preventDefault();
    if($("#outp").children().length===0){
    random=rand()
    namerand=data[random].nameImg
    $("#outp").append($(`<img id="im" class="a" src=${data[random].srcImg}>`));
    }
    $("#txt").keypress(function( event ) {
        console.log(tr)
        if ( event.which == 13 ) {
         
            event.preventDefault();
            if ($('#txt').val().toLowerCase()===namerand.toLowerCase() ){
                $("#im").removeClass($("#im").attr("class"))
                alert("you win")
                $("#txt").val("")
                $("#im").remove()
                random=rand()
                namerand=data[random].nameImg
                $("#outp").append($(`<img id="im" class="a" src=${data[random].srcImg}>`))

                tr=0
                
            }
             else if(tr===4){
                 tr=0
                 $("#im").remove()
            } 
           else{
                if (tr ===3 ){
                    $("#im").removeClass("c");
                    

                    tr ++
                    alert("you lose")

                }else{
                    if($("#im").attr("class")==="c"){
                        
                        tr++
                    }
                    else if($("#im").attr("class")==="b"){
                        $("#im").addClass("c")
                        $("#im").removeClass("b")
                        tr ++
                    }else if($("#im").attr("class")==="a"){
                        $("#im").addClass("b")
                        $("#im").removeClass("a")
                        tr ++
                    }
                }
                
            }
        }
    
       
    })
    
}) ;  
$('#music').click(function (e) { 
    e.preventDefault();
    if($("#outp").children().length===0){
    random=rand()
    namerand=data[8+random].nameImg
    $("#outp").append($(`<img id="im" class="a" src=${data[8+random].srcImg}>`));}
    $("#txt").keypress(function( event ) {
        if ( event.which == 13 ) {
            event.preventDefault();
            if ($('#txt').val().toLowerCase()===namerand.toLowerCase() ){
                $("#im").removeClass($("#im").attr("class"))
                alert("you win")
                $("#txt").val("")
                $("#im").remove()
                random=rand()
                namerand=data[random].nameImg
                $("#outp").append($(`<img id="im" class="a" src=${data[random].srcImg}>`))

                tr=0
                
            }
             else if(tr===4){
                 tr=0
                 $("#im").remove()
            } 
           else{
                if (tr ===3 ){
                    $("#im").removeClass("c");
                    

                    tr ++
                    alert("you lose")

                }else{
                    if($("#im").attr("class")==="c"){
                        
                        tr++
                    }
                    else if($("#im").attr("class")==="b"){
                        $("#im").addClass("c")
                        $("#im").removeClass("b")
                        tr ++
                    }else if($("#im").attr("class")==="a"){
                        $("#im").addClass("b")
                        $("#im").removeClass("a")
                        tr ++
                    }
                }
                
            }
        }
    
       
    })
    
}) ;  
$('#actor').click(function (e) { 
    e.preventDefault();
    if($("#outp").children().length===0){
    random=rand()
    namerand=data[4+random].nameImg
    $("#outp").append($(`<img id="im" class="a" src=${data[4+random].srcImg}>`));}
    $("#txt").keypress(function( event ) {
        if ( event.which == 13 ) {
            event.preventDefault();
            if ($('#txt').val().toLowerCase()===namerand.toLowerCase() ){
                $("#im").removeClass($("#im").attr("class"))
                alert("you win")
                $("#txt").val("")
                $("#im").remove()
                random=rand()
                namerand=data[random].nameImg
                $("#outp").append($(`<img id="im" class="a" src=${data[random].srcImg}>`))

                tr=0
                
            }
             else if(tr===4){
                 tr=0
                 $("#im").remove()
            } 
           else{
                if (tr ===3 ){
                    $("#im").removeClass("c");
                    

                    tr ++
                    alert("you lose")

                }else{
                    if($("#im").attr("class")==="c"){
                        
                        tr++
                    }
                    else if($("#im").attr("class")==="b"){
                        $("#im").addClass("c")
                        $("#im").removeClass("b")
                        tr ++
                    }else if($("#im").attr("class")==="a"){
                        $("#im").addClass("b")
                        $("#im").removeClass("a")
                        tr ++
                    }
                }
                
            }
        }
    
       
    })
    
}) ;  

  
  
     
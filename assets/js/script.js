$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
});

$(document).ready(function() {
	$("button").dblclick(function(){
		$("p").hide();
	});
});

$(document).ready(function(){
    $("button").click(function(){
   $("#test").hide();
    });
});

$(document).ready(function(){
    $("#p1").mouseenter(function(){
        alert("You entered p1!");
    });
});

$(document).ready(function(){
    $("#p2").mouseleave(function(){
        alert("Bye! You now leave p1!");
    });
});

$(document).ready(function(){
    $("#p3").mousedown(function(){
        alert("Mouse down over p1!");
    });
});

$(document).ready(function(){
    $("#p4").mouseup(function(){
        alert("Mouse up over p1!");
    });
});

$(document).ready(function(){
    $("#p5").hover(function(){
        alert("You entered p1!");
    },
    function(){
        alert("Bye! You now leave p1!");
    }); 
});

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});

$(document).ready(function(){
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }, 
        click: function(){
            $(this).css("background-color", "yellow");
        }  
    });
});

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("p").hide(1000);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div4").fadeOut();
        $("#div5").fadeOut("slow");
        $("#div6").fadeOut(3000);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideUp("slow");
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div").animate({left: '250px'});
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#p1").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
});

$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});

$(document).ready(function(){
    $("button").click(function(){
        alert("Value: " + $("#test1").val());
    });
});

$(document).ready(function(){
    $("button").click(function(){
        alert($("#fb").attr("href"));
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text(function(i, origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
        });
    });

    $("#btn2").click(function(){
        $("#test2").html(function(i, origText){
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
        });
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function(){
        $("ol").append("<li>Appended item</li>");
    });
});

function appendText() {
  var txt1 = "<p>Text.</p>";        // Create text with HTML
  var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text.";         // Create text with DOM
  $("body").append(txt1, txt2, txt3);   // Append new elements
}

$(document).ready(function(){
  $("#btn1").click(function(){
    $("img").before("<b>Before</b>");
  });

  $("#btn2").click(function(){
    $("img").after("<i>After</i>");
  });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").remove();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").empty();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");
    });
});

$(document).ready(function(){
  $("button").click(function(){
    alert("Background color = " + $("p").css("background-color"));
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("p").css("background-color", "yellow");
  });
});

$(document).ready(function(){
  $("button").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#div5").width() + "</br>";
    txt += "Height of div: " + $("#div5").height();
    $("#div5").html(txt);
  });
});

$(document).ready(function(){
    $("span").parents().css({"color": "red", "border": "2px solid red"});
});

$(document).ready(function(){
    $("div").children().css({"color": "red", "border": "2px solid red"});
});


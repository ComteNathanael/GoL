var tailleCase = 10;
        var nbr_case_hauteur = 80;
        var nbr_case_largeur = 80;
        var canvas = document.getElementById("life");
        canvas.width = nbr_case_largeur*tailleCase;
        canvas.height = nbr_case_hauteur*tailleCase;
        var context = canvas.getContext("2d");
        context.strokeStyle = "#00FF00";
        context.fillStyle = "#009900";
        context.lineWidth = 0.25;
        for(var x = 0; x < canvas.width; x += tailleCase) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, canvas.height);
            context.lineWidth = (x % (5*tailleCase) == 0) ? 0.5 : 0.25;
            if(x % (5*tailleCase) == 0 ) {context.fillText(x, x, 10);}
            context.stroke();
        }

        for(var y = 0; y < canvas.height; y += tailleCase) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(canvas.width, y);
            context.lineWidth = (y % (5*tailleCase) == 0) ? 0.5 : 0.25;
            if(y % (5*tailleCase) == 0 ) {context.fillText(y, 0, y + 10);}
            context.stroke();
        }
// this is a comment, it has no effect!!!